import { useEffect, useState } from "react";
import "./App.css";
import { Renderdata } from "./components/RenderData";


import AddVideo from "./components/AddVideo";

export function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/video/list")
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error(err));
  }, []);
  useEffect(() => {
  console.log("VIDEOS UPDATED:", videos);
}, [videos]);

  const handleDelete = async (number) => {
    await fetch(`http://localhost:8000/video/delete/${number}`, {
      method: "POST",
    });

    setVideos(prev =>
      prev.filter(video => video.number !== number)
    );
  };
   const handleAdd = (newVideo) => {
    setVideos(prev => [...prev, newVideo]);
  };
  return (

    <div className="bg-gray-800 w-full min-h-screen">
      
    <AddVideo onAdd={handleAdd}/>
      <div className="flex flex-col gap-4 p-4">
        {videos.map(video => (
          <Renderdata
            key={video.number}
            element={video}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
