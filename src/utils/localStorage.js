/**
 * Utility functions for storing and retrieving data from localStorage
 */

// Save data to localStorage
export const saveData = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

// Load data from localStorage with fallback default value
export const loadData = (key, defaultValue) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
    return defaultValue;
  }
};

// Remove data from localStorage
export const removeData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from localStorage:', error);
  }
};

// Check if data exists in localStorage
export const hasData = (key) => {
  try {
    return localStorage.getItem(key) !== null;
  } catch (error) {
    console.error('Error checking data in localStorage:', error);
    return false;
  }
};

// Clear all data from localStorage
export const clearAllData = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing all data from localStorage:', error);
  }
};