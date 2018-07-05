$(function () {
    $(".addBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        var imgUrl = $(".photo_flie10 .z_addImg img").attr("src");
        var imgArr = $(".photo_flie10 .addimg_par .img_list");
        var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
        $("<p class='charac_p current_list'>" + txtTitle + "</p>").appendTo(li_);
        var ol_ = $("<ol class='img_ol clearfix'>").appendTo(li_);
        imgArr.each(function(){
            var li_z_ = $("<li class='img_li z_addImg'>").appendTo(ol_)
            $("<img src='" + $(this).attr('src') + "' />").appendTo(li_z_);
        });
        selectOpt(".other_ul li .charac_p")
        if($(".other_p").text() == "" || $(".other_p").text() == undefined) {
            $(".other_p").hide();
        }
        selectOpt(".other_ul li .charac_p")
        initMyImgShow();
        $(".chara_name").val("");
        $(".input_content .addimg_par").remove();
    })
    selectOpt(".characteristic li .charac_p")
    initMyImgShow();
})

//多选
function selectOpt(ele) {
    var ele = $(ele);
    if("true" == ele.data("click")){
        return;
    }
    ele.on("click", function () {
        if ($(this).hasClass('current_list')) {
            $(this).removeClass('current_list');
            $(this).parent().removeClass('sele_cur');
            $(this).parent().find(".num_list").hide();
        } else {
            $(this).addClass('current_list');
            $(this).parent().addClass('sele_cur');
            $(this).parent().find(".num_list").show();
        }
    })
    ele.data("click","true");
}