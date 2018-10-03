var VideoDetailsView = Backbone.View.extend({
    initialize: function() {
        this.model.on('foundVideoDetails', function() {
            this.render(this.model.videoDetails);
        }, this)
    },
    render: function(attributes) {
        console.log(attributes)
        if (attributes) {
            this.$el.html(this.template(attributes));
        }
        return this;
    },

    template: templateURL('src/templates/videoDetailsView.html'),
});