import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';



class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo} />
    });
  }
}

// PropTypes
Todos.propType = {
 todos: PropTypes.array.isRequired,
 toggleComplete: PropTypes.func.isRequired,
 delTodo: PropTypes.func.func,
}

export default Todos;

