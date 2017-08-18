
var h = $(window).height();
$(window).scroll(function()
{
    if (($(this).scrollTop()+h) >= $("#fade-left").offset().top)
    {
        setTimeout(function()
        {
            $("#fade-left").css({visibility:"visible"});
            $("#fade-left").eq(0).addClass("animated lightSpeedInLeft")
        },1000)
    }
    if (($(this).scrollTop()+h) >= $("#fade-right").offset().top)
    {
        setTimeout(function()
        {
            $("#fade-right").css({visibility:"visible"});
            $("#fade-right").eq(0).addClass("animated lightSpeedInRight")
        },500)
    }
    if (($(this).scrollTop()+h) >= $("#fade-left--two").offset().top)
    {
        setTimeout(function()
        {
            $("#fade-left--two").css({visibility:"visible"});
            $("#fade-left--two").eq(0).addClass("animated lightSpeedInLeft")
        },1000)
    }
    if (($(this).scrollTop()+h) >= $("#fade-right--two").offset().top)
    {
        setTimeout(function()
        {
            $("#fade-right--two").css({visibility:"visible"});
            $("#fade-right--two").eq(0).addClass("animated lightSpeedInRight")
        },500)
    }
    if (($(this).scrollTop()+h) >= $("#zoominup").offset().top)
    {
        setTimeout(function()
        {
            $("#zoominup").css({visibility:"visible"});
            $("#zoominup").eq(0).addClass("animated zoomInUp")
        },1000)
    }
    if (($(this).scrollTop()+h) >= $("#zoominup").offset().top)
    {
        setTimeout(function()
        {
            $("#zoominup").css({visibility:"visible"});
            $("#zoominup").eq(0).addClass("animated zoomInUp")
        },1000)
    }
    if (($(this).scrollTop()+h) >= $("#zoominleft").offset().top)
    {
        setTimeout(function()
        {
            $("#zoominleft").css({visibility:"visible"});
            $("#zoominleft").eq(0).addClass("animated zoomInLeft")
        },500)
    }
    if (($(this).scrollTop()+h) >= $("#zoominright").offset().top)
    {
        setTimeout(function()
        {
            $("#zoominright").css({visibility:"visible"});
            $("#zoominright").eq(0).addClass("animated zoomInRight")
        },500)
    }
    if (($(this).scrollTop()+h) >= $("#zoomindown").offset().top)
    {
        setTimeout(function()
        {
            $("#zoomindown").css({visibility:"visible"});
            $("#zoomindown").eq(0).addClass("animated zoomInDown")
        },500)
    }
    if (($(this).scrollTop()+h) >= $("#zoomindown2").offset().top)
    {
        setTimeout(function()
        {
            $("#zoomindown2").css({visibility:"visible"});
            $("#zoomindown2").eq(0).addClass("animated zoomInDown")
        },500)
    }
    if (($(this).scrollTop()+h) >= $("#zoomindown3").offset().top)
    {
        setTimeout(function()
        {
            $("#zoomindown3").css({visibility:"visible"});
            $("#zoomindown3").eq(0).addClass("animated zoomInDown")
        },500)
    }
});

//Скролл до нужного якоря (меню)
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});
