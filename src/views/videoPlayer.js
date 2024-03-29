var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) {
      this.render(e.attributes);
    }, this);
    this.collection.on('sync', () => {
      if (this.collection.at(0)) {
        this.render(this.collection.at(0).attributes);
      }
    }, this);
  },

  render: function(attributes) {
    if (attributes) {
      this.$el.html(this.template(attributes));
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
