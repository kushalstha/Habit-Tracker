import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import Title from "../components/Title";
import HabitList from "../components/HabitList";
import AddHabitForm from "../components/AddHabitForm";

export default function HomePage() {
  const { habits, showForm, setShowForm, toggleToday, addHabit, deleteHabit } =
    useOutletContext();

  return (
    <>
      <Title />

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Habit
        </button>
      </div>

      <HabitList
        habits={habits}
        onToggle={toggleToday}
        onDelete={deleteHabit}
      />

      {showForm &&
        createPortal(
          <AddHabitForm
            onClose={() => setShowForm(false)}
            onAdd={addHabit}
          />,
          document.body
        )}
    </>
  );
}
