const STORAGE_KEY = 'ReactReduxTasksApp'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState)
    }
  } catch (err) {
    console.error('Cannot access local storage');
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Cannot access local storage');
  }
}