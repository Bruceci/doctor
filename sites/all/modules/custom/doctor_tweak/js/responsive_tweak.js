(function($){
   $(function(){

   	    

   });
   $(window).load(function(){
      $('.responsive-grid').each(function(i,ele){
        var alphaHeight = $('.alpha',ele).css('height');
        $('.omega',ele).css({'min-height': alphaHeight, 'max-height': alphaHeight, 'overflow': 'hidden'});
        console.log(alphaHeight);

   	  });
   });


})(jQuery);