import { useEffect, useState } from "react";

const useStorageState = (key: string, initialState: string) => {
  const [value, setValue] = useState<string>(initialState);


  useEffect(() => {
    console.log("useEffect that gets the value from storage")
    console.log(localStorage.getItem(key))
    localStorage.getItem(key) && setValue(localStorage.getItem(key)!);
  }, []);

  useEffect(() => {
    console.log("useEffect that updates the storage")
    console.log(value)
    if (!value) return;
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue] as const;
};

export default useStorageState;
