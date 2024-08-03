import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form
      className="flex items-center justify-center mb-8"
      onSubmit={handleSubmit}
    >
      {/* Input field for adding a new task */}
      <input
        type="text"
        className="border-b-2 border-blue-400 bg-transparent text-gray-800 placeholder-gray-500 p-2 mr-2 focus:outline-none focus:border-blue-600"
        value={value}
        placeholder="Enter your task here..."
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Button to submit the form and add task */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add Task
      </button>
    </form>
  );
};
