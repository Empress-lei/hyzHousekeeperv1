$(function () {
    $(".enviaddBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        var contText = $(".add_txt").val();
        if(txtTitle == "" || txtTitle == undefined) {
            $(".other_p").hide();
        }if(contText == "" || contText == undefined) {
            $(".other_content").hide();
        }else {
            var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
            $("<p class='charac_p current_list'>" + txtTitle + "</p>").appendTo(li_);
            $("<p class='charac_content'>" + contText + "</p>").appendTo(li_);
        }
        $(".chara_name").val("");
        $(".add_txt").val("");
        selectOther(".other_list .charac_p")
    })
    selectOther(".other_list .charac_p")
})

//多选
function selectOther(ele) {
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