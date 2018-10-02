var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) {
      this.render(e.attributes);
      //this.render();
    }, this);
    this.collection.on('sync', () => {
      this.render(this.collection.at(0).attributes);
    }, this);
  },

  render: function(attributes) {
    this.$el.html(this.template(attributes));
    //this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
