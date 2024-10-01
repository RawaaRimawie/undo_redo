
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, undo, redo } from './Redux/actionTypes';

const TaskManager = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.currentState);

    const handleAddTask = (task) => {
        dispatch(addTask(task));
    };

    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
    };

    return (
        <div>
            <button onClick={() => handleAddTask({ id: 1, name: 'Sample Task' })}>Add Task</button>
            <button onClick={() => handleRemoveTask(1)}>Remove Task</button>


            <button onClick={() => dispatch(undo())}>Undo</button>
            <button onClick={() => dispatch(redo())}>Redo</button>

            <ul>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={`${task.id}-${index}`}>{task.name}</li>
                    ))}
                </ul>

            </ul>
        </div>
    );
};

export default TaskManager;
