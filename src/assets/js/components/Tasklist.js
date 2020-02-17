import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const Taskslist = () => {
    const { tasks } = useContext(TaskListContext);

    return (
        <div className="tasks">
            <div className="tasks__list">
                {
                    tasks.length === 0 ?
                        <div>No tasks added</div> :
                        tasks.map((task) => <Task task={task} key={task.id} />)
                }
            </div>
        </div>
    );
};

export default Taskslist;
