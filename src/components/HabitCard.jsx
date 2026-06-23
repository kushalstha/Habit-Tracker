import { useState } from "react";

export default function HabitCard({ habit }) {
  const [done, setDone] = useState(false);

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">

      {/* LEFT SIDE */}
      <div>
        <h2 className="font-semibold text-lg">{habit.name}</h2>

        <p className="text-sm text-gray-500">
          🔥 Streak: {habit.streak}
        </p>

        {/* CALENDAR STRIP */}
        <div className="flex gap-2 mt-2">
          {habit.last7Days.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              
              <span className="text-xs text-gray-500">
                {days[index]}
              </span>

              <div
                className={`w-5 h-5 rounded-full mt-1 ${
                  day ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE BUTTON */}
      <button
        onClick={() => setDone(!done)}
        className={`px-3 py-1 rounded text-white ${
          done ? "bg-green-600" : "bg-gray-400"
        }`}
      >
        {done ? "Done" : "Tick"}
      </button>

    </div>
  );
}