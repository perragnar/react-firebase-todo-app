import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Taskform = () => {
    const { addTask, clearTasks, editTask, editItem, cancelEditTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const handleChange = (e) => { setTitle(e.target.value); };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editItem === null) {
            addTask(title);
            setTitle('');
        } else {
            editTask(editItem.id, title);
        }
    };

    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title);
        } else {
            setTitle('');
        }
    }, [editItem]);

    const handleClearTasks = () => {
        if (window.confirm('Do you really want to clear all tasks from the list?')) {
            clearTasks();
        }
    };

    const handleCancelEdit = () => {
        setTitle('');
        cancelEditTask();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input type="text" onChange={handleChange} value={title} className="task-form__title" placeholder="Add task..." required />
            <div className="task-form__buttons">
                {editItem === null ?
                    <button type="button" className="btn btn--clear" onClick={handleClearTasks}>Clear</button> :
                    <button type="button" className="btn btn--cancel" onClick={handleCancelEdit}>Cancel</button>
                }
                <button type="submit" className="btn btn--add-task">{editItem ? 'Save changes' : 'Add Task'}</button>
            </div>
        </form>
    );
};

export default Taskform;
