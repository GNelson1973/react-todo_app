import React from 'react';
import jQuery from 'jquery'

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    jQuery.get("http://localhost:3000/todos.json", (function(data){
      this.setState({
        todos: data.todos,
      });
    }).bind(this));
  }

  render() {
    let todos = this.state.todos.map(function(todo) {
      return <li key={todo.id}><h1>{todo.title}</h1><p>{todo.completed}</p></li>;
    });

    return (
        <ul>
          {todos}
        </ul>
    )
  }


}
export default Todos;
