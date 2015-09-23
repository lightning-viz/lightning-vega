'use strict';

var LightningVisualization = require('lightning-visualization');
var vega = require('vega-browserify');

/*
 * Extend the base visualization object
 */
var Visualization = LightningVisualization.extend({

    getDefaultOptions: function() {
        /*
         * If the visualization takes options provide sensible
         * defaults here.
         */
        return {
        };
    },

    init: function() {
        this.render();
    },

    render: function() {
        var self = this;
        vega.parse.spec(this.data, function(chart) {
            var vis = chart({el: self.el, renderer: 'svg'});
            vis.update();
        });

        // render the visualization
    },

    formatData: function(data) {
        return data;
    },

    updateData: function(formattedData) {
        this.data = formattedData;
    },

    appendData: function(formattedData) {    
    }

});


module.exports = Visualization;
