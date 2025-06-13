import { MAX_TASK_LENGTH } from './constants';

// Check if task text is valid
export const validateTaskText = (text) => {
  // Remove extra spaces
  const cleanText = text.trim();
  
  // Check if empty
  if (!cleanText) {
    return {
      isValid: false,
      error: 'Task cannot be empty'
    };
  }
  
  // Check length
  if (cleanText.length > MAX_TASK_LENGTH) {
    return {
      isValid: false,
      error: `Task must be less than ${MAX_TASK_LENGTH} characters`
    };
  }
  
  return {
    isValid: true,
    error: null
  };
};

// Check if task already exists
export const isDuplicateTask = (taskText, existingTasks) => {
  const cleanText = taskText.trim().toLowerCase();
  return existingTasks.some(task => 
    task.text.toLowerCase() === cleanText
  );
};