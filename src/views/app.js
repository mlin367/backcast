var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(exampleVideoData) {

    this.videos = new Videos();
    this.videos.search('backbone');
    this.render();

    this.videos.on('sync', function() {
      this.render(true);
    }, this);
  },


  render: function(isRenderingAPIData) {
    this.$el.html(this.template());
    this.$el.find('.list').html(new VideoListView({collection: this.videos}).render().$el);
    this.$el.find('.search').html(new SearchView({collection: this.videos}).render().$el);
    if (isRenderingAPIData && this.videos.at(0)) {
      this.$el.find('.player').html(new VideoPlayerView({collection: this.videos}).render(this.videos.at(0).attributes).$el);
      this.$el.find('.details').html((new VideoDetailsView({model: this.videos.at(0)})).render().$el);
    } else {
      this.$el.find('.player').html(new VideoPlayerView({collection: this.videos}).render().$el);
    }

    return this;
  },

  template: templateURL('src/templates/app.html')

});
