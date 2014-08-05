var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var width  = 300,
    height = 300;

canvas.style.width = width + "px";
canvas.style.height = height +"px";
canvas.width = width;
canvas.height = height;

var requestAnimationFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame || 
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var appCanvas = {
    init: function() {
        var self = this;

        // 斜边
        self.edge = Math.sqrt(150*150*2);
        // 弧度的计算公式为： 2*Math.PI/360*角度
        self.radian = 2 * Math.PI / 360,
        // 原X坐标
        self.centerX = Math.cos(self.radian * (45+0)) * self.edge;
        // 原Y坐标
        self.centerY = Math.sin(self.radian * (45+0)) * self.edge;

        self.imgLoad();
    },

    imgLoad: function() {
        var self = this;

        self.image = new Image();

        self.image.onload = function() {
            // self.drawImg();
            self.playAnimate();
        };

        self.image.src = '/themes/images/app_canvas_logo.png';
    },

    drawImg: function() {
        var self = this;
        ctx.drawImage(self.image, 0, 0, 300, 300, 0, 0, 300, 300);
        ctx.drawImage(self.image, 300, 0, 300, 300, 0, 0, 300, 300);
        ctx.drawImage(self.image, 600, 0, 300, 300, 0, 0, 300, 300);
    },

    showAnimate: function(angle){
        var self = this;

        var canvasWidth  = canvas.width,
            canvasHeight = canvas.height;

        // 弧度的计算公式为： 2*Math.PI/360*角度
        var c = self.edge;

        var x1 = Math.cos(self.radian * (45+angle.a)) * c, // 转动角度后的X坐标
            y1 = Math.sin(self.radian * (45+angle.a)) * c; // 转动角度后的Y坐标


        var x2 = Math.cos(self.radian * (45+angle.b)) * c, // 转动角度后的X坐标
            y2 = Math.sin(self.radian * (45+angle.b)) * c; // 转动角度后的Y坐标


        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        ctx.translate( self.centerX-x1, self.centerY-y1 );
        ctx.rotate(angle.a * Math.PI / 180);
        ctx.drawImage(self.image, 0, 0, 300, 300, 0, 0, 300, 300);
        ctx.restore();

        ctx.save();
        ctx.translate( self.centerX-x2, self.centerY-y2 );
        ctx.rotate(angle.b * Math.PI / 180);
        ctx.drawImage(self.image, 300, 0, 300, 300, 0, 0, 300, 300);
        
        ctx.restore();
        ctx.drawImage(self.image, 600, 0, 300, 300, 0, 0, 300, 300);
    },

    playAnimate: function(){
        var self = this;

        var angle = {
                a: 0,
                b: 360
            },
            dist = 1;

        requestAnimationFrame(callback);

        function callback() {
            angle.a = angle.a + dist;
            angle.b = angle.b - dist;

            if (angle.a <= 360 && angle.b >= 0) {
                self.showAnimate(angle);
            }else{
                angle.a = 0;
                angle.b = 360;
            }
            requestAnimationFrame(callback);

        }
    },
};

appCanvas.init();