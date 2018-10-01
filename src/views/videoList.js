var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').html(this.collection.map(function(videoListEntry) {
      var videoListEntryView = new VideoListEntryView({ model: videoListEntry});
      return videoListEntryView.render().$el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
