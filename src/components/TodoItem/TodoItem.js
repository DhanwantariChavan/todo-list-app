import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button 
        onClick={handleRemove}
        className="todo-remove-button"
        title="Delete task"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;