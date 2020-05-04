import React from 'react';
import ToDoListTask from './ToDoListTask';
class ToDoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((task) => {
            return <ToDoListTask
                key={task.id}
                deleteTask={this.props.deleteTask}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
                task={task} />
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;