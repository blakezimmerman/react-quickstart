import * as React from 'react';
import * as shortId from 'shortid';
import styled from 'styled-components';
import { Todo } from 'models/todos';
import Button from '../shared/Button';

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 1.2rem;
`;

interface Props {
  addTodo: (todo: Todo) => void;
}

interface State {
  input: string;
}

class TodoInput extends React.Component<Props, State> {
  state = {
    input: ''
  };

  updateInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      input: event.currentTarget.value
    });
  }

  createTodo = () => {
    const newTodo: Todo = {
      id: shortId(),
      text: this.state.input,
      completed: false
    };
    this.props.addTodo(newTodo);
    this.setState({ input: '' });
  }

  render() {
    return (
      <InputWrapper>
        <Input
          placeholder='Enter your todo'
          value={this.state.input}
          onChange={this.updateInput}
        />
        <Button onClick={this.createTodo}>Add</Button>
      </InputWrapper>
    );
  }
}

export default TodoInput;
