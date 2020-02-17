import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = (props) => {
    const { task } = props;
    const { removeTask, findItem, tickTask } = useContext(TaskListContext);

    return (
        <div className="task-item">
            <input type="checkbox" className="task-check" onChange={(e) => tickTask(task.id, e.target.checked)} defaultChecked={task.ticked} />
            <span className={`task-title${task.ticked ? ' task-title--ticked' : ''}`}>{task.title}</span>
            <div className="task-buttons">
                {!task.ticked ? (
                    <button type="button" className="btn btn--edit" onClick={() => findItem(task.id)}>E</button>
                ) : ''}
                <button type="button" className="btn btn--delete" onClick={() => removeTask(task.id)}>D</button>
            </div>
        </div>
    );
};

export default Task;
