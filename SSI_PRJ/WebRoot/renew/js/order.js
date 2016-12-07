!function () {
    $(function () {
        $('.pay .way').off().on('click',function () {
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        });
    });
}();