'use strict';

var LightningVisualization = require('lightning-visualization');
var _ = require('lodash');
var vegalite = require('vega-lite');

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

        // render the visualization

    },

    formatData: function(data) {
        console.log(data)
        return data;
    },

    updateData: function(formattedData) {
        this.data = formattedData;
    },

    appendData: function(formattedData) {    
    }

});


module.exports = Visualization;
