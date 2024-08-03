import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuid4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuid4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // Function to toggle completion of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
  };

  // Function to delete all selected todos
  const deleteSelectedTodos = () => {
    const remainingTodos = todos.filter(
      (todo) => !selectedTodos.includes(todo.id)
    );
    setTodos(remainingTodos);
    setSelectedTodos([]);
  };

  // Function to delete all todos
  const deleteAllTodos = () => {
    setTodos([]);
    setSelectedTodos([]);
  };

  // Function to toggle editing mode of a todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Function to edit task of a todo
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Function to toggle selection of a todo
  const toggleSelectTodo = (id) => {
    const index = selectedTodos.indexOf(id);
    if (index === -1) {
      setSelectedTodos([...selectedTodos, id]);
    } else {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
    }
  };

  // Function to check if a todo is selected
  const isSelected = (id) => {
    return selectedTodos.includes(id);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-400 to-purple-400 text-gray-800 p-8 rounded-lg">
      <h1 className="text-2xl mb-4">Get Things Done!</h1>

      {/* Form to add new todo */}
      <div className="mb-4">
        <TodoForm addTodo={addTodo} />
      </div>

      {/* Display total number of todos */}
      {todos.length > 0 && (
        <p className="mb-2 text-sm">Total todo lists: {todos.length}</p>
      )}

      {/* List of todos */}
      <div className="grid grid-cols-1 gap-4">
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              isSelected={isSelected(todo.id)}
              toggleSelect={() => toggleSelectTodo(todo.id)}
            />
          )
        )}
      </div>

      {/* Buttons to delete selected todos and delete all todos */}
      <div className="flex justify-end mt-4">
        {selectedTodos.length > 0 && (
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300 mr-2"
            onClick={deleteSelectedTodos}
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete Selected
          </button>
        )}
        {todos.length > 0 && (
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300"
            onClick={deleteAllTodos}
          >
            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
            Delete All
          </button>
        )}
      </div>
    </div>
  );
};
