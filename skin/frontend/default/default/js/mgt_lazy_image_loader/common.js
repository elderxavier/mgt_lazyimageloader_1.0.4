$.noConflict();
jQuery(document).ready(function() {  
});
jQuery(document).ready(function($) {
  jQuery('.lazy').jail({  
    event: 'load+scroll',
    placeholder : "/skin/frontend/default/default/images/mgt_lazy_image_loader/loader.gif",			
  });
  setTimeout(function(){	
	jQuery( ".lazy" ).each(function( index ) {		
		longdesc = jQuery( this ).attr('long-desc');				
		jQuery( this ).attr('src',longdesc);				
	});
  }, 5000);  
});

