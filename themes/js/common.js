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

        var $listTitleH3 = $('.list_03 h3'),
            $listTitleH4 = $('.list_03 h4'),
            $listCheck = $('.list_03 .this_chk');

        $listTitleH3.on('click', function(){
            $(this).closest('.this_block').addClass('current');
        });

        $listTitleH4.on('click', function(){
            $(this).closest('.this_list').addClass('current');
        });

        $listCheck.on('click', function(){
            $(this).addClass('current');
        });


        $('.js_vote').on('click', function(){

            self.setMaskHeight(); // 显示遮罩层
            
        });
    }
};

siteCommon.init();