var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').html(this.collection.map(function(videoListEntry){
      var videoListEntryView = new VideoListEntryView({ model: videoListEntry});
      return videoListEntryView.render().$el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
