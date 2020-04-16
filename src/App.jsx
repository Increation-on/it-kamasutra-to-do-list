import React from 'react';
import './App.css';
import ToDoList from './ToDoList'
import AddNewItemForm from './AddNewItemForm';

class App extends React.Component {

    componentDidMount(){
        this.restoreState()
    }

    state = {
        todolists: [
            /*  { id: "01", title: "Task 1" },
             { id: "02", title: "Task 2" },
             { id: "03", title: "Task 3" },
             { id: "04", title: "Task 4" } */
        ]
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
            id: this.nextToDoListId
        }
        this.nextToDoListId++;
        this.setState({
            todolists: [...this.state.todolists, newToDoList]
        }, this.saveState)
    }

    render = () => {
        let todolists = this.state.todolists.map((el) => {
            return <ToDoList id={el.id} title={el.title} key={el.id} />
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

export default App;

