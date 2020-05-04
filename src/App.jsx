import React from 'react';
import './App.css';
import ToDoList from './ToDoList'
import AddNewItemForm from './AddNewItemForm';
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount(){
        this.restoreState()
    }

    state = {
        todolists: []
    }

    

    saveState = ()=>{
        localStorage.setItem("todolists", JSON.stringify(this.state)) 
      }

      restoreState = ()=>{
        let state = this.state;
        let stateAsString = localStorage.getItem("todolists");
        if(stateAsString !== null){
            state = JSON.parse(stateAsString);
        }
        this.setState(state, ()=>{
            this.state.todolists.forEach(todo =>{
                if(todo.id>=this.nextToDoListId){
                    this.nextToDoListId = todo.id + 1;
                }
            })
        });
    }  

    nextToDoListId = 0;

    addToDoList = (newtodolistname) => {
        let newToDoList = {
            title: newtodolistname,
            id: this.nextToDoListId,
            tasks: []
        }
        this.props.addToDoList(newToDoList)
        this.nextToDoListId++;
        /* this.setState({
            todolists: [...this.state.todolists, newToDoList]
        }, this.saveState)  */
    }

    

    render = () => {

        let todolists = this.props.todolists.map((el) => {
            return <ToDoList id={el.id} title={el.title} key={el.id} tasks={el.tasks}/>
        })
        return (
            <div>
                <AddNewItemForm addItem={this.addToDoList} />
                <div className="App">
                    {todolists}
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state)=>{
    return{
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToDoList: (newToDoList)=>{
            const action = {
                type: "ADD-TO-DO-LIST",
                newToDoList: newToDoList
            }
            dispatch(action);    
        }
    }
}

const connectedAppp = connect(mapStateToProps, mapDispatchToProps)(App)
export default connectedAppp;

