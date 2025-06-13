import React from 'react';
import './FilterSort.css';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../utils/constants';

const FilterSort = ({ 
  filter, 
  sortBy, 
  onFilterChange, 
  onSortChange, 
  onClearCompleted,
  completedCount 
}) => {
  return (
    <div className="filter-sort">
      <div className="filter-section">
        <label>Filter: </label>
        <select 
          value={filter} 
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value={FILTER_OPTIONS.ALL}>All Tasks</option>
          <option value={FILTER_OPTIONS.ACTIVE}>Active Tasks</option>
          <option value={FILTER_OPTIONS.COMPLETED}>Completed Tasks</option>
        </select>
      </div>

      <div className="sort-section">
        <label>Sort by: </label>
        <select 
          value={sortBy} 
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select"
        >
          <option value={SORT_OPTIONS.DATE_NEWEST}>Newest First</option>
          <option value={SORT_OPTIONS.DATE_OLDEST}>Oldest First</option>
          <option value={SORT_OPTIONS.ALPHABETICAL}>Alphabetical</option>
        </select>
      </div>

      <div className="clear-section">
        {completedCount > 0 && (
          <button 
            onClick={onClearCompleted}
            className="clear-completed-button"
          >
            Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSort;