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
    this.$el.find('.player').html(new VideoPlayerView().render().$el);
    this.$el.find('.list').html(new VideoListView({collection: this.videos}).render().$el);


    return this;
  },

  template: templateURL('src/templates/app.html')

});
