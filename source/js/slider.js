(function(){
    var str = '';

    var $slider = $('.js_slider'),
        $dom = $('.js_slider ul');

    var current = 1;

    var $w = $('.js_slider li').width(),
        len = $('.js_slider li').length;

    var $html = $('.js_slider li').eq(0).clone();

    $('.js_slider ul').append($html);

    for (var i=0; i<len; i++) {
        str += '<div></div>';
    }
    $slider.append('<div class="this_icon">'+str+'</div>');
    $('.js_slider .this_icon div').eq(0).addClass('current');


    function move(){

        $dom.css({
            '-webkit-transform': 'translate3d(-'+ 320*current +'px, 0, 0)',
            '-webkit-transition': '-webkit-transform 1s ease-in-out'
        });
        icon(current);
        
        $dom.on('webkitTransitionEnd', function (e) {
            if(current == len+1) {
                $(this).attr('style', '');
                current = 1;
                icon(0);
            }
        });

        current++;

        if (current == len+1){
            icon(0);
        }
        loop();
    }

    function loop(){
        setTimeout(function(){
            move();
        }, 4000);
    }

    function icon(num){
        $('.js_slider .this_icon div').removeClass('current');
        $('.js_slider .this_icon div').eq(num).addClass('current');
    }

    loop();
})();