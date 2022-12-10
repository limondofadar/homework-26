 
 $(window).on('scroll',function(){
    
    if($(window).scrollTop()){
        $('.navbar').addClass('add_class');
        
    }
    else{


        $('.navbar').removeClass('add_class');
    }
})


new VenoBox({
    selector: '.my-video-links',
});


$('.counter').counterUp({
    delay: 10,
    time: 1000
});



$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-circle-chevron-left prevArrow"></i>',
    nextArrow:'<i class="fa-solid fa-circle-chevron-right nextArrow"></i>',

   
  });


  
