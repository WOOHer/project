// (function() {
//   'use strict';
//
//   setTimeout(function() {
//     document.querySelector('.greating_picture').classList.add('m--show');
//   }, 1000);
// })();

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

//paralax
// var paralax = (function () {
//   var bg = document.querySelector('.head__bg');
//   var user = document.querySelector('.welcome__text');
//
//   return {
//     move: function(block, windowScroll, strafeAmount) {
//       var strafe = windowScroll / -strafeAmount + '%';
//       var transformString = 'translate3d(0,' + strafe + ', 0)';
//
//       var style = block.style;
//
//       style.transform = transformString;
//       style.wekitTransform = transformString;
//
//       style.top = strafe;
//     },
//
//     init: function (wScroll) {
//       this.move(bg, wScroll, 45);
//     }
//   }
// }());
//
// window.onscroll = function () {
//   var wScroll = window.pageYOffset;
//
//   paralax.init(wScroll);
// }