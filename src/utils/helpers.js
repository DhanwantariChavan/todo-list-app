import { FILTER_OPTIONS, SORT_OPTIONS } from './constants';

// Generate unique ID for tasks
export const generateId = () => {
  return Date.now() + Math.random().toString(36);
};

// Filter tasks based on status
export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case FILTER_OPTIONS.ACTIVE:
      return tasks.filter(task => !task.completed);
    case FILTER_OPTIONS.COMPLETED:
      return tasks.filter(task => task.completed);
    case FILTER_OPTIONS.ALL:
    default:
      return tasks;
  }
};

// Sort tasks based on criteria
export const sortTasks = (tasks, sortBy) => {
  const tasksCopy = [...tasks];
  
  switch (sortBy) {
    case SORT_OPTIONS.DATE_OLDEST:
      return tasksCopy.sort((a, b) => a.createdAt - b.createdAt);
    case SORT_OPTIONS.ALPHABETICAL:
      return tasksCopy.sort((a, b) => 
        a.text.toLowerCase().localeCompare(b.text.toLowerCase())
      );
    case SORT_OPTIONS.DATE_NEWEST:
    default:
      return tasksCopy.sort((a, b) => b.createdAt - a.createdAt);
  }
};