window.onload=function(){
	//initMyImgShow();
}

function closeMyImg(){
	$(".popup").remove();
}
function removeMyImg(){
	$(".popup").remove();
}

function initMyImgShow(){
	$('.z_addImg').unbind("click").bind('click', function(e) {
        // var bg = "";
        // // bg += '<div id="popup" class="popup" onclick="closeMyImg(this)">';
        // // bg += '<div class="bg"><img  src="'+myImg.src+'" alt="" /></div>';
        // // bg += '</div>';
        // // var str = "";
        // bg += '<div class="big_img">'
        // bg += '<div class="swiper-container2">'
        // bg += '<div class="swiper-wrapper">'
        // bg += '</div>'
        // bg += '</div>'
        // bg += '<div class="swiper-pagination2">'
        // bg += '</div>'
        // bg += '</div>'
        // // return str;
        // //$(this).parent().after(bg);
        // $("body").append(bg);
		var isbig = $(this).data("big")+"";
		if("false" == isbig){
			return ;
		}

        var imgBox = $(this).parent().parent().find("img");
        console.log(imgBox)
        console.log(imgBox.length)
        var i = $(this).index();
        console.log(i)
		var myImg = new Image;
		// myImg.src = $(this).attr("src");
        $(".big_img .swiper-wrapper").html("");
        for (var j = 0, c = imgBox.length; j < c; j++) {
            $(".big_img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("src") + '" / ></div></div>');
        }
        $(".big_img").css({
            "z-index": 1001,
            "opacity": "1"
        });
        mySwiper.update();
        // console.log('mySwiper.slides.length:'+mySwiper.slides.length);
        mySwiper.slideTo(i, 0, false);
        e.stopPropagation();
		
		
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

