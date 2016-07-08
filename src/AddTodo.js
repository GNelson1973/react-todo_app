import React from 'react';

class AddTodo extends React.Component {

    onSubmit(event){
        // if we don't call event.preventDefault, the browser will think we want to submit the form
        event.preventDefault();
        this.props.onSubmit(this.refs.task.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Todo</label>
                <input ref="task" />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default AddTodo;
