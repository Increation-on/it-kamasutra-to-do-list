import React from 'react';
import './App.css';
import ToDoListHeader from './ToDoListHeader.jsx';
import ToDoListTasks from './ToDoListTasks.jsx';
import ToDoListFooter from './ToDoListFooter.jsx';

class App extends React.Component {

    constructor(props){
        super(props);
    }

    // Копировать текущую строку вниз shift+alt+keydown


    state = {
        tasks: [
            { title: "JS", isDone: false, priority: "medium" },
            { title: "CSS", isDone: true, priority: "low" },
            { title: "HTML", isDone: false, priority: "low" },
            { title: "React", isDone: true, priority: "high" }
        ],
        filterValue: "Active"
    }

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low"
        }
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }); 
    }

    changeFilter = (newFilterValue) =>{
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeStatus = (task, isDone)=>{
        let newTasks = this.state.tasks.map((el)=>{
            if(el !== task){
                return el;
            }else {
                return {...el, isDone: isDone}
            }
        });
        this.setState({
            tasks: newTasks
        }
        )
    }

   /*  * (для тех, кто впереди паровоза) if-ы заменить на if-else либо на switch-case.
    ** (для тех, кто мастер логических операций и\или): оставить один return сделав комбинацию условий через логические && и || */


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader addTask={this.addTask} />
                    {/* <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name" ref={this.newTaskTitleRef} />
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div> */}
                    <ToDoListTasks
                    changeStatus = {this.changeStatus}
                    tasks={this.state.tasks.filter(t=> {
                        if(this.state.filterValue === "All"){
                            return true;
                        }else if
                        (this.state.filterValue === "Completed"){
                            return t.isDone === true;
                        }
                        else/*  (this.state.filterValue === "Active") */{
                            return t.isDone === false;
                        }
                    })} />
                    <ToDoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter} />
                </div>
            </div>
        )
    }
}

export default App;

