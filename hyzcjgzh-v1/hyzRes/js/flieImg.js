function imgChange(obj1, obj2, obj3) {
    //获取点击的文本框
    var file = document.getElementById(obj3);
    //存放图片的父级元素
    var imgContainer = document.getElementsByClassName(obj1)[0];
    //获取的图片文件
    var fileList = file.files;
    //文本框的父级元素
    var input = document.getElementsByClassName(obj2)[0];
    var closeSrc = "../..//hyzRes/images/hyzicon/close_icon.png"
    var imgArr = [];
    //遍历获取到得图片文件
    for (var i = 0; i < fileList.length; i++) {
        var imgUrl = window.URL.createObjectURL(file.files[i]);
        imgArr.push(imgUrl);
        var img = document.createElement("img");
        img.setAttribute("src", imgArr[i]);
        img.setAttribute("class", "img_list");
        // /创建最外面的div
        var imgPar = document.createElement("div");
        // console.log(imgPar)
        imgPar.setAttribute("class", "addimg_par");
        //创建下层div
        var imgAdd = document.createElement("div");
        // console.log(imgAdd)
        imgAdd.setAttribute("class", "z_addImg");
        //创建关闭按钮
        var imgSrc = document.createElement("img");

        imgSrc.setAttribute("class", "close_icon");
        imgSrc.setAttribute("src", closeSrc);
        //下层div 放入 上层div上
        imgPar.appendChild(imgAdd);
        //吧img放入下层div
        imgAdd.appendChild(img);
        //关闭按钮放入 上层div上
        imgPar.appendChild(imgSrc);
        imgContainer.appendChild(imgPar);
        // initMyImgShow();
        $(document).ready(function () {
            /*调起大图 S*/
            var mySwiper = new Swiper('.swiper-container2', {
                loop: false,
                pagination: '.swiper-pagination2',
            })
            $(".z_photo_div .addimg_par").on("click",
                function () {
                    console.log(this)
                    var imgBox = $(this).parent().parent().find(".img_list");
                    console.log(imgBox.length)
                    var i = $(this).index();
                    console.log(i)
                    $(".big_img .swiper-wrapper").html("")
                    for (var j = 0, c = imgBox.length; j < c; j++) {
                        $(".big_img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("src") + '" / ></div></div>');
                    }
                    mySwiper.updateSlidesSize();
                    mySwiper.updatePagination();
                    $(".big_img").css({
                        "z-index": 1001,
                        "opacity": "1"
                    });
                    mySwiper.slideTo(i, 0, false);
                    return false;
                });

            $(".big_img").on("click",
                function () {
                    $(this).css({
                        "z-index": "-1",
                        "opacity": "0"
                    });

                });
        });
        $(".close_icon").on("click",function(){
            removeImg(this);
        })

    };
};

function removeImg(ele) {
    var ele = $(ele)
    ele.parent().remove();
}