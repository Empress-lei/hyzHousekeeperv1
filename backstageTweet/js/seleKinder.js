//点击查看全部
$(function () {
    //点击查看全部
    $(".look_all").click(function () {
        $(".kinder_lay").show()
    })
    $(".kinder_lay .kinder_close").click(function () {
        $(".kinder_lay").hide()
    })

    $(".next_button").click(function () {
        $(".submess_lay").show()
    })
    //提交蒙城上的关闭按钮
    $(".submess_lay .kinder_close").click(function () {
        $(".submess_lay").hide()
    })
})
$(function () {
    var swiperHourLeft = new Swiper('#dateHourLeft',{
        direction: 'vertical',
        slidesPerview:'auto',
        loopAdditionalSlides : 1,
        height: 60,
        autoplayDisableOnInteraction: false,
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd:function(swiper){
            var houerTime = $("#dateHourLeft .swiper-slide-active").text();
            $(".startTimeCurrent .show-houer").text(houerTime)
        }
    });
    // 左边的分钟
    var swiperMinuteLeft = new Swiper('#dateMinuteLeft',{
        direction: 'vertical',
        slidesPerview:'auto',
        loopAdditionalSlides : 1,
        autoplayDisableOnInteraction: false,
        // initialSlide :firstMins,
        height: 60,
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd:function(){
            var minuteTime = $("#dateMinuteLeft .swiper-slide-active").text();
            $(".startTimeCurrent .show-minute").text(minuteTime)
        }
    });

    var mySchedule = new Schedule({
        el: '#schedule-box',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = '日期：' + y + '年' + m + '月' + d + "日"
            $(".month span").text(m + "月")
        },
        nextMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = '日期：' + y + '年' + m + '月' + d + "日"
            $(".month span").text(m + "月")
        },
        nextYeayCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = '日期：' + y + '年' + m + '月' + d + "日"
            $(".month span").text(m + "月")
        },
        prevMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = '日期：' + y + '年' + m + '月' + d + "日"
            $(".month span").text(m + "月")
        },
        prevYearCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = '日期：' + y + '年' + m + '月' + d + "日"
            $(".month span").text(m + "月")
        }
    });

    $(".close_icon").on("click", function () {
        removeImg(this);
    })
})

function removeImg(ele) {
    var ele = $(ele)
    ele.parent().remove();
}