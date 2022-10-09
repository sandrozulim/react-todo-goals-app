import React, { useState } from "react";
import AddGoalForm from "./Components/AddGoalForm/AddGoalForm";
import GoalList from "./Components/GoalList/GoalList";

const DUMMY_GOALS = [
  { id: 0, content: "Learn props" },
  { id: 1, content: "Learn conditional rendering" },
  { id: 2, content: "Get some sleep" },
  { id: 3, content: "Learn useState" },
];

function App() {
  const [newGoals, setNewGoals] = useState(DUMMY_GOALS);

  const addGoalHandler = function (inputedGoal) {
    setNewGoals((prevGoals) => {
      return [
        {
          id: Math.random().toString(),
          content: inputedGoal,
          time: new Date(),
        },
        ...prevGoals,
      ];
    });
  };

  const removeGoalHandler = function (removeItemId) {
    setNewGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== removeItemId);
      return updatedGoals;
    });
  };

  return (
    <main>
      <AddGoalForm onAddGoal={addGoalHandler}></AddGoalForm>
      <GoalList data={newGoals} onRemoveGoal={removeGoalHandler}></GoalList>
    </main>
  );
}

export default App;
