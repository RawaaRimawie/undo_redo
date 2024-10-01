// taskReducer.js

import { UNDO, REDO, ADD_TASK, REMOVE_TASK } from "./actionTypes"
const initialState = {
    currentState: [],
    history: [],
    redoStack: [],
};

const taskReducer = (state = initialState, action) => {
    const { currentState, history, redoStack } = state;

    switch (action.type) {
        case ADD_TASK:
            return {
                currentState: [...currentState, action.payload],
                history: [...history, currentState],
                redoStack: [],
            };

        case REMOVE_TASK:
            return {
                currentState: currentState.filter(task => task.id !== action.payload),
                history: [...history, currentState],
                redoStack: [],
            };

        case UNDO:
            if (history.length === 0) return state;

            const previousState = history[history.length - 1];
            return {
                currentState: previousState,
                history: history.slice(0, -1),
                redoStack: [currentState, ...redoStack],
            };

        case REDO:
            if (redoStack.length === 0) return state;

            const nextState = redoStack[0];
            return {
                currentState: nextState,
                history: [...history, currentState],
                redoStack: redoStack.slice(1),
            };

        default:
            return state;
    }
};

export default taskReducer;
