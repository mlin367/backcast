var SearchView = Backbone.View.extend({

  debounce: (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  },

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

    this.$el.find('input').on('input', this.debounce(function() {
      this.collection.search(this.$el.find('.form-control').val());
    }.bind(this), 300));

    return this;
  },

  template: templateURL('src/templates/search.html')

});
