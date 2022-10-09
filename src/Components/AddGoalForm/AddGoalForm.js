import React, { useState } from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./AddGoalForm.scss";

const AddGoalForm = (props) => {
  const [inputedGoal, setInputedGoal] = useState("");
  const [openAddGoalForm, setOpenAddGoalForm] = useState(false);

  const inputChangeHandler = (e) => {
    setInputedGoal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (inputedGoal.trim() === "") return;
    props.onAddGoal(inputedGoal);
    setInputedGoal("");
    setOpenAddGoalForm(false);
  };

  const openFormHandler = function () {
    setOpenAddGoalForm(true);
  };

  const closeFormHandler = function () {
    setOpenAddGoalForm(false);
  };

  return (
    <Card className="add-goal-container">
      {!openAddGoalForm && (
        <button
          onClick={openFormHandler}
          className="add-goal-form__control__btn--hidden"
        >
          Create new
          <FontAwesomeIcon icon={faCirclePlus} className="icon-rotate" />
        </button>
      )}

      {openAddGoalForm && (
        <form onSubmit={formSubmitHandler} className="add-goal-form">
          <input
            value={inputedGoal}
            onChange={inputChangeHandler}
            className="add-goal-form__input"
            type="text"
            id="add-goal"
            placeholder="..."
            required
          />

          <div className="add-goal-form__control">
            <button
              onClick={closeFormHandler}
              type="button"
              className="add-goal-form__control__btn"
            >
              Cancel
            </button>

            <button className="add-goal-form__control__btn">Add</button>
          </div>
        </form>
      )}
    </Card>
  );
};

export default AddGoalForm;
