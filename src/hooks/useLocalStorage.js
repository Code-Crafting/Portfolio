import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  //   check whether the given key is present in the local storage
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue !== null) {
      setValue(JSON.parse(localStorage.getItem(key)));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  //   new value setter function
  const setNewValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setNewValue];
};
