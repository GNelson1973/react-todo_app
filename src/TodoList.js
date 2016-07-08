import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo'
import jQuery from 'jquery'

class TodoList extends React.Component {

  constructor(){
      super();

      this.state = {
          message: "There are no scores yet.",
          todos: [
              { title: "Cleaning", score: 1 },
              { title: "Walking", score: 1 },
              { title: "Shopping", score: 1 }
          ]
      };
  }

  onAddTodo(username){
      var newTodo = { title: username, score: 1 };
      var newTodos = this.state.todos.concat(newTodo);
      this.setState({
          todos: newTodos
      });
  }


  onChangeScore(title, score){
     this.setState({
         message: title + " scored and has " + score + " points."
     });
   }

   renderTodo(todo){
        return <Todo
            title={todo.title}
            score={todo.score}
            onChange={this.onChangeScore.bind(this)}
            />;
    }

    totalCount(){
      return this.state.todos.reduce(
        function(prev, next) {
          return prev + next.score;
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
