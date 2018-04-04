import * as React from 'react';
import styled from 'styled-components';
import { Todo } from 'models/todos';
import TodoCard from './TodoCard';
import axios from 'axios';

interface Props {
  todos: Todo[];
  complete: (id: string) => () => void;
}

class TodoList extends React.Component<Props> {
  render() {
    return (
      <>
        <div>
          <h2>Active</h2>
          {this.props.todos
            .filter((todo) => !todo.completed)
            .map((todo) =>
              <TodoCard
                key={todo.id}
                todo={todo}
                complete={this.props.complete}
              />
            )
          }
        </div>
        <div>
          <h2>Completed</h2>
          {this.props.todos
            .filter((todo) => todo.completed)
            .map((todo) =>
              <TodoCard
                key={todo.id}
                todo={todo}
              />
            )
          }
        </div>
      </>
    );
  }
}

export default TodoList;
