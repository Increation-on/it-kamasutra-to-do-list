import React from 'react';
import './App.css';
import ToDoListHeader from './ToDoListHeader.jsx';
import ToDoListTasks from './ToDoListTasks.jsx';
import ToDoListFooter from './ToDoListFooter.jsx';

class App extends React.Component {
    tasks = [
        {title: "JS", isDone: true, priority:"medium"},
        {title: "CSS", isDone: true, priority:"low"},
        {title: "HTML", isDone: false, priority:"low"},
        {title: "React", isDone: true, priority:"high"}
    ];
   
    filterValue = "Active";

    render = () => {    
        return (
            <div className="App">
                <div className="todoList">
                     <ToDoListHeader/>
                     <ToDoListTasks tasks={this.tasks}/>
                     <ToDoListFooter filterValue={this.filterValue}/>
                </div>     
            </div>
        )
    }
}

export default App;

