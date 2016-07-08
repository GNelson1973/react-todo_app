
import React from 'react';

class Todo extends React.Component {
    constructor(){
        super();

        this.state = {

        };
    }

    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.state.score}</td>
                <td>

                </td>
            </tr>
        );
    }
}

export default Todo;
