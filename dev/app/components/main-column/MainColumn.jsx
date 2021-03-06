import Header from '../common/Header';
import React from 'react';
import TextInput from '../common/TextInput';
import TodoList from '../common/TodoList';

import classNames from 'classnames';

const {Component} = React;

export default class MainColumn extends Component {
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

  removeTodo(todo) {
    const todos = this.state;
    const index = todos.indexOf(todo);
    const newTodos = todos.slice();
    newTodos.splice(index, 1);

    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className={classNames('box', 'column', 'main-column')}>
        <Header title="My Todos" />
        <TextInput placeholder="Add a Todo Item" onSubmit={this.handleSubmit} />
        <TodoList className="yatda-list" todos={this.state.todos} />
      </div>
    );
  }
}
