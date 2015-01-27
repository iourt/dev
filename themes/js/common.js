var showImages = {
    init: function () {
        var self = this;

        self.current = 1;

        self.$slide = $(".js_slide");
        self.$nav = $(".js_slide ul");
        self.bodyWidth = $("body").width();

        self.$slide.css({
            "height": $(".js_slide img").height() + $(".js_slide div").height()
        });
        self.$slide.find("li").css({
            "width": self.bodyWidth
        });

        self._loop();
    },

    _loop: function(){
        var self = this;

        setTimeout(function(){
            self._move();
        }, 3000);
    },

    _move: function(){
        var self = this;

        self.$nav.css({
            "-webkit-transition": "-webkit-transform 1s ease-in-out",
            "-webkit-transform": "translate3d("+ -self.bodyWidth * self.current +"px, 0, 0)"
        });

        self.$nav.on("webkitTransitionEnd", function(){
            self.current++;
            self._loop();
        });
    },

    getTranslate: function (x, y) {
        var distX = x, distY = y;
        return "translate3d(" + distX + "px, " + distY + "px, 0)";
    }

}

showImages.init();