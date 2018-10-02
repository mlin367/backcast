var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    this.$el.find('.btn').on('click', function(e) {
      // console.log(this.$el.find('.form-control').val())
      this.collection.search(this.$el.find('.form-control').val());
    }.bind(this));
    return this;
  },

  template: templateURL('src/templates/search.html')

});
