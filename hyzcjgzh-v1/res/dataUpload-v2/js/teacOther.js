$(function () {
    $(".addBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        var contText = $(".add_txt").val();
        if(txtTitle == ""  & contText != "") {
            toast("请输入标题")
            return;
        }if(txtTitle == ""  & contText == ""){
            toast("请输入内容")
            return;
        }if(contText == "" & txtTitle != "") {
            var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
            $("<p class='charac_p current_list'>" + txtTitle + "</p>").appendTo(li_);
        } if(txtTitle != ""  & contText != "") {
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
function selectClass(ele) {
    var ele = $(ele);
    ele.unbind('click');
    ele.on("click", function (e) {
        if ($(this).hasClass('sele_current')) {
            $(this).removeClass('sele_current');
            $(this).parent().parent().find(".basics_eui").blur();
            $(this).parent().parent().find(".basics_eui").val("");
            $(this).parent().parent().find(".basics_eui").blur(function () {
                if($(this).find(".basics_eui").val() == "") {
                    $(this).find(".sele_p").removeClass('sele_current');
                }
            })
        } else {
            $(this).addClass('sele_current');
            $(this).parent().parent().find(".basics_eui").focus();
        }
        e.stopPropagation();
    })
}

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