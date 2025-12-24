const express = require("express");
const dotenv = require("dotenv");
const { dbConnection } = require("./config/dbconnect");
const videoroute = require("./routes/route");

dotenv.config();
dbConnection();

const app = express();
const cors = require("cors");
app.use(cors({
  origin: "*"
}));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://192.168.0.116:5173"
  ],
  methods: ["GET", "POST", "DELETE", "PUT"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/video", videoroute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on ${port}`));
