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
	 // delegate calls to data-toggle="lightbox"
                $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking out the shows, huh?');
                            }
                        },
				
						
                    });
                });

 
	

  
  
}); // document ready function closed