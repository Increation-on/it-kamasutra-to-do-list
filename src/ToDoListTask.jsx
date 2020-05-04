import React from 'react';
class ToDoListTask extends React.Component {

    state = {
        editMode: false
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onTitleChanged = (e) =>{
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    deleteTask = ()=>{
        this.props.deleteTask(this.props.task.id)
    }
    render = () => {
        return (
            <div className={this.props.task.isDone === true ? "todoList-task done" : "todoList-task"}>
                <input type="checkbox" checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged} />
                     <span>{this.props.task.id} - </span>
                    {this.state.editMode
                    ?<input 
                        value={this.props.task.title}
                        autoFocus={true} 
                        onBlur={this.deactivateEditMode}
                        onChange={this.onTitleChanged}
                    />
                    :<span onClick={this.activateEditMode}>{this.props.task.title}, </span>}
                    <span>priority: {this.props.task.priority}</span>
                    <button onClick={this.deleteTask}>delete</button>
            </div>
        );
    }
}

export default ToDoListTask;