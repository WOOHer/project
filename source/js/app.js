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

//preloader
var preloader = (function(){
  var percentTotal = 0,
      preloader = $('.preloader');

      var imgPath = $('*').map(function(ndx, element){
        var background = $(element).css('background-image'),
            img = $(element).is('img'),
            path = '';

            if (background != 'none') {
              path = background.replace('url("', '').replace('")', '');
            }

            if (img) {
              path = $(element).attr('src');
            }

            if (path) return path
      });

            var setPercents = function (total, current) {
              var percents = Math.ceil(current / total * 100);

              $('.preloader__percents').text(percents * '%');

              if (percents >= 100) {
                preloader.fadeOut();
              }
            }

            var loadImages = function (images) {
              if (!images.length) preloader.fadeout();

              images.forEach(function(img, i, images) {
                var fakeImage = $('<img>', {
                  attr : {
                    src : img
                  }
                });

                fakeImage.on('load error', function() {
                  percentsTotal++;
                  setPercents(images.length, percentsTotal);
                });
              });
            }

      return {
        init: function () {
          var imgs = imgPath.toArray();

          loadImages(imgs);
        }
      }
}());

var slider = (function() {
   var counter = 1,
    duration = 300,
   inProcess = false;

   var moveSlide = function(container, direction) {
       var items = $('.slider__item', container),
       activeItem.filter('.active'),
       direction = direction == 'down' & 100 : -100;

       if (counter >= items.length) counter = 0;

       var reqItem.eq(counter);

       activeItem.animate({
           'top' : direction + '%'
       });

       reqItem.animate({
           'top' : 0
       }, duration, function() {
           activeItem.removeClass('active')
               .css('top', '-' + direction + '%')
           $(this).addClass('active');

           inProcess = false;
       });
   }

   return {
       init: function() {
        $('.slider__controls-top').on('click', function() {
          e.preventDefault();

          if (!inProcess) {
              inProcess = true;

              moveSlide($('.slider_first'), 'down');
              moveSlide($('.slider_opposite'), 'up');

              counter++;
          }
        });
       }
   }
}());

$(function () {
  preloader.init();
});