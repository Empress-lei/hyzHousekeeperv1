$(function () {
    //搜索页
    $(".cancelImgDiv2").click(function(){
        $(".keywordsear").val("");
        $(".keyword1").val("");
        $(".cancleBtn").show();
        $(".submitShow").hide();
        $(".cancelImgDiv2").hide();
    });
    //点击搜索框上面的搜索两个字
    $(".submitShow").click(function() {
        $(".searchList").hide();
        $(".openSearchResult").show();
    });
    //搜索页点击留言记录每一项的X号
    $(".clearImg").click(function() {
        $(this).parent().hide();
    });
    //点击全部清空，将搜索记录全部清空
    $(".clearAll").click(function() {
        $(".listClear").parent().parent().hide();
    });
    //点击更多内容
    $(".moreCont").click(function() {
        $(".openSearchResult").hide();
        $(".leftArrow").show();
        $(".moreClassList").fadeIn();
        $(".searchTxt").css("width","80%");
    });
})


function fn2(){
    var len = $(".keywordsear").val().length;
    var len1 = $(".keywordsear").val();
    if(len){
        $(".cancleBtn").hide();
        $(".submitShow").show();
        $(".cancelImgDiv2").show();
        $(".keyword1").val(len1);
    }else{
        $(".cancleBtn").show();
        $(".submitShow").hide();
    }
}