var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').on('click', function(){
      this.model.select();
    }.bind(this)); //TODO this.model.select.bind(this));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
