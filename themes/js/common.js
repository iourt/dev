var showImages = {
    init: function () {
        var self = this;

        var dom = ".js_slide";

        self.current = 1;

        self.$slide = $(dom);
        self.$nav = $(dom +" ul");
        self.bodyWidth = $("body").width();

        var len = $(dom +" li").length,
            tHeight = $(dom +" li").height();


        alert(len);


        $(dom +" li").css({
            "width": self.bodyWidth
        });

        self.$nav.css({
            "height": self.$slide.find("li").height(),
            "width": self.bodyWidth * len
        })
        self.$slide.css({
            "height": $(dom +" li").height() + $(dom +" div").height(),
            "display": "block"
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