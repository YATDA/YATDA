import React from 'react';
import TodoItem from './components/TodoItem';

const {Component} = React;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [],
    };
  }

  onInputChange(event) {
    this.setState({newTodo: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const {todos, newTodo} = this.state;

    const newTodos = todos.slice();
    newTodos.push(newTodo);
    this.setState({
      newTodo: '',
      todos: newTodos,
    });
  }

  // TODO: break into a separate component
  renderAddTodoInput() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          placeholder="Add a Todo Item"
          onChange={this.onInputChange.bind(this)}
          value={this.state.newTodo}
        />
      </form>
    );
  }

  // TODO: maybe break into a separate component
  renderTodoList() {
    const {todos} = this.state;

    return todos.map(todo => <TodoItem name={todo} key={todo} />);
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {this.renderAddTodoInput()}
        {this.renderTodoList()}
      </div>
    );
  }
}
