import React from 'react';
class ToDoListTask extends React.Component {
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked);
    }
    render = () => {
        return (
            <div className={this.props.task.isDone === true ? "todoList-task done" : "todoList-task"}>
                <input type="checkbox" checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged} />
                <span>{this.props.task.title}</span><span>, priority: {this.props.task.priority}</span>
            </div>
        );
    }
}

export default ToDoListTask;