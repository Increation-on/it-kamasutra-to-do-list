import React from 'react';

class ToDoListFooter extends React.Component {
    render = (props) => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div className="ToDoListFooter">
                 <div className="todoList-footer">
                        <button className={classForAll}>All</button>
                        <button className={classForCompleted}>Completed</button>
                        <button className={classForActive}>Active</button>
                    </div>
                </div>  
        );
    }
}

export default ToDoListFooter;