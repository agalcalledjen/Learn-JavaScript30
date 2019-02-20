import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'todos.toggleComplete'(item) {
    if (item.owner !== this.userId) {
      throw new Meteor.Error(
        'todos.toggleComplete.not-authorized',
        'You are not allowed to update to-dos for other users.'
      );
    }
    ToDos.update(item._id, {
      $set: { completed: !item.completed }
    });
  },
  'todos.addToDo'(title) {
    if (!this.userId) {
      throw new Meteor.Error(
        'todos.addToDo.not-authorized',
        'You are not allowed to update to-dos for other users.'
      );
    }

    ToDos.insert({
      title: title,
      completed: false,
      owner: this.userId
    });
  },
  'todos.removeCompleted'() {
    // we want to remove everything that has been completed in the db

    // since we don't have an owner, we need to check if they're authenticated
    // if this user is not authenticated, throw this error
    if (!this.userId) {
      throw new Meteor.Error(
        'todos.removeCompleted.not-authorized',
        'You are not allowed to update to-dos for other users.'
      );
    }

    // remove everything that matches these conditions
    // the owner must match the id and the completed must be true
    ToDos.remove({ owner: this.userId, completed: true });
  },
  'todos.removeToDo'(itemid) {
    // 1. Find todo with _id === id -> item
    const item = ToDos.findOne({ _id: itemid });
    if (item.owner !== this.userId) {
      throw new Meteor.Error(
        'todos.removeToDo.not-authorized',
        'You are not allowed to update to-dos for other users.'
      );
    }
    ToDos.remove(item._id);
  }
});

if (Meteor.isServer) {
  Meteor.publish('todos', function todosPublication() {
    return ToDos.find({ owner: this.userId });
  });
}

export const ToDos = new Mongo.Collection('todos');
