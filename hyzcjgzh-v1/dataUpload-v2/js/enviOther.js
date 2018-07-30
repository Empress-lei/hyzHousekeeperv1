$(function () {
    $(".enviaddBtn").on("click", function () {
        var txtTitle = $(".chara_name").val();
        var contText = $(".add_txt").val();
        if(txtTitle == "" || txtTitle == undefined) {
            $(".other_p").hide();
        }if(contText == "" || contText == undefined) {
            $(".other_content").hide();
        }else {
            var li_ = $("<li class='other_list sele_cur'>").appendTo($(".other_ul"));
            $("<p class='charac_p'>" + txtTitle + "</p>").appendTo(li_);
            $("<p class='charac_content'>" + contText + "</p>").appendTo(li_);
        }

        $(".chara_name").val("");
        $(".add_txt").val("");
    })
})