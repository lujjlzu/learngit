!function () {
    $(function () {
        $('.pay .item').off().on('click',function () {
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        });
    });
}();