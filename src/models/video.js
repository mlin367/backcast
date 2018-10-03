var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.fetchVideoDetails();
  },

  select: function() {
    this.trigger('select', this);
  },

  fetchVideoDetails: function() {    
    var data = {
      part: 'snippet,contentDetails,statistics',
      id: this.get('id'),
      key: window.YOUTUBE_API_KEY
    };
    
    Backbone.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/videos',
      type: 'GET',
      data: data,
      contentType: 'application/json',
      success: function (data) {
        this.videoDetails = this.parse(data);
        this.trigger('foundVideoDetails');
      }.bind(this),
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        // console.error('search failed', data.responseText);
      }
    });
  },

  parse: function(data) {
    var parsed = {};
    parsed.likeCount = data.items[0].statistics.likeCount;
    parsed.viewCount = data.items[0].statistics.viewCount;
    return parsed;
  },
});
