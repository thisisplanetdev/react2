const videomodel = require("../models/videomodel");
const deletevideo = async (req, res) => {
  try {
    const { number } = req.params;

    const deletedVideo = await videomodel.findOneAndDelete({ number });

    if (!deletedVideo) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.status(200).json({
      message: "Video deleted successfully",
      data: deletedVideo,
    });
  } catch (error) {
    console.error("DELETE VIDEO ERROR:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const listvideo = async (req, res) => {
  try {
    const all_videos = await videomodel.find({});
    res.status(201).send(all_videos);
  } catch (error) {
    res.send("there was a error", error);
  }
};
const addvideo = async (req, res) => {
  try {
    console.log(req.body);
    const { number, link, tag } = req.body;
    console.log(number, link);

    const find = await videomodel.findOne({ number });
    if (find) {
      return res.status(400).json({ message: "video already exist" });
    }
    const newvideo = await videomodel.create({
      number,
      link,
      tag,
    });

    res.status(201).json({
      message: "Video added successfully",
      data: newvideo,
    });
  } catch (error) {
    console.log("there error in add", error);
  }
};

module.exports = { addvideo, listvideo, deletevideo };
