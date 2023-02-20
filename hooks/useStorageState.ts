import { useEffect, useState } from "react";

const useStorageState = (key: string, initialState: string) => {
  const [value, setValue] = useState<string>(initialState);

  useEffect(() => {
    localStorage.getItem(key) && setValue(localStorage.getItem(key)!);
  }, []);

  useEffect(() => {
    if (!value) return;
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue] as const;
};

export default useStorageState;
