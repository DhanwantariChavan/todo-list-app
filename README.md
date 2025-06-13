# Todo List App

A simple and clean React-based Todo List application with full CRUD functionality, filtering, sorting, and localStorage persistence.

## Features

-  Add new tasks with validation
-  Mark tasks as complete/incomplete
-  Delete tasks
-  Filter tasks (All, Active, Completed)
-  Sort tasks (Newest, Oldest, Alphabetical)
-  Clear completed tasks
-  Persistent storage using localStorage
-  Task statistics display
-  Responsive design
-  Input validation (empty tasks, duplicates, max length)


## Testing Guide

### Manual Testing Checklist

#### Basic Functionality
- 1. Add a new task by typing and clicking "Add Task"
- 2. Add a task by typing and pressing Enter
- 3. Try to add an empty task (should show error)
- 4. Try to add a very long task (should show error)
- 5. Try to add a duplicate task (should show error)
- 6. Click checkbox to mark task as complete
- 7. Click checkbox again to mark as incomplete
- 8. Click "Delete" button to remove a task

#### Filtering
- 1. Select "Active Tasks" filter (should show only incomplete tasks)
- 2. Select "Completed Tasks" filter (should show only completed tasks)
- 3. Select "All Tasks" filter (should show all tasks)

#### Sorting
- 1. Select "Newest First" sorting
- 2. Select "Oldest First" sorting  
- 3. Select "Alphabetical" sorting

#### Additional Features
- 1. Click "Clear Completed" button (should remove all completed tasks)
- 2. Refresh the page (tasks should persist due to localStorage)
- 3. Check task statistics update correctly

