import Ember from 'ember';

var getOptions = function (keys) {
  var properties = this.getProperties(keys);

  Object.keys(properties).forEach(function (key) {
    if (properties[key] === "null") {
      properties[key] = null;
    }

    if (properties[key] === undefined) {
      delete properties[key];
    }
  });

  return properties;
}

export default Ember.Component.extend({
  classNames: ['masonry-grid'],

  items: null,

  initializeMasonry: function () {
    console.log("initializeMasonry");

    var options = getOptions.call(this, [
          'containerStyle',
          'columnWidth',
          'gutter',
          'hiddenStyle',
          'isFitWidth',
          'isInitLayout',
          'isOriginLeft',
          'isOriginTop',
          'isResizeBound',
          'itemSelector',
          'stamp',
          'transitionDuration',
          'visibleStyle'
        ]);
    var  _this = this;
    this.$().imagesLoaded(function () {
      console.log("imagesLoaded");
      _this.$().masonry(options);
      _this.$().masonry('reloadItems');
    });
  }.on('didInsertElement').observes('items.length')

  // updateMasonry: function () {
  //   var  _this = this;
  //   this.$().imagesLoaded(function () {
  //     console.log("imagesLoaded");
  //     _this.$().masonry('reloadItems');
  //   });
  // }.observes('items.@each')



});