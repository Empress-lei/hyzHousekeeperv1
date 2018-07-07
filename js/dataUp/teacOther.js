$(function () {
    $(".addBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        if(txtTitle == "") {
            return;
        }
        var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
        $("<p class='charac_p current_list'>" + txtTitle + "</p>").appendTo(li_);
        selectOpt(".other_ul li .charac_p")
        if($(".other_p").text() == "" || $(".other_p").text() == undefined) {
            return;
        }
        $(".chara_name").val("");
        selectOpt(".other_ul li .charac_p")

    })
    selectOpt(".characteristic li .charac_p")
})

//多选
function selectOpt(ele) {
    var ele = $(ele);
    $(".other_charac li").unbind('click');
    ele.on("click", function () {
        if ($(this).hasClass('current_list')) {
            $(this).removeClass('current_list');
        } else {
            $(this).addClass('current_list');
        }
    })
}