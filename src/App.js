import React from 'react';
import './App.css';
import ToDoListHeader from './ToDoListHeader.jsx';
import ToDoListTasks from './ToDoListTasks.jsx';
import ToDoListFooter from './ToDoListFooter.jsx';

class App extends React.Component {

    constructor(props){
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    // Копировать текущую строку вниз shift+alt+keydown


    state = {
        tasks: [
            { title: "JS", isDone: true, priority: "medium" },
            { title: "CSS", isDone: true, priority: "low" },
            { title: "HTML", isDone: false, priority: "low" },
            { title: "React", isDone: true, priority: "high" }
        ],
        filterValue: "Active"
    }

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value
        this.newTaskTitleRef.current.value="";
        let newTask = {isDone: true, priority: "low", title: newText};
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
        
    }



    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    {/* <ToDoListHeader/> */}
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name" ref={this.newTaskTitleRef} />
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <ToDoListTasks tasks={this.state.tasks} />
                    <ToDoListFooter filterValue={this.state.filterValue} />
                </div>
            </div>
        )
    }
}

export default App;

