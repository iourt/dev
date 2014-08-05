function define(){}

var app = app || {},
	curVesrion = 5.5,
	ApiUrl = window.location.href.toLowerCase().match("m.ctrip.com") ? 'http://m.ctrip.com' : 'http://m.fat.ctripqa.com';

var ua = navigator.userAgent.toLowerCase(),
	ctripWireless = /ctripwireless/.test(ua),
	ctripYouth = /youth_ctripwireless/.test(ua);

var bonusName = '元携程任我行礼品卡';

var requestAnimationFrame = (function(){
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame || 
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();

var App_Config = {
	isHbridApp: ctripWireless ? !0 : !1,
	isYouthApp: ctripYouth ? !0 : !1,
	awardName: '',
	urlComment: function(){
		var url = '';
		if(this.isHbridApp){
			if(this.isYouthApp){
				url = 'ctripyouth://wireless/destination/toCommetMain';
			}else{
				url = 'ctrip://wireless/destination/toCommetMain';
			}
		}else{
			url = '/you/comment';
		}
		return url;
	},
	ownerComment: function(){
		var self = this,
			url = '';

		var keysMap = {
			'0': 'sight',
			'1': 'shopping',
			'2': 'restaurant',
			'3': 'entertainment'
		};

		var typeId = self.getNumber('commenttype'),
			typeName = keysMap[ String(typeId) ],
			districtId = self.getNumber('districtid'),
			districtEName = self.getString('districtename'),
			poiId = self.getNumber('poiid');
			
		if(self.isHbridApp){
			if(self.isYouthApp){
				url = 'ctripyouth://wireless/destination/toPoiCommet?poiType='+ typeId +'&poiId='+ poiId;
			}else{
				url = 'ctrip://wireless/destination/toPoiCommet?poiType='+ typeId +'&poiId='+ poiId;
			}
			
		}else{
			url = '/you/' + typeName + '/' + districtEName + districtId + '/' + poiId + '.html';
		}

		return url;
	},
	pageId: function(){
		return {
			Web: [247004, 247006, 247011],
			App: [247003, 247005, 247011],
			Youth: [247012, 247013, 247014]
		};
	},
	errorMsg: function(){
		return {
			wait: '请稍后...',
			miss: '矮油，产品经理在挖坑中...'
		};
	},
	initUserInfo: function(){
		var self = this;
		return {
			// 用户登录信息
			UserInfo: JSON.parse(localStorage.getItem("USERINFO")),
			// 用户ID
			UserID: function(){
				var id = '';
				if (this.UserInfo) {
					id = this.UserInfo.data.Auth;
				}
				return id;
			},
			// 评论ID
			CommentID: function(){
				var str = window.location.href.toLowerCase().match(/\?id=\d+/g);
				var id = str ? str.toString().match(/\d+/g).toString() : '';
				return id;
			},
			URL_TYPE: function(){
				var type = 0;
				if(window.location.href.indexOf("bonus?auth")>0){
					type = 2;
				}else{
					if(this.UserID() && this.CommentID()){
						if(window.location.href.indexOf("bonus#result")>0){
							type = 1;
						}else{
							type = 0;
						}
					}else{
						type = 0;
					}
				}
				return type;
			}
		};
	},
	supportTouch: function(){
		var support = ("ontouchstart" in window) ? "touchstart" : "click";
		return support;
	},
	getParams: function(name){
		var reg = new RegExp("(.*)"+name+"=([^&]*)(&|$)"),
			str = window.location.href.toLowerCase().match(reg);
		return str;
	},
	getNumber: function(name){
		var id = this.getParams(name);
		if(id !== null){
			return window.unescape(id[2]).replace(/\D/g, '');
		}
		return null;
	},
	getString: function(name){
		var str = this.getParams(name);
		if(str !== null){
			return window.unescape(str[2]);
		}
		return null;
	},
	isUpdateApp: function(){
		var isUpdateApp = false,
			type = this.getNumber('commenttype');
		if(type !== undefined){
			isUpdateApp = true;
		}
		return isUpdateApp;
	}
};

function setNavbar() {
	// if (parseFloat(curVesrion) < 5.4) return;
	var nav_bar_config_json = {
		"left": [{ "tagname": "back"}],
		"center": [{ "tagname": "title", "value": "社区活动"}],
		"right": [{"tagname": "share", "value":"分享"}]
	};
	window.CtripUtil.app_refresh_nav_bar( JSON.stringify(nav_bar_config_json) );
}

function shareCallback(conf) {
	var title = conf.title,
		url = conf.url,
		content = conf.content;

	var params = {
		sharetag: 'rotate',
		weixinContent: content,
		weiboContent: content + url,
		shareUrl: url,
		title: title,
		picUrl: "http://pages.ctrip.com/destination/rotate/img.png" 
	};
	window.CtripGS.shareCommon( JSON.stringify(params) );
}

var App_Templates = {
	tempHeader: function(){
		var templates = '<header class="bonus_banner"><img src="http://pages.ctrip.com/destination/rotate/banner.png" /></header>';
		return templates;
	},
	tempHeaderShare: function(){
		var templates = '<header class="bonus_banner"><img src="http://pages.ctrip.com/destination/rotate/banner.png" /></header>';
		return templates;
	},
	tempWrapStart: function(){
		var templates = '<section class="wrap">';
		return templates;
	},
	tempWrapEnd: function(){
		var templates = '</section>';
		return templates;
	},
	tempList: function(){
		// 数据加载中请稍后……
		// 没中奖是中奖的前奏<br>快去点评，获得开宝箱机会
		var templates = '<div class="line"></div>' +
			'<section class="bonus_list">' +
			'	<div class="bonus_list_info">' +
			'		<article>数据加载中请稍后……</article>' +
			'	</div>' +
			'	<div class="bonus_list_click">我的奖品</div>' +
			'</section>';
		return templates;
	},
	tempFooter: function(){
		var templates = '<dl class="bonus_marquee">' +
			'    <dt class="marquee"><div style="text-align:center;">数据加载中请稍后……</div></dt>' +
			'</dl>' +
			'<section class="bonus_rule">' +
			'<h3 class="t_ac">活动规则</h3><div class="bonus_rule_art"><article>' +
			'对任意地点发表点评，即可获得一次抽奖机会<br>' +
			'活动奖品： 1元、5元、10元、50元、100元携程礼品卡。<br>' +
			'每周额外抽取1位食神获得1克纯金币。<br><br>' +
			'每条点评需真实原创且在20个汉字以上。每张图片需真实原创。所有中奖点评需经过审核无误后，在10个工作日内发放奖励。<br>' +
			'任何抄袭灌水、虚假点评、小号刷奖等违规作弊行为将取消获奖资格。<br><br>' +
			'添图点评：使用点评添加照片功能发表点评，则有1.5倍的中奖概率；（仅携程app参与可添加图片）<br>' +
			'沙发点评：成功发表该地点的首个点评，则有2倍的中奖概率；<br>' +
			'金币食神专项大奖：含真实照片的餐馆点评，如果幸运中过5元及5元以上奖励，即可额外获得抽取大奖机会。每周将抽取1名用户，获得1克纯金金币一枚。<br>' +
			'（如金币发放完毕，将以等额携程礼品卡发放）。中奖用户将于每个月在携程攻略社区微信（love_trips）公布，届时有工作人员以社区私信联系发放奖励。<br><br>' +
			'活动仅限携程旅行APP5.5及以上版本参加。<br>' +
			'携程攻略社区保留活动的最终解释权，如果有关活动疑问请联系邮箱：vot@ctrip.com。' +
			'</article></div></section>';
		return templates;
	},
	tempIndex: function(){
		var templates = '<div class="bonus_text" style="font-weight:bold;">';
		// if(App_Config.isHbridApp){
			templates += '<strong>点评即可开启幸运转盘 <span>礼券金币</span>滚滚来!</strong><br>' +
				'<em>添图点评中奖概率 <span>+50%</span> 沙发点评中奖概率 <span>+100%</span></em><br>' +
				'<span style="font-size:14px;">餐馆添图点评 每周加送纯金币大奖！</span>';
		// }else{
		// 	templates += '<strong>点评即可开启幸运转盘 <span>礼卷金币</span>滚滚来!</strong><br>' +
		// 		'<em>沙发点评中奖概率 <span>+100%</span></em>';
		// }
		templates += '</div>';
		return templates;
	},
	tempDragon: function(){
		var templates = '<div class="bonus_images"></div>';
		return templates;
	},
	tempWave: function(){
		var templates = '<div class="bonus_images"></div>';
		return templates;
	},
	tempButton: function(){
		var templates = '<div class="bonus_btn">' +
			'	<a href="'+ App_Config.urlComment() +'">点评玩转盘</a>' +
			'</div>';
		return templates;
	},
	tempResultText: function(){
		var templates = '<div class="bonus_text" style="font:18px/25px Arial;padding-top:50px;">' +
			'<span>恭喜，点评成功!</span><br />' +
			'点击抽奖，即可转动大转盘!' +
			'</div>';
		return templates;
	},
	tempResultBonus: function(){
		var templates = '<div class="bonus_box_open">' +
			'    <canvas id="bonus"></canvas>' +
			'</div>';
		return templates;
	},
	tempMessage: function(){
		var templates = '<div class="this_text" style="padding-top:5px;">' +
			'    请耐心等待，点评审核后10个工作日内发放奖励<br>' +
			'    有问题烦请联系vot@ctrip.com' +
			'</div>';
		return templates;
	},
	tempShareText: function(){
		var templates = '<div class="share_text"></div>';
		return templates;
	}
};

var AppView = document.getElementById("appview");

// 我的奖品
var ShowOwnerBonus = {
	$btn: function(){ return $('.bonus_list_click'); },
	$list: function(){ return $('.bonus_list'); },
	$text: function(){ return $('.bonus_list_info'); },
	$line: function(){ return $('.line'); },
	$mask: function(){ return $(".bonus_mask"); },
	$bodyHeight: function(){ return $("#appview").height(); },
	isClick: false,
	init: function(){
		var self = this;

		self.$line().css('display','block');

		self.$list().css('display','block');

		var $listHeight = self.$list().height();
		self.$list().css('-webkit-transform','translate3d(0, -'+$listHeight+'px, 0)');

		self.$btn().on(App_Config.supportTouch(), function(e){
			e.preventDefault();
			e.stopPropagation();
			if(!self.isClick){
				self.$mask().css({
					'display': 'block',
					'height': self.$bodyHeight()+'px'
				});
				self.$list().css({
					'-webkit-transition': '-webkit-transform .3s linear',
					'-webkit-transform': 'translate3d(0, 0, 0)'
				});
			}else{
				self.$mask().css({
					'display': 'none'
				});
				self.$list().css({
					'-webkit-transition': '-webkit-transform .3s linear',
					'-webkit-transform': 'translate3d(0, -'+$listHeight+'px, 0)'
				});
			}
			self.isClick = !self.isClick;
		});
	},
	insertText: function(data){
		var msg = '';

		switch (data.state){
			case 0:
				var detail = data.Record;

				if(detail){
					for(var i=0,len=detail.length; i<len; i++){
						var point = this.showNamePoint(detail[i].AwardName),
							name = this.changeName(detail[i].AwardName);
						msg += '<li><em>'+ point +'</em>'+ point + name +' X'+ detail[i].AwardNum +'</li>';
					}
					msg = '<ul>'+ msg +'</ul>'+ App_Templates.tempMessage();
				}else{
					msg = '<article>没中奖是中奖的前奏<br>快去点评，获得玩转盘机会</article><a href="'+ App_Config.urlComment() +'">马上点评</a>';
				}
				break;
			case 1:
				msg = '<article>'+ App_Config.errorMsg().wait +'</article>';
				break;
			default:
				msg = '<article>' + App_Config.errorMsg().miss + '</article>';
		}
		this.$text().html(msg);
		this.init();
	},
	changeName: function(AwardName){
		var name = bonusName;
		return name;
	},
	showNamePoint: function(AwardName){
		var point = '';
		switch (AwardName){
			case "card100":
				point = "100";
				break;
			case "card50":
				point = "50";
				break;
			case "card10":
				point = "10";
				break;
			case "card5":
				point = "5";
				break;
			case "card1":
				point = "1";
				break;
		}
		return point;
	},
	getData: function(){
		var self = this;
		$.ajax({
			url: ApiUrl+'/restapi/you/CommentOpenJewelBoxapi/GetAwardWinningStatListByUserId',
			type: 'GET',
			data: {
				Auth: App_Config.initUserInfo().UserID()
			},
			datatype: 'json',
			timeout: 20000,
			beforeSend: function(){
				self.$text().html('<article>' + App_Config.errorMsg().wait + '</article>');
			},
			success: function(data){
				if(!!App_Config.initUserInfo().UserID()){
					self.insertText(data);
				}
			},
			error: function(e){
				self.$text().html('<article>' + App_Config.errorMsg().miss + '</article>');
			}
		});
	}
};

// 滚动中奖用户列表
var SetMarquee = {
	moveDom: function(){
		return document.querySelector('.marquee');
	},
	wrapper: function(){
		return document.querySelector('.bonus_marquee');
	},
	moveX: 0,
	distMove: 0,
	newDom: '',
	init: function(params){
		var self = this,
			msg = '';

		clearInterval(self.textTimer);

		switch (parseInt(params.state, 0)){
			case 0:
				var dataRecord = params.Record;
				if(dataRecord){
					for (var i=0,len=dataRecord.length; i<len; i++) {
						var point = ShowOwnerBonus.showNamePoint(dataRecord[i].AwardName),
							name = ShowOwnerBonus.changeName(dataRecord[i].AwardName);
						msg += '恭喜' + dataRecord[i].UserName + '获得:<span>' + point + '</span>'+ name +'；';
					}
				}else{
					msg = '暂无数据';
				}
				break;
			case 1:
				msg = App_Config.errorMsg().wait;
				break;
			default:
				msg = App_Config.errorMsg().miss;
		}

		self.moveDom().innerHTML = msg;

		self.startInit();

		self.textTimer = setInterval(function(){
			self.loopAnimate();
		}, 20);

		window.addEventListener('orientationchange', function(){

			clearInterval(self.textTimer);

			self.refer();

			self.textTimer = setInterval(function(){
				self.loopAnimate();
			}, 20);
		}, false);
	},
	startInit: function(){
		var temp = document.createElement('dd');
		this.newDom = this.wrapper().appendChild(temp);
		this.newDom.innerHTML = this.moveDom().innerHTML;
		this.changeStyle();
	},
	refer: function(){
		this.newDom = this.wrapper().getElementsByTagName('dd')[0];
		this.changeStyle();
	},
	changeStyle: function(){
		this.distMove = this.moveDom().offsetWidth;
		this.newDom.style.cssText = 'left:'+this.distMove+'px;width:'+this.distMove+'px';
	},
	loopAnimate: function(){
		if(this.moveX === -this.moveDom().offsetWidth){
			this.moveX = 0;
		}else{
			this.moveDom().style.cssText = '-webkit-transform:translate3d('+this.moveX+'px, 0, 0)';
			this.newDom.style.webkitTransform = 'translate3d('+this.moveX+'px, 0, 0)';
			this.moveX--;
		}
	},
	getData: function(){
		var self = this;
		$.ajax({
			url: ApiUrl+'/restapi/you/CommentOpenJewelBoxapi/GetLatestAwardWinninglist',
			type: 'GET',
			data: {
				topNumber: 10
			},
			datatype: 'json',
			timeout: 20000,
			success: function(data){
				self.init(data);
			},
			error: function(e){
				self.init({
					state: -1
				});
			}
		});	
	}
};

// 抽奖
var Lottery = {
	isClick: false,
	// 用户是否可以点击开始抽奖了
	isStart: false,
	getBodyHeight: function(){
		return document.querySelector('#appview').offsetHeight;
	},
	message: '<div class="text">亲，不要关闭页面哦!<br>奖品还在化妆中<br>稍后和你见面</div>',
	init: function(){
		// 弹框
		this.getFrame = document.querySelector('.bonus_frame');
		// 遮罩
		this.getMask = document.querySelector('.bonus_mask');

		// 获得像素比
		// this.pixelRatio = this.getDevicePixelRatio();
		this.pixelRatio = 2;

		// 随机产生（0~15）之间的数
		this.talkNum = Math.floor(Math.random()*16);
		// canvas画布
		this.canvas = document.getElementById('bonus');

    	this.totalDeg = 360 * 3;
    	this.steps = [];
    	// 未中奖角度对应
		this.lostDeg = [-25, -155, -245];
		// 中奖角度对应
		this.bonusDeg = [-290, -70, -200, -110, -335];


		// 弧度的计算公式为： 2*Math.PI/360*角度
		this.radian = 2 * Math.PI / 360;
		// 斜边
		this.edge = Math.sqrt(260*260*2);
		// 原X坐标
		this.centerX = Math.cos(this.radian * (45+0)) * this.edge;
		// 原Y坐标
		this.centerY = Math.sin(this.radian * (45+0)) * this.edge;

		this.initDraw();
	},
	initDraw: function(){
		var self = this,
			tWarpper = document.querySelector('.bonus_box_open');

		if(!tWarpper){
			return;
		}

		// 像素比
		var pixelRatio = self.pixelRatio;

		// 获得外围宽度
		var cWidth = tWarpper.offsetWidth,
			cHeight = tWarpper.offsetHeight,
			cw = cWidth * pixelRatio,
			ch = cHeight * pixelRatio;

		// 绘制canvas大小
		self.canvas.style.width = cWidth+'px';
		self.canvas.style.height = cWidth+'px';
		self.canvas.width = cw;
		self.canvas.height = ch;

		// 转盘元素需要绘制的坐标
		self.imgPos = [
			// 转盘坐标
			{
				sx: 0,
				sy: 0,
				sw: cw,
				sh: ch,
				dx: 0,
				dy: 0,
				dw: cw,
				dh: ch
			},
			// 开奖按钮坐标
			{
				sx: cw,
				sy: 0,
				sw: 110 * pixelRatio,
				sh: 110 * pixelRatio,
				dx: cw/2-220/2,
				dy: cw/2-220/2,
				dw: 110 * pixelRatio,
				dh: 110 * pixelRatio,
			}
		];

		self.ctx = self.canvas.getContext('2d');

		self.loadImages();
	},
	loadImages: function(){
		var self = this;

		self.images = new Image();
		
		self.images.onload = function() {
			self.isStart = true;

			// 绘制转盘
			self.drawImageBox(self.imgPos[0]);
			// 绘制开奖按钮
			self.drawImageBox(self.imgPos[1]);

			self.canvas.addEventListener('click', function(e){
				self.clickBonus(e);
			}, false);
		};
		self.images.src = 'http://pages.ctrip.com/destination/rotate/animate.png';
	},
	// 获得点击的坐标
	getEventPosition: function(ev){  
		var x, y;  
		if (ev.layerX || ev.layerX === 0) {  
			x = ev.layerX;  
			y = ev.layerY;  
		} else if (ev.offsetX || ev.offsetX === 0){ // Opera  
			x = ev.offsetX;  
			y = ev.offsetY;  
		}  
		return {x: x, y: y};  
	},
	// 获得像素比
	getDevicePixelRatio: function(){
		return window.devicePixelRatio || 1;
	},
	// 点击抽奖按钮
	clickBonus: function(e){
		var self = this,
			site = this.getEventPosition(e);
		if((site.x > 90) && (site.x < 170) && (site.y > 90) && (site.y < 175)){
			if(self.isStart && !self.isClick){
				self.getData();
			}
		}
	},
	// sx和sy是image所要绘制的起始位置
	// sw和sh是image所要绘制区域（相对image的sx和sy坐标的偏移量）的宽度和高度值
	// dx和dy是image在canvas中定位的坐标值
	// dw和dh是image在canvas中即将绘制区域（相对dx和dy坐标的偏移量）的宽度和高度值
	drawImageBox: function(position){
		var self = this;
		if (typeof CanvasRenderingContext2D !== "undefined") {
			var dist = position;
			this.ctx.drawImage(self.images, dist.sx, dist.sy, dist.sw, dist.sh, dist.dx, dist.dy, dist.dw, dist.dh);
			return this;
		}
	},
	playAnimate: function(data){
		var self = this;
		var now = 0;
		requestAnimationFrame(callback);
		function callback(){
			now++;
			self.isClick = true;
			if (now < self.steps.length) {
				var angle = self.steps[now];
				self.showAnimate(angle);
				requestAnimationFrame(callback);
			}else{
				self.showBonus(data);
			}
		}
	},
	showAnimate: function(angle){
		var self = this;

		var ctx = self.ctx;

		var canvasWidth = self.canvas.width,
			canvasHeight = self.canvas.height;

		// 弧度的计算公式为： 2*Math.PI/360*角度
		var radian = self.radian,
			c = self.edge,
			x = Math.cos(radian * (45+angle)) * c, // 转动角度后的X坐标
			y = Math.sin(radian * (45+angle)) * c; // 转动角度后的Y坐标

		ctx.save();
		// ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.translate(self.centerX-x, self.centerY-y);
		ctx.rotate(angle * Math.PI / 180);
		self.drawImageBox(self.imgPos[0]);
		ctx.restore();
		self.drawImageBox(self.imgPos[1]);
	},
	rotateLinear: function(){
		var buff = 0.03,
			t = Math.sqrt(2 * this.totalDeg / buff),
			v = buff * t;
        for (var i = 0; i < t; i++) {
            this.steps.push((2 * v * i - buff * i * i) / 2)
        }
        this.steps.push(this.totalDeg);
	},
	// 分享微信等
	appShare: function(){
		var $btn = $('.btn_share'),
			shareUrl = ApiUrl+'/you/operations/bonus?auth='+ App_Config.initUserInfo().UserID();

		$btn.on('click', function(){
			shareCallback({
				title: '点评成金，玩转盘送好礼！',
				content: '#中奖停不下来#我在点评玩转盘活动中，中了'+ App_Config.awardName +'！你怎么还不来？',
				url: shareUrl
			});
		});
	},
	// 抽奖
	getData: function(){
		var self = this;

		var angle = 0,
			timer = '';

		$.ajax({
			url: ApiUrl+'/restapi/you/CommentOpenJewelBoxapi/LuckyDraw',
			type: 'GET',
			data: {
				Auth: App_Config.initUserInfo().UserID(),
				commentid: App_Config.initUserInfo().CommentID()
			},
			datatype: 'json',
			timeout: 20000,
			beforeSend: function(){
				timer = setInterval(function(){
					angle += 6;
					self.showAnimate(angle);
				}, 10);
			},
			success: function(data){
				clearInterval(timer);
				
				var deg = 0;

				// 调试数据
				// data.IsWin = false;
				// data.IsRepeat = true;
				// data.AwardName = 'card100';

				if(data.IsWin){
					deg = self.bonusDeg[self.bonusType(data.AwardName)];
				}else{
					deg = self.lostDeg[parseInt(self.lostDeg.length * Math.random())];
				}
				self.bonusRun(data, deg);
			},
			error: function(e){
				var data = {};
				
				clearInterval(timer);
				deg = self.lostDeg[parseInt(self.lostDeg.length * Math.random())];
				data.IsWin = false;
				self.bonusRun(data, deg);
			}
		});
	},
	bonusType: function(AwardName){
		var type = '';
		switch (AwardName){
			case "card100":
				type = "4";
				break;
			case "card50":
				type = "3";
				break;
			case "card10":
				type = "2";
				break;
			case "card5":
				type = "1";
				break;
			case "card1":
				type = "0";
				break;
		}
		return type;
	},
	bonusRun: function(data, deg){
		this.totalDeg = 360 * 6 + deg;
		this.rotateLinear();
		this.playAnimate(data);
	},
	showBonus: function(data){
		var self = this,
			str = '';

		var btnA = '<a class="this_btn" href="'+ App_Config.urlComment() +'">继续点评玩转盘</a>',
			btnLink = '<a class="this_link" href="'+ App_Config.ownerComment() +'">查看我的点评>></a>',
			btnShare = '<a class="btn_share">分享炫耀给好友</a>',
			btnB = '<a class="this_green" href="'+ App_Config.urlComment() +'">继续点评</a>';

		if(data.IsWin){
			var point = ShowOwnerBonus.showNamePoint(data.AwardName),
				name = ShowOwnerBonus.changeName(data.AwardName);
				
			str = '<div class="success">' +
				'    <dl>' +
				'        <dt>恭喜</dt>' +
				'        <dd>你的小宇宙强势爆发<br>获得 <span>'+ point +'</span>'+ name +'</dd>' +
				'    </dl>' +
				'</div>';

			if(App_Config.isHbridApp){
				App_Config.awardName = point + name;
				str += '<div class="btn_list">'+ btnShare + btnB +'</div>';
				if(App_Config.isUpdateApp() && curVesrion!=5.5){
					str += btnLink;
				}
			}else{
				str += btnA + btnLink;
			}
			
			str += App_Templates.tempMessage();
		}else{
			if(data.IsRepeat){
				str = '<div class="failure">' +
					'    <dl>' +
					'        <dt>玩过转盘啦</dt>' +
					'        <dd>您已经玩过转盘啦，<br>请再去点评获得新的玩转盘机会!</dd>' +
					'    </dl>' +
					'</div>';
			}else{
				str = '<div class="failure">' +
					'    <dl>' +
					'        <dt>好可惜</dt>' +
					'        <dd>'+ self.setSpeak() +'</dd>' +
					'    </dl>' +
					'</div>';
			}
			if(App_Config.isHbridApp && curVesrion==5.5){
				str += btnA;
			}else{
				str += btnA + btnLink;
			}
		}
		self.getFrame.innerHTML = str;

		if(App_Config.isHbridApp && (App_Config.initUserInfo().URL_TYPE()===1)){
			self.appShare();
		}

		// 显示中奖信息弹框
		setTimeout(function(){
			self.showFrame();
		}, 200);
	},
	showFrame: function(){
		this.getMask.style.cssText = 'display:block;height:' + this.getBodyHeight() + 'px;z-index:1001;';
		this.getFrame.style.cssText = 'display:block';
	},
	setSpeak: function(){
		var talk = [];
		talk = [
			'虽说人艰不拆，但这次真的木有中奖。<br>再点评一次，幸运总会眷顾你。',
			'貌似，可能……就差一点点了。<br>马上中奖，再点评试试吧！',
			'奖励擦肩而过，积攒人品终究会爆发！<br>亲，对自己的人品有信心吗？',
			'一切点评一条就放弃的行为都是耍流氓！<br>多写点评，中奖妥妥的！',
			'虽说木有中奖，但绝不放弃治疗。<br>药可以停，点评一定不能停。',
			'别伤心，<br>据说告诉小伙伴，中奖率会更高哦！',
			'亲，你长得太好看了，下次一定中！',
			'亲！幸运女神说你就差一点点！<br>再写一条吧！',
			'攒点人品继续抽，写个点评再抽一次！',
			'曾经有一份豪礼在你面前，<br>可是你没有抽中啊。',
			'对着镜子笑一个，中奖率更高，噢耶~~',
			'每天早上的中奖概率是最高的，<br>你造吗？',
			'继续点评吧，<br>你的RP一定会爆发的！<br>这是我说的！',
			'休息会儿，继续再写，<br>奖励源源不断的发给你。',
			'OH!MY GOD<br>试试再次点评吧！',
			'世事无奈，再来一次吧'
		];
		return talk[this.talkNum];
	}
};

var ShowShare = {
	$text: function(){
		return $('.share_text');
	},
	init: function(){
		this.auth = App_Config.getString('auth').toUpperCase();
		this.getData();
		this.getUserName();
	},
	insertText: function(data, nickname){
		var self = this,
			msg = '',
			count = 0;

		switch (data.state){
			case 0:
				var detail = data.Record;
				if(detail){
					for(var i=0,len=detail.length; i<len; i++){
						count += ShowOwnerBonus.showNamePoint(detail[i].AwardName)*detail[i].AwardNum;
					}
					msg = '<span>'+ nickname +'</span>在点评玩转盘活动中，<br>总共中了<span>'+ count +'</span>'+bonusName+'！';
				}else{
					msg = App_Config.errorMsg().miss;
				}
				break;
			case 1:
				msg = App_Config.errorMsg().wait;
				break;
			default:
				msg = App_Config.errorMsg().miss;
		}
		this.$text().html(msg);
	},
	// 取得用户名
	getUserName: function(){
		var self = this;
		$.ajax({
			url: ApiUrl+'/restapi/you/DistrictAggApi/GetUserDetails',
			type: 'GET',
			data: {
				UID: self.auth
			},
			datatype: 'json',
			timeout: 20000,
			beforeSend: function(){
				self.$text().html(App_Config.errorMsg().wait);
			},
			success: function(data){
				if(data.Result){
					var nickname = data.Result[0].Nickname;
					self.getData(nickname);
				}else{
					self.$text().html('信息有误');
				}
			},
			error: function(e){
				self.$text().html(App_Config.errorMsg().miss);
			}
		});
	},
	// 取得中奖信息
	getData: function(nickname){
		var self = this;
		$.ajax({
			url: ApiUrl+'/restapi/you/CommentOpenJewelBoxapi/GetAwardWinningStatListByUserId',
			type: 'GET',
			data: {
				Auth: self.auth
			},
			datatype: 'json',
			timeout: 20000,
			beforeSend: function(){
				self.$text().html(App_Config.errorMsg().wait);
			},
			success: function(data){
				self.insertText(data, nickname);
			},
			error: function(e){
				self.$text().html(App_Config.errorMsg().miss);
			}
		});
	}
};

var ShowView = {
	$pageLoad: $(".loading_gray"),
	$pageId: $("#page_id"),
	pageVal: '',
	initWeb: function(){
		this.pageVal = App_Config.pageId().Web;
		this.$pageLoad.css({"display":"none"});
		this.showHtml();
		if(App_Config.initUserInfo().URL_TYPE()!==2){
			SetMarquee.getData();
		}
	},
	initApp: function(){
		if(App_Config.isYouthApp){
			this.pageVal = App_Config.pageId().Youth;
		}else{
			this.pageVal = App_Config.pageId().App;
		}
		this.$pageLoad.css({"display":"none"});
		if(curVesrion>=5.5 || App_Config.isYouthApp){
			this.showHtml();
		}else{
			AppView.innerHTML = App_Templates.tempHeader() + 
				App_Templates.tempIndex() + 
				App_Templates.tempWrapStart() +
				'<div style="height:120px;"></div>' +
				App_Templates.tempDragon() + 
				App_Templates.tempFooter() +
				App_Templates.tempWrapEnd();
			
			this.$pageId.val(this.pageVal[0]);
		}
		SetMarquee.getData();
	},
	showHtml: function(){
		switch (App_Config.initUserInfo().URL_TYPE()){
			case 0:
				// 活动宣传页
				if(App_Config.initUserInfo().UserID()){
					AppView.innerHTML = App_Templates.tempHeader() + 
						App_Templates.tempList() + 
						App_Templates.tempIndex() + 
						App_Templates.tempWrapStart() + 
						App_Templates.tempButton() + 
						App_Templates.tempFooter() +
						App_Templates.tempDragon() + 
						App_Templates.tempWrapEnd();
					ShowOwnerBonus.getData();
				}else{
					AppView.innerHTML = App_Templates.tempHeader() +  
						App_Templates.tempIndex() + 
						App_Templates.tempWrapStart() +
						App_Templates.tempButton() + 
						App_Templates.tempFooter() +
						App_Templates.tempDragon() + 
						App_Templates.tempWrapEnd();
				}
				this.$pageId.val(this.pageVal[0]);
				break;
			case 1:
				// 活动抽奖页
				AppView.innerHTML = App_Templates.tempList() + 
					App_Templates.tempResultText() + 
					App_Templates.tempWrapStart() + 
					App_Templates.tempResultBonus() +
					App_Templates.tempFooter() +
					App_Templates.tempWave() + 
					App_Templates.tempWrapEnd();
				ShowOwnerBonus.getData();
				Lottery.init();
				this.$pageId.val(this.pageVal[1]);
				break;
			case 2:
				// 活动分享页
				AppView.innerHTML = App_Templates.tempHeader() +
					App_Templates.tempShareText() +
					App_Templates.tempWrapStart() + 
					App_Templates.tempButton() + 
					App_Templates.tempWave() + 
					'<section class="bonus_rule" style="margin-top:-15px;"><article></article></section>' +
					App_Templates.tempWrapEnd();
				ShowShare.init();
				this.$pageId.val(this.pageVal[2]);
				break;
		}
	}
};


// ShowView.init();
if(App_Config.isHbridApp){
	app.callback = function (res) {
		var tagname = res.tagname;
		switch (tagname) {
			case "web_view_finished_load":
				if (res.param.version) {
					curVesrion = parseFloat(res.param.version);
				}
				setNavbar();
				window.CtripUtil.app_init_member_H5_info();
			break;
			case "init_member_H5_info":
				if(res.param.userInfo){
					localStorage.setItem('USERINFO', JSON.stringify(res.param.userInfo));
				}else{
					localStorage.removeItem('USERINFO');
				}

				App_Config.initUserInfo();
				ShowView.initApp();
			break;
			case "share":
				shareCallback({
					title: '点评成金，玩转盘送好礼！',
					url: ApiUrl+'/you/operations/bonus',
					content: '点评成金，玩转盘送好礼！'
				});
			break;
		}
	};
}else{
	ShowView.initWeb();
}
