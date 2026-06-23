import HabitCard from "./HabitCard";

export default function HabitList() {
  const habits = [
    {
      id: 1,
      name: "Drink Water",
      streak: 5,
      last7Days: [1, 1, 0, 1, 1, 0, 1],
    },
    {
      id: 2,
      name: "Workout",
      streak: 3,
      last7Days: [1, 0, 1, 0, 1, 0, 0],
    },
    {
      id: 3,
      name: "Read Book",
      streak: 7,
      last7Days: [1, 1, 1, 1, 1, 1, 1],
    },
  ];

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}