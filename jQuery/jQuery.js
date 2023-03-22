$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('navbar-color');
            $('#white-navbar-logo').css("display", "none")
            $('#black-navbar-logo').css('display', "block")
            $('.navbar-toggler-icon').addClass('navbar-toggler-icon-change') 
            $('.navbar-nav').css('background-color','white')
            $('.nav-link').addClass('nav-color');
            $('.BTTop').addClass("BTanim");
            
        }
        
        else {
            $('.navbar').removeClass('navbar-color');
            $('#white-navbar-logo').css("display", "block")
            $('#black-navbar-logo').css('display', "none")
            $('.navbar-toggler-icon').removeClass('navbar-toggler-icon-change') 
            $('.navbar-nav').css('background-color', '#121519')
            $('.nav-link').removeClass('nav-color');
            $('.BTTop').removeClass("BTanim")
        }
    })

    $('.BTTop').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
})

