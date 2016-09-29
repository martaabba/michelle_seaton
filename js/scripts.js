$(document).ready(function(){
	
	//nav bar smooth scroll
	var $root = $('html, body');
          $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
              scrollTop: $(href).offset().top
                }, 500, function(){
                  window.location.hash = href;
                                  });
              return false;
                                              }); //close nav bar smooth scroll

	//Stellar
	$.stellar();

	//gallery section
//		for(var i = 0; i < works.length; ++i ) {
//  $("#gallery").append("\
  //  <div class='col-sm-6 col-md-3'>\
    //  <img class='img-responsive' src='" + works[i] + "'>\
//    </div>\
// ");
	//close gallery section
 }
}); // document ready function closed