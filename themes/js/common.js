var showImages = {
    /*
    * @params:
    *     click: false
    */
    init: function (params) {
        var self = this;

        var i,
            options = {
                click: false
            };

        for (i in params) options[i] = params[i];

        self.setConfig();

        // self._loop();

        self.addEvent();

        if (options.click) {
            self._click();
        }
    },

    setConfig: function () {
        var self = this;

        self.current = 0;
        self.newX = 0;

        self.dom = ".js_slide";
        self.len = $(self.dom + " li").length;

        var image = new Image();

        image.onload = function () {
            $(self.dom).css("display", "block");

            self.tWidth = $("body").width(),
            self.tHeight = $(self.dom + " li").height();

            $(self.dom + " li").css("width", self.tWidth + "px");

            $(self.dom + " ul").css({
                "height": self.tHeight + "px",
                "width": self.tWidth * self.len + "px"
            });

            $(self.dom).css("height", self.tHeight + "px");
        };

        image.src = $(self.dom + " li").eq(0).find("img").attr("src");
    },

    addEvent: function(){
        var self = this;

        var $dom = $(self.dom +" li");

        $dom.on("touchstart", function(e){
            self._touchstart(e);
        });

        $dom.on("touchmove", function(e){
            self._touchmove(e);
        });

        $dom.on("touchend", function(e){
            self._touchend(e);
        });
    },

    // _loop: function () {
    //     var self = this;

    //     setTimeout(function(){
    //         self._move();
    //     }, 3000);
    // },

    // _move: function () {
    //     var self = this;

    //     self.$nav.css({
    //         "-webkit-transition": "-webkit-transform 1s ease-in-out",
    //         "-webkit-transform": "translate3d("+ -self.bodyWidth * self.current +"px, 0, 0)"
    //     });

    //     self.$nav.on("webkitTransitionEnd", function(){
    //         self.current++;
    //         self._loop();
    //     });
    // },

    _touchstart: function (e) {
        var self = this;

         self.eventStop(e);

         self.basePageX = self.getPage(e, "pageX");
         self.basePageY = self.getPage(e, "pageY");
    },

    _touchmove: function (e) {
        var self = this;
        
        var pageX = self.getPage(e, "pageX"),
            pageY = self.getPage(e, "pageY"),
            distX,
            distY,
            moveX = 0;

        self.eventStop(e);

        distX = pageX - self.basePageX;
        distY = pageY - self.basePageY;

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

    _touchend: function (e) {
        var self = this;

        if (self.moveX < 0) {
            if (self.moveX < - 80) {
                if (self.current < self.len - 1) {
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

        self.newX = -self.current * self.tWidth;
    },

    _click: function () {
        var self = this;

        $(self.dom +" .this_left").on("click", function(e){
            if (self.current == 0) return;
            self.current--;
            self.refresh({
                'e': e,
                'x': -self.current * self.tWidth,
                'y': 0,
                'timer': '0.5s',
                'type': 'ease-in-out'
            });
        });

        $(self.dom +" .this_right").on("click", function(e){
            if (self.current + 1 >= self.len) return;
            self.current++;
            self.refresh({
                'e': e,
                'x': -self.current * self.tWidth,
                'y': 0,
                'timer': '0.5s',
                'type': 'ease-in-out'
            });
        });
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

        $(self.dom + " ul").css({
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
        return "translate3d(" + distX + "px, " + distY + "px, 0)";
    },

    getPage: function (event, page) {
        return event.changedTouches[0][page];
    }

}