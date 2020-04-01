import React from 'react';
import ToDoListTask from './ToDoListTask';
class ToDoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((task)=>{
            return <ToDoListTask /* title={task.title} isDone={task.isDone} priority={task.priority} */
             changeStatus={this.props.changeStatus}
             task={task}/>
        });      
            return(
                <div className="todoList-tasks">
                    {tasksElements}
                </div>
            );
    }
}

export default ToDoListTasks;