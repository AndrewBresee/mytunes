// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.queue = []; 
  },

  enqueue: function(song){
    this.add(song); 
    console.log(queue);
  },

  dequeue: function() {
    
  },

  playFirst: function(){

  }

});