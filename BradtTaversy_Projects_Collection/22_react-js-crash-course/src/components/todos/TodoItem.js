import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration:  this.props.todo.completed ? 'line-through' : 'none',
      borderBottom: '1px #ccc dotted',
      backgroundColor: '#f4f4f4',
      padding: '10px',
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this,id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propType = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.func,
 }

const btnStyle = {
  borderRadius: '50%',
  padding: '5px 9px',
  background: '#ff0000',
  cursor: 'pointer',
  color: '#fff',
  border: 'none',
  float: 'right',
}

export default TodoItem
