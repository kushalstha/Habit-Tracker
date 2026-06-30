import { Link } from "react-router-dom";

export default function HabitCard({ habit, onToggle, onDelete }) {
  const today = new Date().toISOString().split("T")[0];
  const isCompleted = habit.completions.includes(today);

  // Last 7 days from Sunday to Saturday
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split("T")[0];
  });

  return (
    <div className="bg-white p-4 rounded shadow">

      {/* TOP ROW */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="font-semibold text-lg">
            <Link to={`/habit/${habit.id}`} className="hover:underline">
              {habit.name}
            </Link>
          </h2>
          <p className="text-sm text-gray-500">
            🔥 Streak: {habit.streak ?? 0} | {habit.frequency}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          {/* 6. Green when today completed */}
          <button
            onClick={() => onToggle(habit.id)}
            className={`px-3 py-1 rounded text-white ${
              isCompleted ? "bg-green-600" : "bg-gray-400"
            }`}
          >
            {isCompleted ? "✓ Done" : "Tick"}
          </button>

          {/* 5. Delete */}
          <button
            onClick={() => onDelete(habit.id)}
            className="text-red-400 text-sm hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>

      {/* CALENDAR STRIP — Sunday to Saturday */}
      <div className="flex gap-2">
        {last7.map((date, index) => {
          const ticked = habit.completions.includes(date);
          return (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1">
                {days[new Date(date + "T00:00:00").getDay()]}
              </span>
              <input
                type="checkbox"
                checked={ticked}
                readOnly
                className="w-5 h-5 accent-green-500"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
}