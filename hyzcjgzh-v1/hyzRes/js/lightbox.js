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
	$('.z_addImg img').unbind("click").bind('click', function(event) {
		var isbig = $(this).data("big")+"";
		if("false" == isbig){
			return ;
		}
		var myImg = new Image;
		myImg.src = $(this).attr("src");

		var bg = "";
		bg += '<div id="popup" class="popup" onclick="closeMyImg(this)">';
		bg += '<div class="bg"><img  src="'+myImg.src+'" alt="" /></div>';
		bg += '</div>';
		//$(this).parent().after(bg);
		$("body").append(bg);


	  });
}

