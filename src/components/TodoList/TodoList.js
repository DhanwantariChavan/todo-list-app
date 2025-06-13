import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import FilterSort from '../FilterSort/FilterSort';
import useTodos from '../../hooks/useTodos';
import './TodoList.css';

const TodoList = () => {
  const {
    todos,
    allTodos,
    filter,
    sortBy,
    addTodo,
    removeTodo,
    toggleTodo,
    setFilter,
    setSortBy,
    clearCompleted
  } = useTodos();

  const completedCount = allTodos.filter(todo => todo.completed).length;
  const activeCount = allTodos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-list-container">
      <header className="todo-header">
        <h1>My Todo List</h1>
        <div className="todo-stats">
          <span>Total: {allTodos.length}</span>
          <span>Active: {activeCount}</span>
          <span>Completed: {completedCount}</span>
        </div>
      </header>

      <AddTodo onAddTodo={addTodo} />

      <FilterSort
        filter={filter}
        sortBy={sortBy}
        onFilterChange={setFilter}
        onSortChange={setSortBy}
        onClearCompleted={clearCompleted}
        completedCount={completedCount}
      />

      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="no-todos">
            {allTodos.length === 0 
              ? "No tasks yet. Add one above!" 
              : "No tasks match your current filter."
            }
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;