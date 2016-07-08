import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo'

class TodoList extends React.Component {

  constructor(){
      super();

      this.state = {
          todos: [
              { title: "Making", count: 1 },
              { title: "Walking", count: 1 },
              { title: "Shopping", count: 1 }
          ]
      };
  }

  onAddTodo(username){
      var newTodo = { title: username, count: 1 };
      var newTodos = this.state.todos.concat(newTodo);
      this.setState({
          todos: newTodos
      });
  }

   renderTodo(todo){
        return <Todo
            title={todo.title}
            />;
    }

    totalCount(){
      return this.state.todos.reduce(
        function(prev, next) {
          return prev + next.count;
      }, 0);
    }

    render() {
      var total = this.totalCount();

        return (
          <div>
          <table>
              <thead>
                 <tr>
                      <td>Task</td>
                  </tr>
              </thead>
              <tbody>
                  {this.state.todos.map(this.renderTodo.bind(this))}
                  <tfoot>
                      <tr colSpan="3">
                          <td>Total items: {total}</td>
                      </tr>
                  </tfoot>
              </tbody>
          </table>
              <AddTodo onSubmit={this.onAddTodo.bind(this)} />
          </div>

        );
    }
}

export default TodoList;
