import React from 'react';
import Header from './components/Header';
import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';
import TaskListContextProvider from './context/TaskListContext';

import '../css/app.scss';

function App() {
    return (
        <TaskListContextProvider>
            <div className="app">
                <Header />
                <Taskform />
                <Tasklist />
            </div>
        </TaskListContextProvider>
    );
}

export default App;
