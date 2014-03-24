// iPad
var isPad = function(){
	var ua = navigator.userAgent.toLowerCase(),
		o  = ua.match(/iPad/i),
		type = false;
	if(o=="ipad"){
		type = true;
	}
	return type;
};

// 浮动的侧边按钮
(function(){
	refix();
	window.addEventListener("resize", function(){
		refix();
	}, false);
	function refix(){
		var $width = $("body").width(),
			$fixed = $(".fixed");
		if($width<1110){
			$fixed.css("right","10px");
		}else{
			$fixed.css("right",(($width-990)/2-42-20)+"px");
		}
	}

	var $btn      = $(".fixed_email"),
		$btnClose = $(".fixed .mod_box_close"),
		$show     = $(".fixed .mod_box");

	$btnClose.on("click", function(){
		$btn.removeClass("current");
		$show.css("display","none");
		$btn.unbind();
	})
	$btn.live("click", function(){
		$(this).toggle(function(){
			$show.css("display","block");
			$(this).addClass("current");
		}, function(){
			$show.css("display","none");
			$(this).removeClass("current");
		});
		$(this).trigger("click");
	})
	
	$(window).on("scroll", function(){
		var a = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
			b = $("body").height(),
			c = $(".footer").height(),
			d = $(window).scrollTop(),
			e = b - a -d;
		if(e<=c){
			var d = $(window).scrollTop() - $("body").height() - $(".footer").height() - $(window).height();
			$(".fixed").css("bottom", (10+c-e)+"px");
		}else{
			$(".fixed").css("bottom", "10px");
		}
	});
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


// 带关闭的浮动框
(function(){
	var $listDetails      = $(".list_detail .list_detail_hit"),
		$listDetailsBox   = $(".list_detail .mod_box"),
		$listDetailsClose = $(".list_detail .mod_box_close");

	// document.onclick = function(event){
	// 	var e = e || window.event,
	// 		tar = e.srcElement || e.target;
	// 	if(tar.className != "list_detail_hit hover"){
	// 		$(".mod_box").css("display","none");
	// 		$(".list_detail").removeClass("hover");
	// 	}
	// };

	$listDetailsClose.hover(function(){
		$(this).addClass("hover_close");
	}, function(){
		$(this).removeClass("hover_close");
	});
	$listDetailsClose.on("click", function(){
		$(this).parent().css("display","none");
		// $(".home_list_table .w_5").removeClass("hover");
		$listDetails.css("position","static");
	});
	
	$listDetails.hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	$listDetails.on("click", function(){
		$listDetailsBox.css("display","none");
		$(this).parent().css("position","relative");
		$(this).parent().addClass("hover");
		$(this).parent().children(".mod_box").css("display","block");
	});
})();


// hover浮动框
(function(){
	var $boxDetails = $(".box_detail");
	if(isPad()){
		$boxDetails.on("click", function(){
			$boxDetails.children(".mod_box").css("display","none");
			$(this).css("position","relative");
			$(this).children(".mod_box").css("display","block");
		});
	}else{
		$boxDetails.hover(function(){
			$(this).css("position","relative");
			$(this).children(".mod_box").css("display","block");
		}, function(){
			$(this).css("position","relative");
			$(this).children(".mod_box").css("display","none");
		});
	}
})();


// 平台档案侧边MENU
(function(){
	var $menu     = $(".mod_intro_left"),
		$menuDist = $menu.offset().top;
	$(window).on("scroll", function(){
		var $menuTop  = $(window).scrollTop();

		if($menuDist <= $menuTop){
			$menu.addClass("set");
		}else{
			$menu.removeClass("set");
		}
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

			if(!$elem) return;

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

new ScrollText().init({
	elem: ".list_art_02 dd",
	distY: 30,
	type: 1
});