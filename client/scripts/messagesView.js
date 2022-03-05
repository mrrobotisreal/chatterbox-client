// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    console.log('MESSAGES VIEW RENDER');
    if (Messages.size() > 1) {
      Messages._data.forEach(item => this.renderMessage({ room: item.roomname, username: item.username, text: item.text, github: item.github_handle}));
    }
  },

  renderMessage: function(message) {
    $(MessageView.render(message)).appendTo(this.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // if (event.currentTarget === 'something') {
    //   this.renderMessage(event.currentTarget);
    // }

  }

};


//   <div class="chat">
//     <div class="username"><%= username %></div>
//     <div><%= text %></div>
//     <div><%= github %></div>
//   </div>
// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"
// var template = _.template("<b><%- value %></b>");
// template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"