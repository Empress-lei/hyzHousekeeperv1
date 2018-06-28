
$(function(){
    //有用
    $(".useable").click(function(){
        $(".useable span").addClass("oraSpan")
        $(".useable p").addClass("useableOra")
        $(".useable").find("i").show().animate({"top":"-15px"},400,function(){
            $(".useable i").fadeOut();
        })
    });
    //分享
    $(".unuseable").click(function () {
        $(".share_layer").show();
    })
    //点击分享朦层上面的取消按钮
    $(".share_layer .cancelshare").click(function () {
        $(".share_layer").hide();

    })
})



