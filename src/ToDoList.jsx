import React from 'react';
import './App.css';
import AddNewItemForm from './AddNewItemForm.jsx';
import ToDoListTitle from './ToDoListTitle.jsx'
import ToDoListTasks from './ToDoListTasks.jsx';
import ToDoListFooter from './ToDoListFooter.jsx';
import { connect } from 'react-redux';

class ToDoList extends React.Component {
    // Копировать текущую строку вниз shift+alt+keydown
    componentDidMount() {
        this.restoreState()
    }

    newTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All",

    }

    saveState = () => {
        localStorage.setItem("todolist-state" + this.props.id, JSON.stringify(this.state))
    }

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("todolist-state" + this.props.id);
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach(task => {
                if (task.id >= this.newTaskId) {
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
        this.props.addTask(this.props.id, newTask);
        this.newTaskId++;
        /* let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, this.saveState); */
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, this.saveState);
    }

    /* changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map((el) => {
            if (el.id !== taskId) {
                return el;
            } else {
                return { ...el, ...obj }
            }
        });
        this.setState({
            tasks: newTasks
        }, this.saveState)
    } */

    changeStatus = (taskId, isDone) => {
        debugger;
        this.props.changeTask(this.props.id, taskId, { isDone: isDone })
    }

    changeTitle = (taskId, newTitle) => {
        this.props.changeTask(this.props.id, taskId, { title: newTitle } )
    }

    deleteList = ()=>{
        this.props.deleteList(this.props.id)
    }

    deleteTask = (taskId, )=>{
        this.props.deleteTask(this.props.id, taskId)
    }

    render = () => {
        return (
            <div className="todoList">
                <ToDoListTitle title={this.props.title} />
                <button onClick={this.deleteList}>delete</button>
                <AddNewItemForm addItem={this.addTask} />
                <ToDoListTasks
                    changeStatus={this.changeStatus}
                    changeTitle={this.changeTitle}
                    deleteTask={this.deleteTask}
                    tasks={this.props.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true;
                        } else if
                            (this.state.filterValue === "Completed") {
                            return t.isDone === true;
                        }
                        else/*  (this.state.filterValue === "Active") */ {
                            return t.isDone === false;
                        }
                    })} />
                <ToDoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todolistId, newTask) => {
            const action = {
                type: "ADD-TASK",
                newTask: newTask,
                todolistId: todolistId
            }
            debugger
            dispatch(action)
        },
        changeTask: (todolistId, taskId, obj)=>{
            const action = {
                type: "CHANGE-TASK",
                taskId: taskId,
                obj: obj,
                todolistId: todolistId
            }
            debugger
            dispatch(action);
        },
        deleteList: (todolistId) => {
            const action = {
                type: "DELETE-LIST",
                todolistId: todolistId
            }
            dispatch(action)
        },
        deleteTask: (todolistId, taskId) =>{
            const action = {
                type: "DELETE-TASK",
                todolistId: todolistId,
                taskId: taskId
            }
            dispatch(action)
        }
        
    }
}

const connectToDoList = connect(null, mapDispatchToProps)(ToDoList)

export default connectToDoList;

