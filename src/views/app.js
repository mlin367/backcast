var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(exampleVideoData) {

    // TODO this is messy
    if (exampleVideoData) {
      this.videos = new Videos(exampleVideoData);
    } else {
      this.videos = new Videos();
    }

    this.render();

  },


  render: function() {

    this.$el.html(this.template());
    this.$el.find('.list').html(new VideoListView({collection: this.videos}).render().$el);
    this.$el.find('.player').html(new VideoPlayerView({collection: this.videos}).render(this.videos.at(0).attributes).$el);


    return this;
  },

  template: templateURL('src/templates/app.html')

});
