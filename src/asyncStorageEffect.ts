import type { AtomEffect } from "recoil";

export const asyncStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet, trigger }) => {
    if (typeof window === "undefined") return;

    if (trigger === "get" && window.mounted === true) {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
