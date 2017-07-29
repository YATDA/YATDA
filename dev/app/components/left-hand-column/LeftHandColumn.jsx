import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Header from '../common/Header';
import TextInput from '../common/TextInput';
import TodoList from '../common/TodoList';

export default class LeftHandColumn extends React.Component {
  constructor() {
    super();
    this.state = {lists: []};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newList) {
    const {lists} = this.state;

    const newLists = lists.slice();
    newLists.push(newList);
    this.setState({lists: newLists});
  }

/*   removeList(list) {
    const {lists} = this.state;
    const index = lists.indexOf(list);
    const newLists = lists.slice();
    newLists.splice(index, 1);

    this.setState({lists: newLists});
  } */

  render() {
    return (
      <div className={classNames('box', 'column', 'left-hand-column')}>
        <Header className="yatda-header" title="My Lists" />
        <TextInput placeholder="Add a Todo List" onSubmit={this.handleSubmit} />
        <TodoList className="yatda-list" todos={this.state.lists} />
      </div>
    );
  }
}

LeftHandColumn.propTypes = {};

LeftHandColumn.displayName = 'LeftHandColumn';
