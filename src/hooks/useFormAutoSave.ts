
import { useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

interface AutoSaveOptions {
  key: string;
  debounceTime?: number;
  enabled?: boolean;
  excludeFields?: string[];
}

/**
 * Hook for automatically saving form data to localStorage
 */
export function useFormAutoSave<T extends Record<string, any>>(
  formData: T,
  options: AutoSaveOptions
) {
  const { key, debounceTime = 500, enabled = true, excludeFields = [] } = options;

  // Load saved data on initial render
  useEffect(() => {
    if (!enabled) return;
    
    try {
      const savedDataString = localStorage.getItem(key);
      
      if (savedDataString) {
        const savedData = JSON.parse(savedDataString);
        const timestamp = savedData.timestamp || 0;
        const now = Date.now();
        
        // Only load data if it's less than 24 hours old
        if (now - timestamp < 24 * 60 * 60 * 1000) {
          return savedData.data;
        } else {
          localStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.error('Error loading saved form data:', error);
    }
  }, [key, enabled]);

  // Save data when it changes
  const saveData = useCallback(
    debounce((data: T) => {
      if (!enabled) return;
      
      try {
        // Filter out excluded fields
        const filteredData = Object.keys(data).reduce((acc, curr) => {
          if (!excludeFields.includes(curr)) {
            acc[curr] = data[curr];
          }
          return acc;
        }, {} as Record<string, any>);

        localStorage.setItem(
          key, 
          JSON.stringify({
            data: filteredData,
            timestamp: Date.now(),
          })
        );
      } catch (error) {
        console.error('Error saving form data:', error);
      }
    }, debounceTime),
    [key, debounceTime, enabled, excludeFields]
  );

  // Save data whenever formData changes
  useEffect(() => {
    saveData(formData);

    return () => {
      saveData.cancel();
    };
  }, [formData, saveData]);

  // Function to clear saved data
  const clearSavedData = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return { clearSavedData };
}
