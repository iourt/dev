var siteCommon = {

    init: function() {
        var self = this;

        self.userRegister();

        self.closeBox();
    },

    // 用户注册
    userRegister: function() {
        var self = this;

        var $btn = $('.js_reg'),
            $box = $('.js_reg_box');

        $btn.on('click', function() {

            self.setMaskHeight(); // 显示遮罩层

            $box.css({
                'display': 'block'
            });
        });
    },

    // 关闭按钮
    closeBox: function() {
        var $btn = $('.js_close');

        $btn.on('click', function(e) {
            $('.js_mask').css({
                'display': 'none'
            });

            $(this).closest('.box').css({
                'display': 'none'
            });
        });
    },

    // 设置遮罩层的高度
    setMaskHeight: function() {
        var $bodyHeight =  $(document).height(); 

        $('.js_mask').css({
            'height': $bodyHeight+'px',
            'display': 'block'
        });
    },


    // 投票
    setVote: function() {
        var self = this;

        var $tH3 = $('.list_02 h3'),
            $tH4 = $('.list_02 h4'),
            $tList = $('.list_02 dd'),
            $btnVote = $('.list_02 .js_vote');

        $tH3.on('click', function(){
            setCurrent.call(this, '.this_block');
        });

        $tH4.on('click', function(){
            setCurrent.call(this, '.this_list');
        });

        $tList.on('click', function(){
            var name = $(this).attr('class');

            if ( name && name.toLowerCase().match('select') ) {
                $(this).removeClass('select');
            } else {
                $(this).addClass('select');
            }
            
        });


        // 点击投票按钮
        $btnVote.on('click', function(){
            self.setMaskHeight();

            var $box = $('.js_box');

            var top = $(document).scrollTop() + $(window).height()/2;

            $box.css({
                'display': 'block',
                'top': top+'px'
            });
        });
        
        var setCurrent = function(objClass){
            var $that = $(this).closest(objClass);

            var name = $that.attr('class');

            if( name && name.toLowerCase().match('current') ){
               $that.removeClass('current'); 
            } else {
               $that.addClass('current'); 
            }
        }
    }
};

siteCommon.init();