// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    $('<option value="">SELECT A ROOM</option>').appendTo(this.$select);
    if (Rooms._data) {
      Rooms._data.forEach(item=>$(`<option value="${item}">${item}</option>`).appendTo(this.$select));
    }


  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // then in here were are basically filtering out the messages with the specific room like you said

  },

  handleChange: function(event) {
    $($select).change(()=>{
      console.log(event);
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
