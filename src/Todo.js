
import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
            </tr>
        );
    }

}

export default Todo;
