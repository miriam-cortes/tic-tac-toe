//app/views/board_view.js
//I plan on using this to display the tictactoe hashtag

import _ from 'underscore';
import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("breadcrumb #3");
  },

  render: function() {
    console.log('breadcrumb #4');

    const spaceList = Backbone.$('.space');
    spaceList.empty();

    const self = this;
    this.model.forEach(function(space) {
      const space = new SpaceView({
        model: space
      });
      console.log('breadcrumb #5.5');
    })
  }
});

export default BoardView;
