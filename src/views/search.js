var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    this.$el.find('button').on('click', function() {
      this.collection.search(this.$el.find('.form-control').val());
    }.bind(this));

    this.$el.find('input').on('keyup', function(e) {
      var code = e.keyCode || e.which;
      if (code === 13) { 
        this.collection.search(this.$el.find('.form-control').val());
      }
    }.bind(this));

    return this;
  },

  template: templateURL('src/templates/search.html')

});
