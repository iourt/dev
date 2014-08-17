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
    }
};

window.onload = function() {
    siteCommon.setLeft();
};