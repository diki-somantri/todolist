import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
  isSelected,
  toggleSelect,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-gray-200 p-4 rounded-lg mb-4 flex justify-between items-center shadow-md transform hover:scale-105 transition duration-300">
      {/* Checkbox and task description */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-4 cursor-pointer"
          checked={isSelected}
          onChange={toggleSelect}
        />
        <p
          onClick={() => toggleComplete(task.id)}
          className={`cursor-pointer flex-grow ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.task}
        </p>
      </div>

      {/* Icons for completing, editing, and deleting tasks */}
      <div className="flex items-center">
        {/* Icon to toggle completion */}
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-gray-300 mr-4 cursor-pointer hover:text-gray-400"
          onClick={() => toggleComplete(task.id)}
        />

        {/* Icon to edit task */}
        <FontAwesomeIcon
          icon={faPen}
          className="text-gray-300 mr-4 cursor-pointer hover:text-gray-400"
          onClick={() => editTodo(task.id)}
        />

        {/* Icon to delete task */}
        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-300 cursor-pointer hover:text-gray-400"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
