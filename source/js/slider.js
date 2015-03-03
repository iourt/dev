var Slider = function(){};

Slider.prototype = {
    init: function(params){
        var self = this;

        self.setConfig(params);

        self.createHtml();

        self.addEvent();
    },

    setConfig: function(params) {
        var self = this;


        self.current = 0;

        self.newX = 0;

        self.$dom = $(params.elem).eq(params.z);

        self.$nav = self.$dom.find('ul');

        self.w = self.$dom.find('li').width();

        self.len = self.$dom.find('li').length;
    },

    createHtml: function() {
        var self = this;

        var str = '';

        for (var i=0; i<self.len; i++) {
            str += '<div></div>';
        }

        self.$dom.append('<div class="this_icon">'+str+'</div>');
        
        self.$dom.find('.this_icon div').eq(0).addClass('current');
    },

    addEvent: function() {
        var self = this;

        self.$nav.on("touchstart", function(e){
            self._touchstart(e);
        });

        self.$nav.on("touchmove", function(e){
            self._touchmove(e);
        });

        self.$nav.on("touchend", function(e){
            self._touchend(e);
        });
    },

    _touchstart: function(e) {
        var self = this;

        // self.eventStop(e);

        self.basePageX = self.getPage(e, "pageX");
        self.basePageY = self.getPage(e, "pageY");

        self.scrolling = true;
        self.moveReady = false;
    },

    _touchmove: function(e) {
        var self = this;
        

        if (!self.scrolling) {
            return;
        }
        
        var pageX = self.getPage(e, "pageX"),
            pageY = self.getPage(e, "pageY"),
            distX,
            distY,
            moveX = 0;


        if (self.moveReady) {
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

        } else {
            var triangle = self.getTriangleSide(self.basePageX, self.basePageY, pageX, pageY);

            if (triangle.z > 5) {

                if (self.getAngle(triangle) > 55) {
                    // self.eventStop(e);
                    self.moveReady = true;
                    // self.element.addEventListener('click', self, true);

                } else {

                    self.scrolling = false;

                }
            }
        }
    },

    _touchend: function(e) {
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
            'x': -self.current * self.w,
            'y': 0,
            'timer': '0.5s',
            'type': 'ease-in-out'
        });

        self.newX = -self.current * self.w;

        self.changedCurrent();
    },

    getTriangleSide: function(x1, y1, x2, y2){
        var x = Math.abs(x1 - x2),
            y = Math.abs(y1 - y2),
            z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        return {
            x: x,
            y: y,
            z: z
        };
    },

    getAngle: function(triangle) {
        var cos = triangle.y / triangle.z,
            radina = Math.acos(cos);

        return 180 / (Math.PI / radina);
    },

    refresh: function (params) {
        var self = this;

        self.$nav.css({
            '-webkit-transition': '-webkit-transform ' + params.timer + ' ' + params.type,
            '-webkit-transform': self.getTranslate(params.x, params.y)
        });
    },

    changedCurrent: function() {
        var self = this;

        self.$dom.find('.this_icon div').removeClass('current');
        self.$dom.find('.this_icon div').eq(self.current).addClass('current');
    },

    eventStop: function(e){
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






















// var Slider = function(){};

// Slider.prototype = {
//     init: function(params){
//         var self = this;

//         self.$slider = $(params.elem).eq(params.z);

//         self.$dom = self.$slider.find('ul');
        
//         self.w = self.$slider.find('li').width();
//         self.len = self.$slider.find('li').length;

//         self.config();

//         self._html();

//         self._loop();
//     },

//     config: function(){
//         var self = this;

//         self.current = 1;
//     },

//     _html: function(){
//         var self = this;

//         var str = '';
//             $html = self.$slider.find('li').eq(0).clone();

//         self.$slider.find('ul').append($html);

//         for (var i=0; i<self.len; i++) {
//             str += '<div></div>';
//         }

//         self.$slider.append('<div class="this_icon">'+str+'</div>');
        
//         self.$slider.find('.this_icon div').eq(0).addClass('current');
//     },

//     _move: function(){
//         var self = this;

//         self.$dom.css({
//             '-webkit-transform': 'translate3d(-'+ self.w*self.current +'px, 0, 0)',
//             '-webkit-transition': '-webkit-transform 1s ease-in-out'
//         });

//         self._icon(self.current);
        
//         self.$dom.on('webkitTransitionEnd', function (e) {
//             if(self.current == self.len+1) {
//                 $(this).attr('style', '');
//                 self.current = 1;
//                 self.icon(0);
//             }
//         });

//         self.current++;

//         if (self.current == self.len+1){
//             self._icon(0);
//         }

//         self._loop();
//     },

//     _loop: function(){
//         var self = this;

//         setTimeout(function(){
//             self._move();
//         }, 4000);
//     },

//     _icon: function(num){
//         var self = this;
//         self.$slider.find('.this_icon div').removeClass('current');
//         self.$slider.find('.this_icon div').eq(num).addClass('current');
//     }
// }




// var Slider = function(){};

// Slider.prototype = {
//     init: function(dom){
//         var self = this;

//         self.nav = dom;
//         self.$slider = $(self.nav);
//         self.$dom = $(self.nav+' ul');
        
//         self.w = $(self.nav+' li').width();
//         self.len = $(self.nav+' li').length;

//         self.config();

//         self._html();

//         self._loop();
//     },

//     config: function(){
//         var self = this;

//         self.current = 1;
//     },

//     _html: function(){
//         var self = this;

//         var str = '';
//             $html = $(self.nav+' li').eq(0).clone();

//         $(self.nav+' ul').append($html);

//         for (var i=0; i<self.len; i++) {
//             str += '<div></div>';
//         }

//         self.$slider.append('<div class="this_icon">'+str+'</div>');
        
//         $(self.nav+' .this_icon div').eq(0).addClass('current');
//     },

//     _move: function(){
//         var self = this;

//         self.$dom.css({
//             '-webkit-transform': 'translate3d(-'+ self.w*self.current +'px, 0, 0)',
//             '-webkit-transition': '-webkit-transform 1s ease-in-out'
//         });

//         self._icon(self.current);
        
//         self.$dom.on('webkitTransitionEnd', function (e) {
//             if(self.current == self.len+1) {
//                 $(this).attr('style', '');
//                 self.current = 1;
//                 self.icon(0);
//             }
//         });

//         self.current++;

//         if (self.current == self.len+1){
//             self._icon(0);
//         }

//         self._loop();
//     },

//     _loop: function(){
//         var self = this;

//         setTimeout(function(){
//             self._move();
//         }, 4000);
//     },

//     _icon: function(num){
//         var self = this;
//         $(self.nav+' .this_icon div').removeClass('current');
//         $(self.nav+' .this_icon div').eq(num).addClass('current');
//     }
// }