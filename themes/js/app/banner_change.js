$(function(){
	var BannerChange = function(){
		return (this instanceof BannerChange)
			? this.init()
			: new BannerChange();
	};
	BannerChange.prototype = {
		// 初始化数据,进度条动画
		init: function(){
			var self = this;

			self.$barAnimate = $(".home_banner_left li .b_mid div");
			self.$barAnimate.each(function(){
				var $width = $(this).attr("data-width");
				$(this).animate({
					width: $width
				}, 1000);
			});

			self._change();
		},

		// 数据变更
		_change: function(){
			var self = this;

		    var $bannerInput = $(".r_input"),
		        $bannerLi    = $(".home_banner_right li"),
		        $bannerText  = $(".home_banner_right .r_c span"),
		        $otherShow   = $(".home_border_988 .title_green .title_r span");

		    $bannerLi.bind("click", function(){
		        $bannerLi.removeClass("current");
		        $(this).addClass("current");
		        $bannerInput.val($(this).attr("data-num"));
		        $bannerText.html($(this).attr("data-num"));
		        $otherShow.html("当前投资金额"+$(this).attr("data-num")+"元");
		    });

		    $bannerLi.hover(function(){
		    	$(this).addClass("hover");
		    }, function(){
		    	$(this).removeClass("hover");
		    })

		    $bannerInput.bind("focus", function(){
		        if($(this).val() == "0"){
		        	$(this).val("");
		        }
		    });

		    // 输入结束数据变化
		    $bannerInput.bind("change", function(){
		        $bannerText.html($bannerInput.val());
		        $otherShow.html("当前投资金额"+$bannerInput.val()+"元");
		    });

		    // 数据实时变化,可行性是多少？
		    // $bannerInput.on("input propertychange", function(){
		    //     $bannerText.html($bannerInput.val());
		    //     $otherShow.html("当前投资金额"+$bannerInput.val()+"元");
		    // });
		},
		_animate: function($that){
			var self = this,
				num = Math.floor(Math.random()*10);

		    var changeData = [{
			    	"percentage": ["10%","30%","10%","80%","90%"]
			    },{
			    	"percentage": ["15%","20%","90%","30%","50%"]
			    },{
			    	"percentage": ["50%","10%","40%","70%","10%"]
			    },{
			    	"percentage": ["90%","60%","20%","87%","30%"]
			    },{
			    	"percentage": ["30%","23%","50%","45%","23%"]
			    },{
			    	"percentage": ["70%","55%","95%","76%","43%"]
			    },{
			    	"percentage": ["20%","49%","22%","98%","45%"]
			    },{
			    	"percentage": ["5%","99%","36%","23%","65%"]
			    },{
			    	"percentage": ["88%","67%","70%","13%","80%"]
			    },{
			    	"percentage": ["40%","80%","60%","37%","15%"]
			    }];
			
	        self.$barAnimate.each(function(i){
	            $(this).animate({
	                width: changeData[num].percentage[i]
	            }, 1000);
	        });
		}
	};

	BannerChange = new BannerChange();
});

// banner
(function(){
	var banner = $(".home_banner_left dt div span"),
		isClick = false;

	banner.hover(function(){
		$(this).parent().addClass("hover");
	}, function(){
		$(this).parent().removeClass("hover");
	});
	

	var textVal = [],
		$spanText = $(".home_banner_left .b_right span");

	$spanText.each(function(index){
		textVal[index] = $(this).html();
	});

	banner.bind("click", function(){
		if(!isClick){
			banner.html("年收益");
			$spanText.eq(0).html("100.5");
			$spanText.eq(1).html("230.6");
			$spanText.eq(2).html("300.7");
			$spanText.eq(3).html("42.9");
			$spanText.eq(4).html("500.5");
		}else{
			banner.html("月收益");
			$spanText.eq(0).html(textVal[0]);
			$spanText.eq(1).html(textVal[1]);
			$spanText.eq(2).html(textVal[2]);
			$spanText.eq(3).html(textVal[3]);
			$spanText.eq(4).html(textVal[4]);
		}
		isClick = !isClick;
	});
})();
