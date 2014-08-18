var siteCommon = {
    init: function() {
        var self = this;

        self.setLeft();
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

    }
};

window.onload = function() {
    siteCommon.setLeft();
    siteCommon.setMenu();
};