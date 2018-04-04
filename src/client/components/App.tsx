import * as React from 'react';
import styled from 'styled-components';
import { Todo } from 'models/todos';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
`;

const AppHeader = styled.h1`
  font-weight: 300;
  text-align: center;
`;

interface State {
  todos: Todo[];
}

class App extends React.Component<{}, State> {
  state: State = {
    todos: []
  };

  addTodo = (todo: Todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
  }

  completeTodo = (id: string) => () => {
    const newTodos =
      [...this.state.todos].map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return(
      <AppContainer>
        <AppHeader>Todo List</AppHeader>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.todos}
          complete={this.completeTodo}
        />
      </AppContainer>
    );
  }
}

export default App;
