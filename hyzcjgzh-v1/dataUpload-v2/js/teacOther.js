$(function () {
    $(".addBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        var contText = $(".add_txt").val();
        if(txtTitle == "" || txtTitle == undefined) {
            $(".other_p").hide();
        }if(contText == "" || contText == undefined) {
            $(".other_content").hide();
        }else {
            var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
            $("<p class='charac_p'>" + txtTitle + "</p>").appendTo(li_);
            $("<p class='charac_content'>" + contText + "</p>").appendTo(li_);
        }

        $(".chara_name").val("");
        $(".add_txt").val("");
    })
})

//多选
function selectClass(ele) {
    var ele = $(ele);
    ele.unbind('click');
    ele.on("click", function (e) {
        if ($(this).find(".sele_p").hasClass('sele_current')) {
            $(this).find(".sele_p").removeClass('sele_current');
            $(this).find(".basics_eui").blur();
            $(this).find(".basics_eui").val("");
            $(this).find(".basics_eui").blur(function () {
                if($(this).find(".basics_eui").val() == "") {
                    $(this).find(".sele_p").removeClass('sele_current');
                }
            })
        } else {
            $(this).find(".sele_p").addClass('sele_current');
            $(this).find(".basics_eui").focus();
        }
        e.stopPropagation();
    })
}