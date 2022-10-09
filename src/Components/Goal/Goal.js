import React, { useState } from "react";
import Card from "../Card/Card";
import Date from "../../Date/Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Goal.scss";

const Goal = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.content);

  const conditionalEditWindow = !isEditing ? (
    <span> {editedText}</span>
  ) : (
    <input
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      autoFocus
      required
    />
  );

  const conditionalEditControls = !isEditing ? (
    <FontAwesomeIcon
      onClick={() => setIsEditing(true)}
      icon={faPen}
      className="goal-item__control--icon"
    />
  ) : (
    <FontAwesomeIcon
      onClick={() => setIsEditing(false)}
      icon={faCheck}
      className="goal-item__control--icon"
    />
  );

  return (
    <Card className="goal">
      <li className="goal-item">
        <div className="goal-item__content">
          {conditionalEditWindow}
          {props.time && <Date time={props.time} />}
        </div>

        <div className="goal-item__control">
          {conditionalEditControls}
          <FontAwesomeIcon
            onClick={() => props.onRemoveGoal(props.id)}
            icon={faTrash}
            className="goal-item__control--icon"
          />
        </div>
      </li>
    </Card>
  );
};

export default Goal;
