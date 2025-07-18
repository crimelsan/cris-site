export function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
        console.log(error);
    }
};

export function getItem(key) {
    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : undefined
    } catch {
        console.log(error)
    }
};