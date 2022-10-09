import React, { useState } from "react";
import Goal from "../Goal/Goal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./GoalList.scss";

const GoalList = (props) => {
  const [isSorted, setIsSorted] = useState(false);

  const removeGoalHandler = function (goalId) {
    props.onRemoveGoal(goalId);
  };

  const goalsData = props.data.map((item) => {
    return (
      <Goal
        key={item.id}
        content={item.content}
        id={item.id}
        time={item.time}
        onRemoveGoal={removeGoalHandler}
      ></Goal>
    );
  });

  const sortedGoalsData = [...goalsData].reverse();

  const sortListHandler = function () {
    setIsSorted(true);
  };

  const unsortListHandler = function () {
    setIsSorted(false);
  };

  return (
    <section className="goals">
      <button
        onClick={!isSorted ? sortListHandler : unsortListHandler}
        className="goals__sort-btn"
      >
        <span>Sort</span>
        <FontAwesomeIcon icon={faSort} />
      </button>
      <ul className="goals__list">{!isSorted ? goalsData : sortedGoalsData}</ul>
    </section>
  );
};

export default GoalList;
