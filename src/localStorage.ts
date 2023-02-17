export class Task {
    title: string;
    done: boolean;
    id: number;

    constructor(taskTitle: string, taskId: number, taskDone: boolean) {
        this.title = taskTitle;
        this.id = taskId;
        this.done = taskDone;
    }
}

export const getCurrentId = (): string => {
    let currentId: string | null = localStorage.getItem('currentId');
    (currentId == null) ? currentId = '1' : currentId = (Number(currentId)+1).toString();
    return currentId;
};

export const setValueToStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const generateKeyByDate = (date: Date): string => {
    return `tasks_${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
};

export const getJSONFromStorage = (key: string) => {
    const serialized = localStorage.getItem(key);
    if (serialized == null){
        return [];
    }
    return JSON.parse(serialized);
};

export const updateJSONInStorage = (key: string, obj: object):void => {
    const serialized = JSON.stringify(obj);
    localStorage.setItem(key, serialized);
};