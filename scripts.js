function openbox(id){
    display = document.getElementById(id).style.display;
    if(display=='none' || display==''){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}

jQuery(document).ready(function() {  
	jQuery('.wrapper>article').not(':first-of-type').hide();  
	jQuery('.wrapper>h4').click(function() {
		var findArticle = jQuery(this).next();
		var findWrapper = jQuery(this).closest('.wrapper');    
		if (findArticle.is(':visible')) {
      		findArticle.slideUp('fast');
		}
		else {
			findWrapper.find('>article').slideUp('fast');
			findArticle.slideDown('fast');
		}
	});
});





