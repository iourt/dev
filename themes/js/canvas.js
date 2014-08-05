var requestAnimationFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame || 
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var drawLogo = {
    init: function() {
        var self = this;

        if (!self.canvasSupport()) {
            var canvas = document.getElementById('logo');
            canvas.className = 'canvas';
            return;
        }

        self.initCanvas();
    },

    canvasSupport: function() {
        if (!!document.createElement('canvas').getContext) {
            return true;
        }
        return false;
    },

    initCanvas: function() {
        var self = this;

        var logo = document.getElementById('logo');
        logo.style.cssText = "width:1000px;height:800px;margin:0 auto;text-align:center;";

        var canvas = document.createElement('canvas');

        logo.appendChild(canvas);

        self.ctx = canvas.getContext("2d");

        self.options = {
            x: 800, // 宽度
            y: 800 // 高度
        };

        canvas.style.width = self.options.x + "px";
        canvas.style.height = self.options.y +"px";
        canvas.width = self.options.x;
        canvas.height = self.options.y;

                // 斜边
        self.edge = Math.sqrt(self.options.x/2 * self.options.y/2 *2);
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

        self.image.src = '/themes/images/pc_canvas_logo.png';
    },

    playAnimate: function() {
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

    showAnimate: function(angle) {
        var self = this;


        var ctx = self.ctx;

        var distX = self.options.x,
            distY = self.options.y;

        // 弧度的计算公式为： 2*Math.PI/360*角度
        var c = self.edge;

        var x1 = Math.cos(self.radian * (45+angle.a)) * c, // 转动角度后的X坐标
            y1 = Math.sin(self.radian * (45+angle.a)) * c; // 转动角度后的Y坐标


        var x2 = Math.cos(self.radian * (45+angle.b)) * c, // 转动角度后的X坐标
            y2 = Math.sin(self.radian * (45+angle.b)) * c; // 转动角度后的Y坐标


        ctx.clearRect(0, 0, distX, distY);
        ctx.save();
        ctx.translate( self.centerX-x1, self.centerY-y1 );
        ctx.rotate(angle.a * Math.PI / 180);
        ctx.drawImage(self.image, 0, 0, distX, distY, 0, 0, distX, distY);
        ctx.restore();

        ctx.save();
        ctx.translate( self.centerX-x2, self.centerY-y2 );
        ctx.rotate(angle.b * Math.PI / 180);
        ctx.drawImage(self.image, distX, 0, distX, distY, 0, 0, distX, distY);
        
        ctx.restore();
        ctx.drawImage(self.image, distX*2, 0, distX, distY, 0, 0, distX, distY);
    }
};

drawLogo.init();