import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';
// import firebase from '../firebase';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    // TODO: Add existing tasks from firebase
    const initialState = [];

    const { children } = props;
    const [tasks, setTasks] = useState(
        [
            {
                id: uuid(),
                title: 'Dummy item',
                ticked: true,
            },
        ],
    );

    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        // TODO: Save to firebase
    }, [tasks]);

    const addTask = (title) => {
        setTasks([...tasks, {
            id: uuid(),
            title,
            ticked: false,
        }]);
    };

    const removeTask = (id) => {
        if (window.confirm('Do you really want to delete the task?')) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const clearTasks = () => {
        setTasks([]);
    };

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    };

    const tickTask = (id, ticked) => {
        const newTasks = tasks.map(task => (task.id === id ? { ...task, ticked } : task));
        setTasks(newTasks);
    };

    const editTask = (id, title) => {
        const newTasks = tasks.map(task => (task.id === id ? { id, title } : task));

        setTasks(newTasks);
        setEditItem(null);
    };

    const cancelEditTask = () => {
        setEditItem(null);
    };

    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, tickTask, clearTasks, findItem, editTask, editItem, cancelEditTask }}>
            {children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
