// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  add: function (message) {
    if (this._data === null) {
      this._data = [message];

    } else {
      if (!this._data.includes(message.message_id)) {
        this._data.push(message);
      }
    }
  },

  size: function () {
    return this._data.length;
  }

};