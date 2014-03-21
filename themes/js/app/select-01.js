(function(){
	var $hotOne     = $(".select_case_a li"),
		$hotTwo     = $(".select_case_b li"),
		$hotThree   = $(".select_case_c li"),
		$titleNo   = $(".select_01 no_title"),
        $titleDel  = $(".select_title .hit"),
		$titleNull = $(".select_title .null"),
		$titleList = $(".select_title ul");

	$(".select_detail li").hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});

	$hotOne.live("click", function(){
		$(this).toggle(function(){
			$(this).addClass("current");
		}, function(){
			$(this).removeClass("current");
		});
	    $(this).trigger('click');
	});

	$hotTwo.live("click", function(){
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


	$titleDel.live("click", function(){
		$(this).remove();
		var $hit = $(".select_title .hit");
		if($hit.length == 0){
			$titleNull.css("display","block");
			$titleNo.addClass("current");
		}
		var $id = $(this).attr("data-id");
		$('.select_case_b li[data-id='+$id+']').removeClass("current");
		$('.select_case_b li[data-id='+$id+']').unbind();
	});


	$hotThree.live("click", function(){
		$(this).toggle(function(){
			$(this).addClass("current");
		}, function(){
			$(this).removeClass("current");
		});
	    $(this).trigger('click');
	});

	$(".select_no").on("click", function(){
		var $a = $(this).parent().children().children().children("li");
		$a.removeClass("current");
		$a.unbind();
	});

})();