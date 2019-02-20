import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

// import components
import ToDoCount from '../../components/ToDoCount';
// import ToDoInput from '../../components/ToDoInput';
import ClearButton from '../../components/ClearButton';
import ToDoItem from '../../components/ToDoItem';

import { ToDos } from '../../../api/todo'; // instance of our db
import { withTracker } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../../components/AccountsWrapper/index';

// Statefull component
class App extends Component {
  constructor(props) {
    super(props);

    this.toDoInput = React.createRef();
    this.state = {
      name: 'James Bond',
      lastId: 0
    };
  }

  // componentDidMount() {
  //   this.toDoInput.current.focus();
  // }

  toggleComplete = item => {
    // ToDos.update({ _id: item._id }, { $set: { completed: !item.completed } });
    Meteor.call('todos.toggleComplete', item); // NEW!
  };

  removeToDo = item => {
    // ToDos.remove(item._id);
    Meteor.call('todos.removeToDo', item._id);
    // instead of passing in item, we should pass in item._id so that it is more secure
    // on todo.js, we will call it itemid
  };

  hasCompleted = () => {
    const completedTodos = this.props.todos.filter(todo => todo.completed);

    return completedTodos.length > 0 ? true : false;
  };

  removeCompleted = () => {
    // const todos = this.state.todos.filter(todo => !todo.completed);
    // this.setState({ todos });

    /* const todos = this.props.todos.filter(todo => todo.completed);
    todos.map(todo => {
      ToDos.remove({ _id: todo._id }, { completed: true });
    }); */
    Meteor.call('todos.removeCompleted');
  };

  addToDo = event => {
    event.preventDefault();

    let toDoInput = this.toDoInput.current;
    // let item = this.item.current;

    // if (toDoInput.value) {

    //   ToDos.insert({
    //     title: toDoInput.value,
    //     completed: false,
    //     owner: this.props.currentUserId
    //   });
    //   toDoInput.value = '';
    // }
    Meteor.call('todos.addToDo', toDoInput.value);
    // the value is reset
    toDoInput.value = '';
  };

  render() {
    const showHeader = true;
    const { todos } = this.props;
    const number = todos.length;

    return (
      <div className='app-wrapper'>
        <div className='login-wrapper'>
          <AccountsUIWrapper />
        </div>
        {this.props.currentUserId ? (
          <div className='logged-in'>
            <div className='todo-list'>
              {showHeader ? <h1>So Much To Do</h1> : <h1>Untitled Project</h1>}

              <div className='add-todo'>
                <form name='addTodo' onSubmit={this.addToDo}>
                  <input type='text' ref={this.toDoInput} />
                  <span>(press enter to add)</span>
                </form>
              </div>

              <ul>
                {todos.map(todo => (
                  <ToDoItem
                    key={todo._id}
                    todo={todo}
                    toggleComplete={this.toggleComplete}
                    removeToDo={this.removeToDo}
                  />
                ))}
              </ul>

              <div className='todo-admin'>
                <ToDoCount number={number} />
                {this.hasCompleted() && (
                  <ClearButton removeCompleted={this.removeCompleted} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='logged-out-message'>
            <p>Please sign in to see your todos.</p>
          </div>
        )}
      </div>
    );
  }
}

// withTracker is a HOC, higher order component
export default withTracker(() => {
  // we're returning an object { key: value }
  Meteor.subscribe('todos'); // NEW!
  return {
    // ToDos is a db
    // we will find todos in the ToDos db and we can pass it as a prop in App
    // .find() means it will find it
    // .fetch() means fetch it for us
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    todos: ToDos.find({}).fetch()
  };
})(App);
