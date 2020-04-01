import React from 'react';
class ToDoHeaderList extends React.Component {
    state = {
        error: false,
        title: ""

    }
    onAddTaskClick = () => {
        let newText = this.state.title;
        if (!newText) {
            this.setState({ error: true })
        } else {
            this.setState({ error: false })
            this.props.addTask(newText);
        }
        this.setState({
            title: ""
        })

    }

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }
    
    onEnterKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick();
        }
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name"
                        className={this.state.error ? "err" : ""}
                        onChange={this.onTitleChanged}
                        onKeyPress={this.onEnterKeyPress}
                        value={this.state.title} />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default ToDoHeaderList;