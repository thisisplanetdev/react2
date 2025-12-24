import { useState } from "react";

export default function AddVideo({ onAdd }) {
  const [number, setNumber] = useState("");
  const [link, setLink] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!number || !link) return alert("All fields required");

    const res = await fetch("http://localhost:8000/video/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number, link, tag }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // update frontend
    onAdd(data.data || { number, link, tag });

    setNumber("");
    setLink("");
    setTag("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white p-4 rounded-xl flex gap-3 flex-wrap"
    >
      <input
        type="number"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="px-2 py-1 text-black rounded bg-gray-400"
      />

      <input
        type="text"
        placeholder="Video link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="px-2 py-1 text-black rounded bg-gray-400"
      />
      <input
        type="text"
        placeholder="Video tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="px-2 py-1 text-black rounded bg-gray-400"
      />

      <button
        type="submit"
        className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-400"
      >
        Add
      </button>
    </form>
  );
}
