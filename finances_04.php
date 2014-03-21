<?php include 'public_header.php'; ?>
<link rel="stylesheet" href="themes/global.css" type="text/css" />
<style type="text/css">
.header_logo li.menu_prod{
	color:#044b9d
}
</style>
<div class="path">
	<div>理财产品 > <a href="">银行理财</a></div>
</div>



<div class="wrap clearfix">
    <div class="mod_left clearfix">
        <div class="mod_count">
            <div class="r_top">
                <span style="color:#9c9eab;">请选择或输入</span>
                <div class="r_a">您打算投多少钱</div>
                <div class="r_b" class="r_a">
                    <input class="r_input" type="text" value="50000" /> 元
                </div>
                <div class="r_c">当前投资金额 <span>五万元</span></div>
            </div>
            <ul class="r_li clearfix"> 
                <li data-num="1000"   data-font="一千">1000</li>
                <li data-num="3000"   data-font="三千">3000</li>
                <li data-num="5000"   data-font="五千">5000</li>
                <li data-num="8000"   data-font="八千">8000</li>
                <li data-num="10000"  data-font="一万">1 万</li>
                <li data-num="20000"  data-font="二万">2 万</li>
                <li data-num="30000"  data-font="三万">3 万</li>
                <li data-num="50000"  data-font="五万" class="current">5 万</li>
                <li data-num="100000" data-font="十万">10 万</li>
            </ul>
            <script type="text/javascript">
            (function(){
                var $a = $(".mod_count li"),
                    $input = $(".r_input");
                $a.on("click", function(){
                    $a.removeClass("current");
                    $(this).addClass("current");
                    $input.val($(this).attr("data-num"));
                });
            })();
            </script>
        </div>
        <div class="select_02 clearfix" style="margin-bottom:20px;">
            <div class="select_title clearfix">
                <ul class="clearfix">
                    <li class="current null">已选全部平台</li>
                </ul>
            </div>
            <div id="type-1" class="select_li clearfix">
                <div class="select_li_title">选择银行：</div>
                <div class="select_li_no_name current">不限</div>
                <div class="select_li_detail over clearfix" id="titleName">
                    <ul class="clearfix">
                        <li data-type="1" data-id="1">爱投资</li>
                        <li data-type="1" data-id="2">第一F2P</li>
                        <li data-type="1" data-id="3">合力贷</li>
                        <li data-type="1" data-id="4">红岭创投</li>
                        <li data-type="1" data-id="5">积木盒子</li>
                        <li data-type="1" data-id="6">开鑫贷</li>
                        <li data-type="1" data-id="7">陆金所</li>
                        <li data-type="1" data-id="8">拍拍贷</li>
                        <li data-type="1" data-id="9">人人贷</li>
                        <li data-type="1" data-id="10">翼龙贷</li>
                        <li data-type="1" data-id="11">有利网</li>
                        <li data-type="1" data-id="12">万惠投融</li>
                        <li data-type="1" data-id="13">温商贷</li>
                        <li data-type="1" data-id="14">拍拍贷</li>
                        <li data-type="1" data-id="15">人人贷</li>
                        <li data-type="1" data-id="16">翼龙贷</li>
                        <li data-type="1" data-id="17">有利网</li>
                        <li data-type="1" data-id="18">万惠投融</li>
                        <li data-type="1" data-id="19">温商贷</li>
                        <li data-type="1" data-id="20">拍拍贷</li>
                        <li data-type="1" data-id="21">人人贷</li>
                        <li data-type="1" data-id="22">翼龙贷</li>
                        <li data-type="1" data-id="23">有利网</li>
                        <li data-type="1" data-id="24">万惠投融</li>
                        <li data-type="1" data-id="25">温商贷</li>
                    </ul>
                    <div class="more">更多</div>
                </div>
            </div>
            <div id="type-2" class="select_li clearfix">
                <div class="select_li_title">产品状态：</div>
                <div class="select_li_no current">不限</div>
                <div class="select_li_detail clearfix">
                    <ul class="clearfix">
                        <li data-type="2" data-id="1">可购买</li>
                        <li data-type="2" data-id="2">即将发售</li>
                    </ul>
                </div>
            </div>
            <div id="type-3" class="select_li clearfix">
                <div class="select_li_title">产品期限：</div>
                <div class="select_li_no current">不限</div>
                <div class="select_li_detail clearfix">
                    <ul class="clearfix">
                        <li data-type="3" data-id="1">30天以下</li>
                        <li data-type="3" data-id="2">30-90天</li>
                        <li data-type="3" data-id="3">90-180天</li>
                        <li data-type="3" data-id="4">180-365天</li>
                        <li data-type="3" data-id="5">365天以上</li>
                    </ul>
                </div>
            </div>
            <div id="type-4" class="select_li clearfix">
                <div class="select_li_title">保本性质：</div>
                <div class="select_li_no current">不限</div>
                <div class="select_li_detail clearfix">
                    <ul class="clearfix">
                        <li data-type="4" data-id="1">保本</li>
                        <li data-type="4" data-id="2">不保本</li>
                    </ul>
                </div>
            </div>
            <script type="text/javascript" src="themes/js/app/select.js"></script>
        </div>



        <div class="clearfix">
            <dl>
                <dt>
                    
                </dt>
                <dd>
                </dd>
        </div>


        <?php include 'show_page.php'; ?>
    </div>

	<div class="mod_right clearfix">
        <div class="border_02" style="margin-bottom:20px;">
            <dl class="title_02 clearfix">
                <dt>理财圈资讯</dt>
                <dd><a href="">更多</a></dd>
            </dl>
            <ul class="list_point clearfix">
                <li><a href="">5成银行理财品收益不透明，投资...</a></li>
                <li><a href="">余额宝疯涨成国内第一基金 上海...</a></li>
                <li><a href="">互联网金融上演众宝闹新春 余额...</a></li>
                <li><a href="">微信支付宝理财巅峰对决开始</a></li>
                <li><a href="">2013年4.5万只银行理财产品发行</a></li>
                <li><a href="">银行理财产品收益率走低 春节后...</a></li>
                <li><a href="">2013年4.5万只银行理财产品发行</a></li>
                <li><a href="">互联网金融上演众宝闹新春 余额...</a></li>
                <li><a href="">微信支付宝理财巅峰对决开始</a></li>
            </ul>
        </div>
        <div class="border_02">
            <dl class="title_02 clearfix">
                <dt>理财微课堂</dt>
                <dd><a href="">更多</a></dd>
            </dl>
            <ul class="list_point clearfix">
                <li><a href="">5成银行理财品收益不透明，投资...</a></li>
                <li><a href="">余额宝疯涨成国内第一基金 上海...</a></li>
                <li><a href="">互联网金融上演众宝闹新春 余额...</a></li>
                <li><a href="">微信支付宝理财巅峰对决开始</a></li>
                <li><a href="">2013年4.5万只银行理财产品发行</a></li>
                <li><a href="">银行理财产品收益率走低 春节后...</a></li>
                <li><a href="">2013年4.5万只银行理财产品发行</a></li>
                <li><a href="">互联网金融上演众宝闹新春 余额...</a></li>
                <li><a href="">微信支付宝理财巅峰对决开始</a></li>
            </ul>
        </div>
    </div>
</div>
<?php include 'public_footer.php'; ?>
