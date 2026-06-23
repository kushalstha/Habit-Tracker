import { useState } from "react";

export default function AddHabitForm({ onClose }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Habit:", name);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-5 rounded w-80">

        <h2 className="text-xl font-bold mb-3">Add Habit</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="border w-full p-2 mb-3"
            placeholder="Habit name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500"
            >
              Cancel
            </button>

            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Add
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}