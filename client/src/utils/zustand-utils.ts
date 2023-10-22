export function bindObject<T extends Record<string, unknown>>(object: T): T {
    for (const [key, fn] of Object.entries(object) as [keyof T, T[keyof T]][]) {
        if (typeof fn === 'function') {
            object[key] = fn.bind(object);
        }
    }

    return object;
}