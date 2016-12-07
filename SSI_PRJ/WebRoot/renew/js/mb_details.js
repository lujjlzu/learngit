
var init = function () {
    $('.line .item').off().on('click',function () {
        if($(this).parents().hasClass('mutil')){
            if($(this).hasClass("selected")){
                $(this).removeClass('selected');
            }else{
                $(this).addClass('selected');
            }
        }else{
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
    });

    $("#submit").click(function () {
        window.location.href='ready.html';
    });
}

$(function () {
    init();
});