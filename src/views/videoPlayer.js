var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) {
      this.render(e.attributes);
      //this.render();
    }, this);
  },

  render: function(attributes) {
    this.$el.html(this.template(attributes));
    //this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
