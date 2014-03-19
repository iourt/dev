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


	$(window).on("scroll", function(){
		console.log($(window).scrollTop());

		var a = $(window).height(),
			b = $("body").height(),
			c = $(".footer").height(),
			d = $(window).scrollTop(),
			e = b - a -d;

			console.log("window "+$(window).height());
			console.log("body "+$("body").height());
			console.log("footer "+$(".footer").height());
			console.log("scrollTop "+$(window).scrollTop());
			console.log("b-a-d "+(b-a-d));

		if(e<=c){
			var d = $(window).scrollTop() - $("body").height() - $(".footer").height() - $(window).height();
			$(".fixed").css("bottom", (10+c-e)+"px");
		}else{
			$(".fixed").css("bottom", "10px");
		}
	});


	console.log($("body").height());

	console.log();

	console.log($(window).height());
	// alert($(".footer").offset().top);
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
		init: function(params){
			var self = this,
				params = params || {},
				num    = params.elem+" li",
				$elem  = $(params.elem),
				type   = params.type || 1;

			self.moveY   = 0;
			self.$distY  = params.distY;
			self.$num    = $(num).length;
			self.$move   = $elem.children("ul");

			var $html   = self.$move.html();

			if(type==1){
				$elem.addClass("ScrollUp");
			}
			self.$move.append($html);

			self.loop();
		},
		loop: function(){
			var self = this;
			self.$move.css("top", -self.moveY+"px");
			self.moveY++;
			self.setTime();
		},
		setTime: function(){
			var self = this;
			setTimeout(function(){
				if((self.moveY!=0) && (self.moveY%self.$distY==0)){
					if(self.moveY == self.$num * self.$distY){
						self.$move.css("top", "0");
						self.moveY = 0;
					}
					setTimeout(function(){
						self.loop();
					}, 2000);
				}else{
					self.loop();
				}
			}, 50);
		}
	};

	window.ScrollText = ScrollText;
})(window);

new ScrollText().init({
	elem: ".header_msg div",
	distY: 35,
	type: 1
});

new ScrollText().init({
	elem: ".home_msg",
	distY: 35,
	type: 1
});