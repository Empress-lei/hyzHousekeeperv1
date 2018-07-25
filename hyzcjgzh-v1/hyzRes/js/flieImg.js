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
        $(".close_icon").on("click", function () {
            removeImg(this);
        })
    }
    // imagesPre();
    imginfo();
};


function imginfo(){
    var imglis = [];
    var imgObj = $(".z_addImg img");//img对象
    for(var i=0; i<imgObj.length; i++){
        imglis.push(imgObj.eq(i).attr('src'))
        console.log(imgObj.eq(i).attr('src'))
        imgObj.eq(i).click(function(){
            var Imgurl = $(this).attr('src');
            console.log(Imgurl)
            WeixinJSBridge  .invoke("imagePreview",{
                "urls":imglis,
                "current":Imgurl
            });
        });
    }

}
function imagesPre() {
    /*调起大图 S*/
    var mySwiper = new Swiper('.swiper-container2', {
        loop: false,
        pagination: '.swiper-pagination2',
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        onSlideChangeEnd:function () {
            console.log(mySwiper.activeIndex);
        },
        preventLinksPropagation : false, //拖动时阻止click事件
        slidesPerView: 1, //容器同时显示slides的数量
        paginationClickable: true, //分页指示点可切换图片
        observer: true, //图片删除修改时，自动初始化swiper
        speed: 500,
    })
    $(".z_photo_div .addimg_par").click(function (e) {
        var imgBox = $(this).parent().find(".img_list");
        console.log(imgBox)
        console.log(imgBox.length)
        var i = $(this).index();
        console.log(i)
        $(".big_img .swiper-wrapper").html("");
        for (var j = 0, c = imgBox.length; j < c; j++) {
            $(".big_img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("src") + '" / ></div></div>');
        }
        //重新计算Slides的数量
        mySwiper.updateSlidesSize();
        //动态更新分页器
        mySwiper.updatePagination();
        $(".big_img").css({
            "z-index": 1001,
            "opacity": "1"
        });
        mySwiper.slideTo(i, 0, false);
        e.stopPropagation();
        return false;
    });
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
        //重新计算Slides的数量
        mySwiper.updateSlidesSize();
        //动态更新分页器
        mySwiper.updatePagination();
        $(".big_img").css({
            "z-index": 1001,
            "opacity": "1"
        });
        mySwiper.slideTo(i, 0, false);
        e.stopPropagation();
        return false;
    });
    $(".big_img").on("click",
        function () {
            $(this).css({
                "z-index": "-1",
                "opacity": "0"
            });
            $(".big_img .swiper-wrapper").html("");
        });
}

function removeImg(ele) {
    var ele = $(ele)
    ele.parent().remove();
}