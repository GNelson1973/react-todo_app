import React from 'react';
import TodoList from './TodoList';
import Courses from './Courses';

class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>TodoList</h1>
                    <TodoList />
                </div>
            );
        }
    }

export default App;
