//app/views/game_view.js
import Backbone from 'backbone';
// import BoardView from 'app/views/board_view';

const GameView = Backbone.View.extend({
  initialize: function() {
    console.log("breadcrumb #1");
    this.render();
  }, //close initialize

  render: function() {
    console.log("breadcrumb #2");
    // const boardView = new BoardView({
    //   model: this.model.boardView,
    //   el: this.$('main')
    // })
    // boardView.render();
    //
    return this;
  } //close render
});

export default GameView;
