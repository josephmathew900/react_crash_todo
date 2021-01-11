import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id : 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id : 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id : 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
    <div>
      <Todos todos={this.state.todos} />
    </div>
  );}
}

export default App;
