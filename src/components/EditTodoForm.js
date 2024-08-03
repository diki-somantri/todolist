import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form
      className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8 md:mb-4"
      onSubmit={handleSubmit}
    >
      {/* Input field for updating task */}
      <input
        type="text"
        className="border-b-2 border-blue-400 bg-transparent text-gray-800 placeholder-gray-500 p-2 mr-2 focus:outline-none focus:border-blue-600 mb-4 md:mb-0"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Button to submit the form and update task */}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300"
      >
        <FontAwesomeIcon icon={faEdit} className="mr-2" />
        Update Task
      </button>
    </form>
  );
};
