import React from 'react';
import './App.css';
import AddNewItemForm from './AddNewItemForm.jsx';
import ToDoListTitle from './ToDoListTitle.jsx'
import ToDoListTasks from './ToDoListTasks.jsx';
import ToDoListFooter from './ToDoListFooter.jsx';

class ToDoList extends React.Component {
    // Копировать текущую строку вниз shift+alt+keydown
    componentDidMount(){
        this.restoreState()
    }

    newTaskId = 0;
    
    state = {
        tasks: [
           /*  { title: "JS", isDone: false, priority: "medium", id: 1 },
            { title: "CSS", isDone: true, priority: "low", id: 2 },
            { title: "HTML", isDone: false, priority: "low", id: 3 },
            { title: "React", isDone: true, priority: "high", id: 4 } */
        ],
        filterValue: "All",
       
    }

    saveState = ()=>{
      localStorage.setItem("todolist-state" + this.props.id, JSON.stringify(this.state)) 
    }

    restoreState = ()=>{
        let state = this.state;
        let stateAsString = localStorage.getItem("todolist-state" + this.props.id);
        if(stateAsString !== null){
            state = JSON.parse(stateAsString);
        }
        this.setState(state, ()=>{
            this.state.tasks.forEach(task =>{
                if(task.id>=this.newTaskId){
                    this.newTaskId = task.id + 1;
                }
            })
        });
    }

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low",
            id: this.newTaskId
        }
        this.newTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, this.saveState); 
    }

    changeFilter = (newFilterValue) =>{
        this.setState({
            filterValue: newFilterValue
        }, this.saveState);
    }

    changeTask = (taskId, obj)=>{
        let newTasks = this.state.tasks.map((el)=>{
            if(el.id !== taskId){
                return el;
            }else {
                return {...el, ...obj}
            }
        });
        this.setState({
            tasks: newTasks
        }, this.saveState)
    }

    changeStatus = (taskId, isDone)=>{
       this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, newTitle)=>{
       this.changeTask(taskId, {title: newTitle})
    }


    render = () => {
        return (
                <div className="todoList">
                    <ToDoListTitle title={this.props.title}/>
                    <AddNewItemForm   addItem={this.addTask}/>
                    <ToDoListTasks
                    changeStatus = {this.changeStatus}
                    changeTitle = {this.changeTitle}
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
        )
    }
}

export default ToDoList;

