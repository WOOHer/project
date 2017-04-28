(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

  //map
ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map('map', {
    center: [58.605717, 49.665167],
    zoom: 12,
    controls: ['default','routeEditor','smallMapDefaultSet'],
  });
}