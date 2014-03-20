<div class="show_page clearfix">
	<a class="prev" >上一页</a>
	<a >1</a>
	<a >2</a>
	<a >3</a>
	<a >4</a>
	<a >5</a>
	<span>...</span>
	<a class="next">下一页</a>
	<span>共6页</span>
	<span class="input">去第<input type="text" value="2" /></span>
	<span class="move">
		&nbsp;
		<span class="btn">确定</span>
		<span class="end">页</span>
	</span>
</div>
<script type="text/javascript">
(function(){
	var $input = $(".show_page input"),
		$end   = $(".show_page .end"),
		$btn   = $(".show_page .btn");
	$input.focus(function(){
		$btn.animate({
			left: "0"
		}, 700);
		$end.animate({
			left: "60"
		}, 700);
	});

	var $prev = $(".show_page .prev"),
		$link = $(".show_page a");
	$link.on("click", function(){
		var index = $(this).index();
		$link.removeClass("current");
		$(this).addClass("current");
		if(index>=2){
			$prev.css("visibility","visible");	
		}else{
			$prev.css("visibility","hidden");
		}
	});
})();
</script>
