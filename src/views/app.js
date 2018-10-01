var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();

  },


  render: function() {

    this.$el.html(this.template());
    this.$el.find('.player').html(new VideoPlayerView().render().$el);
    this.$el.find('.list').html(new VideoListView({collection: window.videos}).render().$el);


    return this;
  },

  template: templateURL('src/templates/app.html')

});
