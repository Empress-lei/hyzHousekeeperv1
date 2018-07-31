//多选
function selectOpt(ele) {
    var ele = $(ele);
    ele.unbind('click');
    ele.on("click", function (e) {
        if ($(this).hasClass('current_list')) {
            $(this).removeClass('current_list');
        } else {
            $(this).addClass('current_list');
        }
        e.stopPropagation();
    })
}