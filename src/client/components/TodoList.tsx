import * as React from 'react';
import styled from 'styled-components';
import { Todo } from 'models/todos';
import TodoCard from './TodoCard';
import axios from 'axios';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface Props {
  todos: Todo[];
  complete: (id: string) => () => void;
}

class TodoList extends React.Component<Props> {
  render() {
    return (
      <ListWrapper>
        <List>
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
        </List>
        <List>
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
        </List>
      </ListWrapper>
    );
  }
}

export default TodoList;
