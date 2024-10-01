// actionTypes.js

export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export function undo() {
    return {
        type: "UNDO"
    }

}

export function redo() {
    return {
        type: "REDO"
    }
}

export function addTask(task) {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export function removeTask(taskId) {
    return {
        type: "REMOVE_TASK",
        payload: taskId
    }
}