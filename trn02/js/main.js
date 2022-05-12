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



    $('.product_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]


    })

    $('.product_list .s_left').on('click', function(){
        $('.product_slider').slick('slickPrev');
    })

    $('.product_list .s_right').on('click', function(){
        $('.product_slider').slick('slickNext');
    })

    $('.tab_link>li').on('click', function(){
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on').siblings().removeClass('on');
        // eq = nth of type 랑 비슷함//
    })

    $('.footer #link').on('change', function(){
        var lik = $(this).val(); 
        if(lik) window.open(lik)
        // var lik = $(this).val()  : $(this).val() 의 옵션을 lik 에 담아라
        // window open 새창 띄우기 , 그페이지에서 document //
        // if(lik) 만약에 lik 값이 있으면 그 링크 새창을 띄워라//
        
    })

    $('.mbtn').on('click', function(){
        $('nav').toggleClass('on');
        $(this).toggleClass('is-active');
        
    })




    /////////////////////////////////////
    });