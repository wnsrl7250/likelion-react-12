import { getStorage, removeStorage, setStorage } from '@/utils/storage';
import { useState, useEffect } from 'react';

function usePersist<T>(
  key: string,
  initialValue?: T,
  { changeOnSave = false, storage = localStorage } = {}
) {
  const [data, setData] = useState<T | undefined>(
    () => getStorage(key, storage) ?? initialValue
  );

  useEffect(() => {
    if (changeOnSave) setStorage(key, data);
  }, [key, data, changeOnSave, storage]);

  const saveToStorage = (value: T) => setStorage(key, value, storage);

  const removeInStorage = () => removeStorage(key, storage);

  return {
    data,
    setData,
    saveToStorage,
    removeInStorage,
  };
}

export default usePersist;
