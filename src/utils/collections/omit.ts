export const omit = <T extends {[key: string]: any}, K>(obj: T, key: K) => Object.entries(obj).filter((e) => e[0] != key);
