var Slider = function(){};

Slider.prototype = {
    init: function(params){
        var self = this;

        self.$slider = $(params.elem).eq(params.z);

        self.$dom = self.$slider.find('ul');
        
        self.w = self.$slider.find('li').width();
        self.len = self.$slider.find('li').length;

        self.config();

        self._html();

        self._loop();
    },

    config: function(){
        var self = this;

        self.current = 1;
    },

    _html: function(){
        var self = this;

        var str = '';
            $html = self.$slider.find('li').eq(0).clone();

        self.$slider.find('ul').append($html);

        for (var i=0; i<self.len; i++) {
            str += '<div></div>';
        }

        self.$slider.append('<div class="this_icon">'+str+'</div>');
        
        self.$slider.find('.this_icon div').eq(0).addClass('current');
    },

    _move: function(){
        var self = this;

        self.$dom.css({
            '-webkit-transform': 'translate3d(-'+ self.w*self.current +'px, 0, 0)',
            '-webkit-transition': '-webkit-transform 1s ease-in-out'
        });

        self._icon(self.current);
        
        self.$dom.on('webkitTransitionEnd', function (e) {
            if(self.current == self.len+1) {
                $(this).attr('style', '');
                self.current = 1;
                self.icon(0);
            }
        });

        self.current++;

        if (self.current == self.len+1){
            self._icon(0);
        }

        self._loop();
    },

    _loop: function(){
        var self = this;

        setTimeout(function(){
            self._move();
        }, 4000);
    },

    _icon: function(num){
        var self = this;
        self.$slider.find('.this_icon div').removeClass('current');
        self.$slider.find('.this_icon div').eq(num).addClass('current');
    }
}

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