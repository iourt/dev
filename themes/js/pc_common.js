var siteCommon = {
    init: function() {
        var self = this;

        self.setLeft();
        self.setMenu();
    },

    setLeft: function() {
        var self = this;

        var $body = $('.js_mod'),
            $bodyLeft = $('.js_left');

        $bodyLeft.css("height", $body.height()+'px');
    },

    // 菜单
    setMenu: function() {
        var $menu = $('.js_menu li'),
            $menuWidth = $menu.width();
        
        $menu.hover(function() {
            $(this).find('div').animate({
                width: $menuWidth
            }, 300);
        }, function() {
            $(this).find('div').animate({
                width: 0
            }, 300);
        });

    },

    setMusic: function(params) {
        // $('audio,video').mediaelementplayer();

        var player = new MediaElement('player', {
            // shows debug errors on screen
            enablePluginDebug: false,
            // remove or reorder to change plugin priority
            // plugins: ['flash','silverlight'],
            // specify to force MediaElement to use a particular video or audio type
            type: '',
            // path to Flash and Silverlight plugins
            // pluginPath: '/myjsfiles/',
            // name of flash file
            // flashName: 'flashmediaelement.swf',
            // name of silverlight file
            silverlightName: 'silverlightmediaelement.xap',
            // default if the <video width> is not specified
            defaultVideoWidth: 480,
            // default if the <video height> is not specified     
            defaultVideoHeight: 270,
            // overrides <video width>
            pluginWidth: -1,
            // overrides <video height>       
            pluginHeight: -1,
            // rate in milliseconds for Flash and Silverlight to fire the timeupdate event
            // larger number is less accurate, but less strain on plugin->JavaScript bridge
            timerRate: 250,
            // method that fires when the Flash or Silverlight object is ready
            success: function (mediaElement, domObject) {
                // add event listener
                mediaElement.addEventListener('play', function(e) {
                    $('.footer .this_right').html("1");
                }, false);
                mediaElement.addEventListener('ended', function(e) {
                    $('.footer .this_right').html("2");
                }, false);
                 
                // call the play method
                mediaElement.play();
                 
            },
            // fires when a problem is detected
            error: function () { 
             
            }
        });

        player.setSrc('themes/music/1.mp3');
    }
};

window.onload = function() {
    siteCommon.init();
};