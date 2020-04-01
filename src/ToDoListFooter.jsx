import React from 'react';

class ToDoListFooter extends React.Component {
    state = {
        isHidden: false
    }

    changeFilterAll = () => {
        this.props.changeFilter("All");
    }



    onAllFilterClick = () => {this.props.changeFilter("All")}
    onCompletedFilterClick = () => {this.props.changeFilter("Completed")}
    onActiveFilterClick = () => {this.props.changeFilter("Active")}
    onShowFiltersClick = () => {this.setState({ isHidden: false})}
    onHideFiltersClick = () => {this.setState({ isHidden: true})}

    render = (props) => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div className="ToDoListFooter">
                <div className="todoList-footer">
                    {!this.state.isHidden && <div>
                        <button className={classForAll} onClick={this.onAllFilterClick}>All</button>
                        <button className={classForCompleted} onClick={this.onCompletedFilterClick}>Completed</button>
                        <button className={classForActive} onClick={this.onActiveFilterClick}>Active</button>
                    </div>}
                    {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                    {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
                </div>
            </div>
        );
    }
}

export default ToDoListFooter;