import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { LOCAL_STORAGE_KEY } from '../utils/constants';
import { generateId, filterTasks, sortTasks } from '../utils/helpers';
import { validateTaskText, isDuplicateTask } from '../utils/validation';

// Custom hook to manage todos
const useTodos = () => {
  const [todos, setTodos] = useLocalStorage(LOCAL_STORAGE_KEY, []);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date_newest');

  // Add new todo
  const addTodo = (text) => {
    const validation = validateTaskText(text);
    if (!validation.isValid) {
      return { success: false, error: validation.error };
    }

    if (isDuplicateTask(text, todos)) {
      return { success: false, error: 'Task already exists' };
    }

    const newTodo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now()
    };

    setTodos([...todos, newTodo]);
    return { success: true, error: null };
  };

  // Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Get filtered and sorted todos
  const getDisplayTodos = () => {
    const filtered = filterTasks(todos, filter);
    return sortTasks(filtered, sortBy);
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return {
    todos: getDisplayTodos(),
    allTodos: todos,
    filter,
    sortBy,
    addTodo,
    removeTodo,
    toggleTodo,
    setFilter,
    setSortBy,
    clearCompleted
  };
};

export default useTodos;