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
                                              });

	//Stellar
	$.stellar();

	//gallery section
$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).attr("title");
  	$('.modal-title').html(title);
  	$(this.innerHTML).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
    });
	//close gallery section
  }
});