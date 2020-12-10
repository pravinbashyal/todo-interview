import React from "react";

export function TodoItem({ name, dueDate, done }) {
  const DoneButton = ({ onClick }) => {
    return <div onClick={onClick}>Done</div>;
  };
  return (
    <div>
      <DoneButton onClick={console.log}></DoneButton>
    </div>
  );
}
