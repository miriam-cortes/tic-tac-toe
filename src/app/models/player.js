// app/models/player.js

import Backbone from 'backbone';
import Game from 'app/models/game';

const Player = Backbone.Model.extend({
  initialize: function(options) {
    this.set("symbol", null);
    this.set("turn", false);
    this.set("winner", false);
    this.set("name", options.name);

    this.game = new Game();
  }
});

export default Player;
