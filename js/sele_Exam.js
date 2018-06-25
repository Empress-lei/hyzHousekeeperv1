$(function () {
    //园所性质选择
    $(".render_nature").click(function () {
        $(".gar_nature").show();
    })
    selectOpt(".record_ul li")
    $(".gar_nature .sureBut").click(function () {
        var curVal = $(".current_list p").text();

        console.log(curVal)
        var curTrim = $.trim(curVal);
        renStrs = curTrim.split("+");
        // var sum = 0;
        // $(curVal).each(function() {
        //     sum += parseInt($(this).text());
        //     return sum;
        // });
        // console.log(sum)
        $(".render_nature").val(renStrs);
        $(".gar_nature").hide();
    })
    //教学示例
    $(".idea_teach").click(function () {
        $(".teach_idea").show();
    })
    $(".idea_close").click(function () {
        $(".teach_idea").hide();
    })
    // 培养目标

    $(".target_btn").click(function () {
        $(".training_target").show();
    })
    $(".target_close").click(function () {
        $(".training_target").hide();
    })

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
        } else {
            $(this).addClass('current_list');
        }
    })
    ele.data("click","true");
}
/**
 * 设置默认值  选择地址
 */
!function () {
    var $target = $('#J_Address2');
    $target.on('click', function (event) {
        event.stopPropagation();
        $target.citySelect('open');
    });
    $target.on('done.ydui.cityselect', function (ret) {
        $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
    });
}();
//选择年月
$(function () {
    var currYear = (new Date()).getFullYear();
    var opt={};
    opt.date = {preset : 'date'};
    //opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
    opt.datetime = {preset : 'datetime'};
    opt.time = {preset : 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        lang:'zh',
        dateOrder:"yymm",
        dateFormat: "yyyy-mm",
        startYear:currYear - 30, //开始年份
        endYear:currYear + 10 //结束年份
    };
    $("#appDate").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));
    var optDateTime = $.extend(opt['datetime'], opt['default']);
    console.log(optDateTime)
    var optTime = $.extend(opt['time'], opt['default']);
    console.log(optTime)
    $("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
    $("#appTime").mobiscroll(optTime).time(optTime);

});

optab(".sample_menu dl");
$(".sample_menu dl").eq(0).children("dt").trigger("click");
function optab(item){
    var dtc=$(item).children("dt");
    dtc.on("click",function(){
        $(this).removeClass("active_side");
        $(this).parent().siblings("dl").find("dd").hide();
        $(this).siblings("dd").show();
        $(this).addClass("active_side").parent().siblings("dl").find("dt").removeClass("active_side");
    })

}
