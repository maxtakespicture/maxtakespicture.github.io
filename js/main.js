//DETERMINE IF DEVICE IS TOUCH

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~SMOOTH SCROLL & navigation~~~~~~~~~~~~~~~~~~~~~~~~~~

$(document).ready(function () {
    // down arrows
    $('.downarrow').click(function (e) {
        var linkHref = $(this).parent().attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 800);
        e.preventDefault();
    });
    
    //homepage nav
    $('.work-img').click(function (e) {
        var linkHref = $(this).parent().attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 800);
        e.preventDefault();
    });
    
    //back to top
    $('#to-top').click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

});

//~~~~~~~~~~~~~~~~~~~~~~~~~~SHOW AND HIDE WEB INFO~~~~~~~~~~~~~~~~~~~~~~~~~~

$('.morebttn').click(function() {
    var identifier = '.' + $(this).attr('class').split(' ')[1]
    
    if ($('.web-more' + identifier).hasClass('hide')) {
        $('.web-more' + identifier).slideDown(600).removeClass('hide').addClass('show');
        $('.morebttn' + identifier).html('LESS <i class="fa fa-caret-up" aria-hidden="true"></i>');
    } else {
        $('.web-more' + identifier).slideUp(600).addClass('hide');
        $('.morebttn' + identifier).html('MORE <i class="fa fa-caret-down" aria-hidden="true"></i>');
        $('html, body').animate({
            scrollTop: $('#homeweb').offset().top
        }, 800);
    }    
});

//Change instruction if device is touch

$(document).ready(function() {
    if (isTouch == true){
        $('#instruction').html('Tap an image to see more')
    }
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~MAKE JPLAYER WORK~~~~~~~~~~~~~~~~~~~~~~~~~~

 $(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "",
            m4a: './audvis/fsa-m4a.m4a',
            oga: './audvis/fsa-ogg.ogg'
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
      $("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "",
            m4a: './audvis/tt-m4a.m4a',
            oga: './audvis/tt-ogg.ogg'
          });
        },
        cssSelectorAncestor: "#jp_container_2",
        swfPath: "/js",
        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
      $("#jquery_jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "",
            m4a: './audvis/phantasmagoria-m4a.m4a'
          });
        },
        cssSelectorAncestor: "#jp_container_3",
        swfPath: "/js",
        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~GAME IMAGE CYCLE~~~~~~~~~~~~~~~~~~~~~~~~~~
//uses jquery cycle

$(document).ready(function() {
    $('#slideshow1 img:first').fadeIn(25000, function() {
        $('#slideshow1').cycle({pause:1});
    });
    $('#slideshow2 img:first').fadeIn(25000, function() {
        $('#slideshow2').cycle({pause:1});
    });
    $('#slideshow3 img:first').fadeIn(25000, function() {
        $('#slideshow3').cycle({pause:1});
    });    
    $('#slideshow4 img:first').fadeIn(25000, function() {
        $('#slideshow4').cycle({pause:1});
    });    
    $('#slideshow5 img:first').fadeIn(25000, function() {
        $('#slideshow5').cycle({pause:1});
    });    
    $('#slideshow6 img:first').fadeIn(25000, function() {
        $('#slideshow6').cycle({pause:1});
    });    
});


























