/**
 * Returns a new object with the specified keys removed from the input object.
 * 
 * @param obj The input object to remove keys from.
 * @param keys An array of keys to remove from the input object.
 * @returns A new object that has the same properties as the input object, except for the specified keys.
 */
export function exclude<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    for (let key of keys) {
      delete obj[key];
    }
    return obj as Omit<T, K>;
  }