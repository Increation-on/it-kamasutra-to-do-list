import React from 'react';
class ToDoListTask extends React.Component {
    render = () => {
        return (
            <div className="todoList-task">
                        <div className="todoList-task">
                            <input type="checkbox" checked={this.props.isDone}/>
                            <span>{this.props.title}</span><span>, priority: {this.props.priority}</span>
                        </div>            
            </div>
        );
    }
}

export default ToDoListTask;