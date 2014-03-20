(function(){
    var $box      = $("#hide_li ul"),
        $boxLi    = $("#hide_li li"),
        $num      = $boxLi.length,
    	$data = {
    		dataId: [],
    		dataHtml: []
    	},
        $show     = $("#hide_li .more"),
        $hide     = $("#hide_li .hide"),
        $str      = "";

    $boxLi.each(function(i){
        $data.dataId[i] = $(this).attr("data-id");
        $data.dataHtml[i] = $(this).html();
    });
    if($num>12){
        for(var i=0; i<12; i++){
            $str += '<li data-type="1" data-id="'+$data.dataId[i]+'">'+$data.dataHtml[i]+'</li>';
        }
        $box.html($str);
        $str = "";
    }

    $show.on("click", function(){
        $(this).css("display","none");
        $hide.css("display","block");
        for(var i=0; i<$num; i++){
            $str += '<li data-type="1" data-id="'+$data.dataId[i]+'">'+$data.dataHtml[i]+'</li>';
        }
        $box.html($str);
        $str = "";
    });

    $hide.on("click", function(){
        $(this).css("display","none");
        $show.css("display","block");
        for(var i=0; i<12; i++){
            $str += '<li data-type="1" data-id="'+$data.dataId[i]+'">'+$data.dataHtml[i]+'</li>';
        }
        $box.html($str);
        $str = "";
    });

})();

(function(){
    var $li     = $(".select_li li"),
        $no     = $(".select_li .select_li_no"),
        $all    = $(".select_title .null"),
        $select = $(".select_title"),
        $close  = $(".select_title .hit");

    $li.on("click", function(){
    	var $thisDataType = $(this).attr("data-type"),
    		$thisDataId   = $(this).attr("data-id"),
    		$thisHtml     = $(this).html();
    	var elem = ".select_title .type-"+$thisDataType;

    	$all.css("display","none");
    	$(elem).html($thisHtml);
    	$(elem).css("display","inline");

        $(this).parent().parent().parent().children(".select_li_no").removeClass("current");
        $(this).parent().children("li").removeClass("current");
        $(this).addClass("current");
    });

    $no.on("click", function(){
        $(this).parent().children().children().children().removeClass("current");
        $(this).addClass("current");
    });

    $close.on("click", function(){
    	$(this).css("display","none");
    });
})();