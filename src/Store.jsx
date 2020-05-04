import { createStore } from "redux";

const initialState = {
    todolists: [
        { "title": "rrrr", "id": 0, tasks: [] },
        { "title": "qweqweqw", "id": 1, tasks: [] }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TO-DO-LIST":
            let newToDoList = [...state.todolists, action.newToDoList];
            return {
                ...state,
                todolists: newToDoList
            }
        case "ADD-TASK":
            return {
                ...state,
                todolists: state.todolists.map((el) => {
                    if (el.id === action.todolistId) {
                        return { ...el, tasks: [...el.tasks, action.newTask] }
                    } else {
                        return el
                    }
                })
            }
        case "CHANGE-TASK":
            let newToDoLists = state.todolists.map((todo) => {
                if (todo.id !== action.todolistId) {
                    return todo;
                } else {
                    return {
                        ...todo, tasks: [...todo.tasks.map((task) => {
                            if (task.id !== action.taskId) {
                                return task;
                            }
                            else {
                                return { ...task, ...action.obj }
                            }
                        })]
                    }
                }
            })
            debugger;
            return { ...state, todolists: newToDoLists }
        case "DELETE-LIST":
            return {
                ...state, todolists: state.todolists.filter((el) => {
                    return el.id !== action.todolistId
                })
            }
        case "DELETE-TASK":
            return {
                ...state, 
                todolists: state.todolists.map((todo)=>{
                    if (todo.id !==action.todolistId){
                        return todo;
                    }
                    else {
                        return {...todo, tasks: todo.tasks.filter((task)=>{
                           return task.id !== action.taskId
                        })}
                    }
                })
            }
    }
    return state;
}

const store = createStore(reducer)

export default store;