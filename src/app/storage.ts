export function saveInStorage<T = any>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key: string) {
  const value =  window.localStorage.getItem(key);

  if (value != null) {
    return JSON.parse(value);
  }
  return null;
}
