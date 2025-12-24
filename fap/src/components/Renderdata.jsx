export function Renderdata({ element, onDelete }) {
  return (
    <div className="bg-black text-white grid grid-cols-4 gap-6 p-4 rounded-2xl w-fit text-center">
      <div>{element.number}</div>

      <div>
        <a
          href={element.link}
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>

      <div className="italic text-gray-300">
        {element.tag || "No tag"}
      </div>

      <div className="flex space-x-2 justify-center">
        <button
          className="bg-red-600 px-2 py-1 rounded hover:bg-red-400"
          onClick={() => onDelete(element.number)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
