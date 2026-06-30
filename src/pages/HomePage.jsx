import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import Title from "../components/Title";
import HabitList from "../components/HabitList";
import AddHabitForm from "../components/AddHabitForm";
<<<<<<< HEAD
import Buttons from "../components/Buttons";
=======
>>>>>>> f3bb5424556da45db3eebf8bfe467a4c7e8dec56

export default function HomePage() {
  const { habits, showForm, setShowForm, toggleToday, addHabit, deleteHabit } =
    useOutletContext();

  return (
    <>
      <Title />

      <div className="flex justify-center mb-6">
<<<<<<< HEAD
        <Buttons onClick={() => setShowForm(true)} className="px-4 py-2">
          + Add Habit
        </Buttons>
=======
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Habit
        </button>
>>>>>>> f3bb5424556da45db3eebf8bfe467a4c7e8dec56
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
