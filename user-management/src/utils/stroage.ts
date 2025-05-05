export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (err) {
    console.error("Failed to save to localStorage:", err);
  }
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  try {
    const serialized = localStorage.getItem(key);
    return serialized ? (JSON.parse(serialized) as T) : null;
  } catch (err) {
    console.error("Failed to read from localStorage:", err);
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Failed to remove from localStorage:", err);
  }
};
