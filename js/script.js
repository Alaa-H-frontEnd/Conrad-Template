$('.first').click( function() {
    $('.f1 .one').show().siblings().hide();
    ;
} );

$('.second').click( function() {
    $('.f1 .two').show().siblings().hide();
   
} );

$(window).scroll( function() {
    var scroll = $(this).scrollTop();
    if(scroll > 500) {
        $('.header').show();

    }else{
        $('.header').hide();
    }
} );

$('.one').css('display','block');

$('div.acordion h3').click( function() {
    $(this).next().toggle();
    $('div.acordion p').not($(this).next()).hide();
} );


    $('.timer').countTo();


    // $('.all_images').mixItUp();
