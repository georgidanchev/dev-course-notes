/* eslint-disable */

const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const ChatRoom = function() {
  const users = {};

  return {
    register: function(user) {
      user[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const brad = new User('Brad');
const jeff = new User('Jeff');
const john = new User('John');

const chatroom = new ChatRoom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(john);

brad.send('Hello Jeff', jeff);
john.send('Hello Brad, you are the best', brad);
jeff.send('Hello Everyone!!!');
