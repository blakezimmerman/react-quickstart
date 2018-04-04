import * as React from 'react';
import styled from 'styled-components';
import { Todo } from 'models/todos';
import Button from '../shared/Button';

const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallButton = styled(Button)`
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
`;

interface Props {
  todo: Todo;
  complete?: (id: string) => () => void;
}

const TodoCard = (props: Props) => (
  <Card>
    {props.todo.text}
    {props.complete &&
      <SmallButton onClick={props.complete(props.todo.id)}>
        Complete
      </SmallButton>
    }
  </Card>
);

export default TodoCard;
