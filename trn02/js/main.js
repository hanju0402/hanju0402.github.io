$(function(){
    //////////////////////////////////////

    $('.top_banner i').on('click', function(){
        $('.top_banner').slideUp(1000);
    });

    $('.main_slider').on('init reInit afterChange', function(){
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.movie .dec i:nth-of-type(2)').on('click', function(){
        $('.movie video').trigger('play')
    });
    $('.movie .dec i:nth-of-type(1)').on('click', function(){
        $('.movie video').trigger('pause')
    });

    $('#myMovie').YTPlayer({
              videoURL:'https://youtu.be/DWAJ_dm-A34',
              containment:'.utube',
              autoPlay:true, 
              mute:true, 
              startAt:0, 
              opacity:1,
              showControls: false,
              playOnlyIfVisible: true,
              vol: 1,
    });

    $('.utube i:nth-of-type(2)').on('click', function(){
        $('#myMovie').YTPPlay();
    });

    $('.utube i:nth-of-type(1)').on('click', function(){
        $('#myMovie').YTPPause();
    });

    $('.sub_slider i.xi-arrow-left').on('click', function(){
        $('.slidebox').slick('slickPrev');
    });

    $('.sub_slider i.xi-arrow-right').on('click', function(){
        $('.slidebox').slick('slickNext');
    });

    $('.slidebox').slick({

       
        arrows: false,
        dots: true,
        slidesToShow:5,
 
    })


    /////////////////////////////////////
    });