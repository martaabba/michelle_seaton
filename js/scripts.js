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

	//reviews.html
	 
  $(window).on('load', function(){
       $('div.container').masonry({
        columnWidth: 'div.block',
        itemSelector: 'div.block'
       });  
    });
	

  
  
}); // document ready function closed