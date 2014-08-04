var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var appCanvas = {
    init: function() {
        var self = this;

        var width  = 300,
            height = 300;

        canvas.style.width = width + "px";
        canvas.style.height = height +"px";
        canvas.width = width;
        canvas.height = height;

        self.imgLoad();
    },

    imgLoad: function() {
        var self = this;

        self.image = new Image();

        self.image.onload = function() {
            self.drawImg();
        };

        self.image.src = '/themes/images/app_canvas_logo.png';
    },

    drawImg: function() {
        var self = this;
        ctx.drawImage(self.image, 0, 0, 300, 300, 0, 0, 300, 300);
        ctx.drawImage(self.image, 300, 0, 300, 300, 0, 0, 300, 300);
        ctx.drawImage(self.image, 600, 0, 300, 300, 0, 0, 300, 300);
    }
};

appCanvas.init();