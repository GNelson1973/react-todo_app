import React from 'react';
import TodoList from './TodoList';
import Todos from './Todos';

class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>TodoList</h1>
                    <TodoList />
                    <Todos />
                </div>
            );
        }
    }

export default App;
