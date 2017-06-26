import React from 'react';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';

const {Component} = React;

export default class App extends Component {
  constructor() {
    super();
    this.state = {todos: []};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newTodo) {
    const {todos} = this.state;

    const newTodos = todos.slice();
    newTodos.push(newTodo);
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <TextInput placeholder="Add a Todo Item" onSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
