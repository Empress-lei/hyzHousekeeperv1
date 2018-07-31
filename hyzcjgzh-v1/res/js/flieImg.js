function imgChange(obj1, obj2, obj3) {
    //获取点击的文本框
    var file = document.getElementById(obj3);
    //存放图片的父级元素
    var imgContainer = document.getElementsByClassName(obj1)[0];
    //获取的图片文件
    var fileList = file.files;
    //文本框的父级元素
    var input = document.getElementsByClassName(obj2)[0];
    var closeSrc = "../..//res/images/hyzicon/close_icon.png"
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
        input.before(imgPar);
        // imgContainer.appendChild(imgPar);
        // initMyImgShow();
        $(".close_icon").on("click", function () {
            removeImg(this);
        })
    }
    // imagesPre();
    initMyImgShow()
};

//pass
function imagesPre() {
    $(".z_photo .addimg_par .z_addImg").click(function (e) {
        var imgBox = $(this).parent().parent().find("img");
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
        // console.log('mySwiper.slides.length:'+mySwiper.slides.length);
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

function removeImg(ele) {
    var ele = $(ele)
    ele.parent().remove();
}



//pass
// function imginfo(){
//     var imglis = [];
//     var imgObj = $(".z_addImg img");//img对象
//     for(var i=0; i<imgObj.length; i++){
//         imglis.push(imgObj.eq(i).attr('src'))
//         console.log(imgObj.eq(i).attr('src'))
//         imgObj.eq(i).click(function(){
//             var Imgurl = $(this).attr('src');
//             console.log(Imgurl)
//             WeixinJSBridge  .invoke("imagePreview",{
//                 "urls":imglis,
//                 "current":Imgurl
//             });
//         });
//     }
//
// }