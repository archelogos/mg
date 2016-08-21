'use strict';
(function() {

    $(function(){

			window.addEventListener('load',function(){


				$('a.smooth').click(function(e) {
				  //if (e.preventDefault) e.preventDefault();
				  var $link = $(this);
				  var anchor = $link.attr('href');
				  $('html, body').stop().animate({
				      scrollTop : $(anchor).offset().top
				  }, 500);
				  return false;
				});

			}); // End of window load

		}); // End of jQuery context

})(); // End of use strict
