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
    },

    showAnimate: function(angle){
        var self = this;

        var canvasWidth  = canvas.width,
            canvasHeight = canvas.height;

        // 斜边
        self.edge = Math.sqrt(260*260*2);

        // 原X坐标
        this.centerX = Math.cos(this.radian * (45+0)) * this.edge;
        // 原Y坐标
        this.centerY = Math.sin(this.radian * (45+0)) * this.edge;
        

        // 弧度的计算公式为： 2*Math.PI/360*角度
        var radian = 2 * Math.PI / 360,
            c = self.edge,
            x = Math.cos(radian * angle) * c, // 转动角度后的X坐标
            y = Math.sin(radian * angle) * c; // 转动角度后的Y坐标

        ctx.save();
        // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.translate(self.centerX-x, self.centerY-y);
        ctx.rotate(angle * Math.PI / 180);
        self.drawImageBox(self.imgPos[0]);
        ctx.restore();
        self.drawImageBox(self.imgPos[1]);
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
};

appCanvas.init();