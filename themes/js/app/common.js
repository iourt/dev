// 浮动的侧边按钮
(function(){
	refix();
	window.addEventListener("resize", function(){
		refix();
	}, false);
	function refix(){
		var $width = $("body").width(),
			$fixed = $(".fixed");
		if($width<1100){
			$fixed.css("right","10px");
		}else{
			$fixed.css("right",(($width-990)/2-42-10)+"px");
		}
	}
})();

// 子菜单显示
(function(){
	var $subMenu = $(".header_logo_div li");
	$subMenu.hover(function(){
		$(this).css("position","relative");
		$(this).addClass("hover");
		$(this).children(".sub_menu").css("display","block");
	},function(){
		$(this).css("position","relative");
		$(this).removeClass("hover");
		$(this).children(".sub_menu").css("display","none");
	});

	$subMenu.on("click", function(){
		$(this).css("position","relative");
		$(this).addClass("hover");
		$(this).children(".sub_menu").css("display","block");
	});
})();

// 滚动字幕
(function(window){
	var ScrollText = function(){};

	ScrollText.prototype = {
		init: function(parames){
			var self = this,
				parames = parames || {};

			self.$elem = $(parames.elem);
			self.$type = $(parames.type);

			var len = self.$elem.children("li").length;
			self.$elem.append(self.$elem.html());

			// setInterval(function(){
				self.$elem.animate({
					top: "-35px"
				}, 1000);
			// }, 1000);
		}
	};

	window.ScrollText = ScrollText;
})(window);

new ScrollText().init({
	elem: ".header_msg ul",
	type: "1"
})