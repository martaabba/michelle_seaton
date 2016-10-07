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
                                              
                                              
  //modal button
 

	//Stellar
	$.stellar();

	//gallery section
	 

 
	

  
  
}); // document ready function closed