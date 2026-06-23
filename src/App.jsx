import Title from "./components/Title";
import HabitList from "./components/HabitList";
import { useState } from "react";
import AddHabitForm from "./components/AddHabitForm";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <Title />

      <div className="flex justify-center my-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Habit
        </button>
      </div>

      <HabitList />

      {showForm && (
        <AddHabitForm onClose={() => setShowForm(false)} />
      )}

    </div>
  );
}