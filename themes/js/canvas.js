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

        // 开始的线条距离
        self.line = [304, 380, 390, 320, 330, 320, 362, 390, 368, 320];

        self.state = [false, false, false, false, false, false, false, false, false, false];

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

        var show = document.getElementById('logo_link');
        show.style.cssText = "display:block";

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

        self.drawLine();
        self.drawCircle();
        
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
    },

    drawClear: function() {
    },

    // 画线条
    drawLine: function() {
        var self = this,
            ctx = self.ctx;

        for (var i=0; i<10; i++) {
            if (self.line[i] <= 400 && !self.state[i]){
                self.line[i] = self.line[i] + 2;
            } else {
                self.state[i] = true;
                self.line[i] = self.line[i] - 2;
                if (self.line[i] === 320) {
                    self.state[i] = false;
                }
            }
        }

        ctx.save();
        ctx.translate(400, 400);
        ctx.strokeStyle = '#b7aa88';
        ctx.lineWidth = 1;
        ctx.beginPath();


        for(var i=0; i<10; i++){
            ctx.save();
            ctx.rotate(Math.PI / 180 * (i*5+100));
            ctx.moveTo(0, 0);
            ctx.lineTo(self.line[i], 0);
            ctx.restore();

            ctx.save();
            ctx.rotate(Math.PI / 180 * (i*5+200));
            ctx.moveTo(0, 0);
            ctx.lineTo(self.line[i], 0);
            ctx.restore();

            ctx.save();
            ctx.rotate(Math.PI / 180 * (i*5+280));
            ctx.moveTo(0, 0);
            ctx.lineTo(self.line[i], 0);
            ctx.restore();
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    },

    // 画圆
    drawCircle: function() {
        var self = this,
            ctx = self.ctx;

        ctx.fillStyle = '#fff'; // 等同于fillStyle="rgba(255,255,255,1)";
        ctx.beginPath();
        ctx.arc(400, 400, 320, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
    },

    drawAnimate: function() {
        var self = this,
            ctx = self.ctx;
    }
};

drawLogo.init();