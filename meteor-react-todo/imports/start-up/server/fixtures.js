import { Meteor } from 'meteor/meteor';
import { ToDos } from '../../api/todo';

// if there is nth in the db, this default item will be inserted
Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: 'm@wise.com',
      password: 'password'
    });
  }
  if (ToDos.find().count() === 0) {
    ToDos.insert({
      title: 'Learn Meteor',
      completed: false
    });
    ToDos.insert({
      title: 'Learn React',
      completed: false
    });
    ToDos.insert({
      title: 'Learn Redux',
      completed: false
    });
  }
});
