
$(function(){
    //有用
    $(".useable").click(function(){
        $(".useable span").addClass("oraSpan")
        $(".useable p").addClass("useableOra")
        $(".useable").find("i").show().animate({"top":"-15px"},400,function(){
            $(".useable i").fadeOut();
        })
    });
})



