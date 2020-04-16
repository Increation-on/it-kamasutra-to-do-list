import React from 'react';
class AddNewItemForm extends React.Component {
    state = {
        error: false,
        title: ""

    }
    onAddItemClick = () => {
        let newText = this.state.title;
        if (!newText) {
            this.setState({ error: true })
        } else {
            this.setState({ error: false })
            this.props.addItem(newText);
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
            this.onAddItemClick();
        }
    }

    render = () => {
        return (
            <div className="addNewItemForm">
                <input type="text" placeholder="New item name"
                    className={this.state.error ? "err" : ""}
                    onChange={this.onTitleChanged}
                    onKeyPress={this.onEnterKeyPress}
                    value={this.state.title} />
                <button onClick={this.onAddItemClick}>Add</button>
            </div>
        );
    }
}

export default AddNewItemForm;