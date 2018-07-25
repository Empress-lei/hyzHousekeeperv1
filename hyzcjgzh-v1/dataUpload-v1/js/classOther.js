$(function () {
    $(".addBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        console.log(txtTitle)
        var imgUrl = $(".photo_flie10 .z_addImg img").attr("src");
        console.log(imgUrl)
        if(txtTitle == "" & imgUrl == undefined) {
            return;
        }
        // var srcClose = "";
        var imgArr = $(".photo_flie10 .addimg_par .img_list");
        var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
        $("<p class='charac_p current_list'>" + txtTitle + "</p>").appendTo(li_);
        var ol_ = $("<ol class='img_ol clearfix'>").appendTo(li_);
        imgArr.each(function(){
            var li_z_ = $("<li class='img_li'>").appendTo(ol_)
            var div_ = $("<div class='z_addImg'>").appendTo(li_z_)
            $("<img class='img_list' src='" + $(this).attr('src') + "' />").appendTo(div_);
            $("<img class=\"close_icon\" src='../../hyzRes/images/hyzicon/close_icon.png' />").appendTo(li_z_);
        });
        $(".close_icon").on("click",function(){
            removeImg(this);
        })
        selectOpt(".other_ul li .charac_p");
        addImagesPre();
        if($(".other_p").text() == "" || $(".other_p").text() == undefined) {
            $(".other_p").hide();
        }
        selectOpt(".other_ul li .charac_p")
        $(".chara_name").val("");
        $(".input_content .addimg_par").remove();
    })
    selectOpt(".characteristic li .charac_p");
    addImagesPre();
})
/*调起大图 S*/
function addImagesPre() {
    $(".img_ol .img_li").click(function (e) {
        var imgBox = $(this).parent().find(".img_list");
        console.log(imgBox)
        console.log(imgBox.length)
        var i = $(this).index();
        console.log(i)
        $(".big_img .swiper-wrapper").html("");
        for (var j = 0, c = imgBox.length; j < c; j++) {
            $(".big_img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("src") + '" / ></div></div>');
        }
        $(".big_img").css({
            "z-index": 1001,
            "opacity": "1"
        });
        mySwiper.update();
        mySwiper.slideTo(i, 0, false);
        e.stopPropagation();
        return false;
    });
    $(".big_img").on("click",
        function (e) {
            $(this).css({
                "z-index": "-1",
                "opacity": "0"
            });
            $(".big_img .swiper-wrapper").html("");
            e.stopPropagation();
        });
}
//多选
function selectOpt(ele) {
    var ele = $(ele);
    // if("true" == ele.data("click")){
    //     return;
    // }
    ele.unbind('click');
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
    // ele.data("click","true");
}

function removeImg(ele) {
    var ele = $(ele)
    ele.parent().remove();
}