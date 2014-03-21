// 网贷项目理财子弹框
(function(){
	var $listDetails = $(".list_detail"),
		$btnClose    = $(".list_detail_close"),
		$boxDetails  = $(".box_detail"),
		$boxShow     = $(".box_detail_show");

	var ua = navigator.userAgent.toLowerCase(),
		o  = ua.match(/iPad/i);
	if(o=="ipad"){
		$boxDetails.on("click", function(){
			$(this).css("position","relative");
			$(this).children(".box_detail_show").css("display","block");
		});
		$boxShow.on("click", function(){
			$(this).css("display","none");
			$(this).parent().css("position","static");
		});
	}else{
		$boxDetails.hover(function(){
			$(this).css("position","relative");
			$(this).children(".box_detail_show").css("display","block");
		}, function(){
			$(this).css("position","static");
			$(this).children(".box_detail_show").css("display","none");
		});
	}

	// window.onclick = function(event){
	// 	var e = e || window.event,
	// 		tar = e.srcElement || e.target;
	// 	if(tar.className != "list_detail"){
	// 		$(".list_detail_float").css("display","none");
	// 		// $(".home_list_table .w_5").removeClass("hover");
	// 	}
	// };

	$btnClose.hover(function(){
		$(this).addClass("hover_close");
	}, function(){
		$(this).removeClass("hover_close");
	});
	$btnClose.on("click", function(){
		$(this).parent().css("display","none");
		$(".home_list_table .w_5").removeClass("hover");
		$listDetails.css("position","static");
	});
	
	$listDetails.hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	$listDetails.on("click", function(){
		$(".list_detail_float").css("display","none");
		$(this).parent().css("position","relative");
		// $(this).parent().addClass("hover");
		$(this).parent().children(".list_detail_float").css("display","block");
	});
})();


// 银行理财列表
(function(){
	$(".money_list li").eq(3).css("border-right","none");

	var $info = $(".hidden_text samp");
	$info.hover(function(){
		$(this).addClass("hover");
		$(this).children(".hidden_text_detail").css("display","block");
	}, function(){
		$(this).removeClass("hover");
		$(this).children(".hidden_text_detail").css("display","none");
	});
})();


// 点击滚动
(function(){
	var $listSort = $(".home_list_slide li"),
		len = $listSort.length;
	$listSort.eq(0).addClass("top1");
	$listSort.eq(1).addClass("top2");
	$listSort.eq(2).addClass("top3");

	var $listSlide = $(".home_list_slide"),
		$listMove  = $(".home_list_slide ul"),
		$btnLeft   = $(".home_list_slide .move_left"),
		$btnRight  = $(".home_list_slide .move_right");

	var clickCount = 0;

	// if(clickCount===0){
	// 	$btnRight.addClass("no");
	// }
	// if(len<=4){
	// 	$btnLeft.addClass("no");
	// 	$btnRight.addClass("no");
	// }
	$btnLeft.hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});
	$btnRight.hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});

	$listSlide.hover(function(){
		$btnLeft.css("display","block");
		$btnRight.css("display","block");
	}, function(){
		$btnLeft.css("display","none");
		$btnRight.css("display","none");
	});

	$btnLeft.on("click", function(){
		if(clickCount>(len-5)){
			// $(this).addClass("no");
			return;
		}
		// if(clickCount>(len-6)){
		// 	$(this).addClass("no");
		// }
		clickCount++;
		// if(clickCount>0){
		// 	$btnRight.removeClass("no");
		// }
		$listMove.animate({
			left: "-"+clickCount*248+"px"
		}, 600);
	});

	$btnRight.on("click", function(){
		if(clickCount===0){
			return;
		}
		// if(clickCount<=(len-4)){
		// 	$btnLeft.removeClass("no");
		// }
		// if(clickCount===1){
		// 	$(this).addClass("no");
		// }
		clickCount--;
		$listMove.animate({
			left: "-"+clickCount*248+"px"
		}, 600);
	});
})();


// 计时器
(function(window, undefined){
    var TimeCount = function(){};
    TimeCount.prototype = {
        init: function(conf){
            var conf  = conf || {},
                $elem = conf.elem,
            	tType = conf.type || false;
            
            this.$changeText = $elem.children(conf.changeText);
            this.$changeTime = $elem.children(conf.changeTime);
            this.disTime     = conf.times;
            this.endTime     = this.formatTime(this.disTime);

            if(!tType){
                this.nowTime = conf.nowTime + 1;
            }else{
                this.nowTime = Math.floor(parseInt((new Date().getTime())/1000)) + 1;
            }
            this.setLoop();
        },
        setLoop: function(){
            var self = this;
            var leftTime = self.endTime - self.nowTime;
            if(leftTime <= 0){
                leftTime = self.nowTime - self.endTime;
                self.$changeText.html("抢购已开始");
                self.$changeTime.addClass("clock_start");
            }

            var tDay    = Math.floor(leftTime/(60*60*24)),
                tHour   = Math.floor((leftTime-tDay*24*60*60)/3600),
                tMinute = Math.floor((leftTime-tDay*24*60*60-tHour*3600)/60),
                tSecond = Math.floor(leftTime-tDay*24*60*60-tHour*3600-tMinute*60);

            self.$changeTime.html("<span>"+tDay+"</span>天<span>"+tHour+"</span>时<span>"+tMinute+"</span>分<span>"+tSecond+"</span>秒");
            self.nowTime += 1;

            setTimeout(function(){
                self.setLoop();
            }, 1000);
        },
        formatTime: function(time){
        	var a = [],
            	b = [],
            	c = [];
            a = time.split(' ');
            b = a[0].split('-');
            c = a[1].split(':');
            var time = (new Date(b[0], b[1]-1, b[2], c[0], c[1], c[2]).getTime())/1000;
            return time;
        },
    };
	window.TimeCount = TimeCount;
})(window);