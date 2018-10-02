var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.on('sync', function() {
      this.at(0).select();
    }, this);
  },

  fetch: function(dataObject) {
    var data = {
      part: 'snippet',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY
    };

    _.extend(data, dataObject.data);
    
    Backbone.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: data,
      contentType: 'application/json',
      success: function (data) {
        this.reset(data.items);
        this.trigger('sync');


        console.log('search successful');
      }.bind(this),
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('search failed', data.responseText);
      }
    });
  },

  search: function(searchString) {
    this.fetch({data: { q: searchString}});
  },
});
