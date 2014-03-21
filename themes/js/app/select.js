(function(){
    var $li     = $(".select_li_detail li"),
        $no     = $(".select_li .select_li_no");

    var $titleNull = $(".select_title .null"),
        $titleList = $(".select_title ul"),
        $titleDel  = $(".select_title .hit"),
        $titleName = $("#titleName li"),
        $titleNo   = $(".select_li .select_li_no_name");

	$li.live("click", function () {
		$(this).toggle(function(){
			$(this).parent().parent().parent().children(".select_li_no").removeClass("current");
			$(this).addClass("current");
		}, function(){
			$(this).removeClass("current");
		})
	    $(this).trigger('click');
	});

    $no.on("click", function(){
        $(this).parent().children().children().children().removeClass("current");
        $(this).addClass("current");
        $li.unbind();
    });

	$titleName.live("click", function () {
		$(this).toggle(function(){
			var dataText = $(this).html(),
				dataId   = $(this).attr("data-id");
			$titleList.append('<li class="hit" data-id="'+dataId+'"">'+dataText+'</li>');
			$titleNo.removeClass("current");
			$(this).addClass("current");
			$titleNull.css("display","none");
		}, function(){
			var dataId = $(this).attr("data-id");
			$('.select_title .hit[data-id='+dataId+']').remove();
			var $hit = $(".select_title .hit");
			if($hit.length == 0){
				$titleNull.css("display","block");
			}
			$(this).removeClass("current");
		});
	    $(this).trigger('click');
	});

    $titleNo.on("click", function(){
    	$(".select_title .hit").remove();
        $(this).parent().children().children().children().removeClass("current");
        $(this).addClass("current");
		$titleNull.css("display","block");
		$titleName.unbind();
    });

	$titleDel.live("click", function(){
		$(this).remove();
		var $hit = $(".select_title .hit");
		if($hit.length == 0){
			$titleNull.css("display","block");
		}
		var $id = $(this).attr("data-id");
		$('#titleName li[data-id='+$id+']').removeClass("current");
		$('#titleName li[data-id='+$id+']').unbind();
	});

	var $num    = $titleName.length,
		$divide = 11,
		$over   = $(".select_li_name"),
		$show   = $("#titleName .more");
	if($num >= $divide){
		$titleName.eq($divide).after('<div class="line"></div>');
	}
	$show.toggle(function(){
		$("#titleName .line").remove();
		$over.removeClass("over");
		$(this).html("收起");
		$(this).addClass("hide");
	}, function(){
		$titleName.eq($divide).after('<div class="line"></div>');
		$over.addClass("over");
		$(this).removeClass("hide");
		$(this).html("更多");
	});
})();



// (function(){
//     var $box      = $("#titleName ul"),
//         $boxLi    = $("#titleName li"),
//         $num      = $boxLi.length,
//     	$data = {
//     		dataId: [],
//     		dataHtml: []
//     	},
//         $show     = $("#titleName .more"),
//         $hide     = $("#titleName .hide"),
//         $str      = "";

//     $boxLi.each(function(i){
//         $data.dataId[i] = $(this).attr("data-id");
//         $data.dataHtml[i] = $(this).html();
//     });
//     if($num>12){
//         for(var i=0; i<12; i++){
//             $str += '<li data-id="'+$data.dataId[i]+'">'+$data.dataHtml[i]+'</li>';
//         }
//         $box.html($str);
//         $str = "";
//     }

//     $show.on("click", function(){
//     	var $current = $("#titleName li.current"),
//     		$currentId = [];
//     	$current.each(function(i){
//     		$currentId[i] = $(this).attr("data-id");
//     	});

//         $(this).css("display","none");
//         $hide.css("display","block");
//         for(var i=0; i<$num; i++){
//         	$str += '<li ';
//         	$currentId.each(function(index){
//         		if($currentId[index] == $data.dataId[i]){
//         			$str +='class="current" '
//         		}
//         	});
//             $str += 'data-id="'+$data.dataId[i]+'">'+$data.dataHtml[i]+'</li>';
//         }
//         $box.html($str);
//         $str = "";
//     });

//     $hide.on("click", function(){
//         $(this).css("display","none");
//         $show.css("display","block");
//         for(var i=0; i<12; i++){
//             $str += '<li data-id="'+$data.dataId[i]+'">'+$data.dataHtml[i]+'</li>';
//         }
//         $box.html($str);
//         $str = "";
//     });

// })();