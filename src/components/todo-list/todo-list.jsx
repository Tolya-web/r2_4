import React from "react";
import ToDoListItem from "../todo-list-item";
import "./todo-list.scss";

const ToDoList = ({ todos, onDelete, onToggle, onImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ToDoListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggle={() => onToggle(id)}
        onImportant={() => onImportant(id)}
      />
    );
  });

  return <div className="task-table">{elements}</div>;
};

export default ToDoList;
