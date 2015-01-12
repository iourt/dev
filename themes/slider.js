(function(){
    var document = window.document,
    support = {
        transform3d: ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()),
        touch: ("ontouchstart" in window)
    };

    var slider = {
        init: function(){
            var self = this;

            self.setConfig();

            self.addEvent();
        },

        setConfig: function(){
            var self = this;

            self.$jsSlider = $(".js_slider");
            self.$jsNav = $(".js_slider ul");
            self.$jsDt = $(".js_slider dt");
            self.$jsLi = $(".js_slider li");
            self.Len = self.$jsLi.length;
            self.current = 0;
            self.tWidth = $("body").width()-20;

            self.newX = 0;

            self.$jsSlider.css({
                "display": "block"
            });
        },

        addEvent: function(){
            var self = this;

            self.$jsDt.on("touchstart", function(e){
                self._touchstart(e);
            })
            self.$jsDt.on("touchmove", function(e){
                self._touchmove(e);
            })
            self.$jsDt.on("touchend", function(e){
                self._touchend(e);
            })
        },

        _touchstart: function(e){
            var self = this;

            // e.preventDefault();
            self.eventStop(e);

            // 获取开始坐标
            self.basePageX = self.getPage(e, "pageX");
            self.basePageY = self.getPage(e, "pageY");
        },

        _touchmove: function(e){
            var self = this;

            var pageX = self.getPage(e, "pageX"),
                pageY = self.getPage(e, "pageY");

            self.eventStop(e);

            // 获得移动距离

            var distX = pageX - self.basePageX,
                distY = pageY - self.basePageY;
                moveX = 0;

            self.moveX = distX;
            self.moveY = distY;

            if (self.current > 0 && self.current < self.Len - 1) {
                moveX = distX + self.newX;
            } else {
                moveX = distX/3 + self.newX;
            }
            self.refresh({
                'e': e,
                'x': moveX,
                'y': 0,
                'timer': '0s',
                'type': 'ease'
            });
        },

        _touchend: function(e){
            var self = this;

            if (self.moveX < 0) {
                if (self.moveX < - 80) {
                    if (self.current < self.Len - 1) {
                        self.current++;
                    }
                }
            } else {
                if (self.moveX > 80) {
                    if (self.current > 0) {
                        self.current--;
                    }
                }
            }

            self.refresh({
                'e': e,
                'x': -self.current * self.tWidth,
                'y': 0,
                'timer': '0.5s',
                'type': 'ease-in-out'
            });
            self.$jsLi.on('webkitTransitionEnd', function (e) {
                self.$jsLi.attr("style","");
            });
            self.newX = -self.current * self.tWidth;
        },

        /*
        * @params
        *     el: 执行移动的元素
        *     timer: 时间
        *     type: 动画滚动类型
        *     x: 横向移动距离 
        *     y: 纵向移动距离
        */
        refresh: function (params) {
            var self = this;

            self.$jsNav.css({
                '-webkit-transition': '-webkit-transform ' + params.timer + ' ' + params.type,
                '-webkit-transform': self.getTranslate(params.x, params.y)
            });
        },

        eventStop: function (e) {
            e.preventDefault();
            e.stopPropagation();
        },

        getTranslate: function (x, y) {
            var distX = x, distY = y;
            return support.transform3d ? "translate3d(" + distX + "px, " + distY + "px, 0)" : "translate(" + distX + "px, " + distY + "px)";
        },

        getPage: function (event, page) {
            return support.touch ? event.changedTouches[0][page] : event[page];
        }
    };

    slider.init();
})();