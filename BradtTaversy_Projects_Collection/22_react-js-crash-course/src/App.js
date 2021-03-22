// rca -> snippet shortcut for class based component

import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import AddTodo from './components/todos/AddTodo';
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import AboutPage from './components/pages/AboutPage';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({ todos: res.data}))
    .catch(err => console.log(err))
  }

  toggleComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })).catch(err => console.error(err))
  }

  addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then(res => {
      this.setState({todos: [...this.state.todos, res.data]})
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos}
                toggleComplete={this.toggleComplete}
                delTodo={this.delTodo} />
              </React.Fragment>
            )}/>
            <Route path="/about" component={AboutPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
