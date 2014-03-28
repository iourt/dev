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
                $a.bind("click", function(){
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
                    <li class="current null">已选全部银行</li>
                </ul>
            </div>
            <div id="type-1" class="select_li clearfix">
                <div class="select_li_title">选择银行：</div>
                <div class="select_li_no_name current">不限</div>
                <div class="select_li_name over clearfix" id="titleName">
                    <ul class="clearfix">
                        <li data-id="1">中国银行</li>
                        <li data-id="2">工商银行</li>
                        <li data-id="3">招商银行</li>
                        <li data-id="4">农业银行</li>
                        <li data-id="5">建设银行</li>
                        <li data-id="6">交通银行</li>
                        <li data-id="7">民生银行</li>
                        <li data-id="8">平安银行</li>
                        <li data-id="9">中信银行</li>
                        <li data-id="10">广发银行</li>
                        <li data-id="11">光大银行</li>
                        <li data-id="12">兴业银行</li>
                        <li data-id="13">南京银行</li>
                        <li data-id="14">上海银行</li>
                        <li data-id="15">浦发银行</li>
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
            <dl class="list_art_01 clearfix">
                <dt>
                    <h2>产品列表</h2>
                    <ul>
                        <li class="hit up">发售时间</li>
                        <li class="hit down">理财期限</li>
                        <li class="hit up">收益率</li>
                        <li class="sub_01">排序：</li>
                    </ul>
                </dt>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-03-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
                <dd class="clearfix">
                    <div class="col_left">
                        <img src="themes/temp/money_logo.jpg" />
                        招商银行
                    </div>
                    <div class="col_mid">
                        <h3>招银进宝之鼎鼎成金10165号理财计划</h3>
                        <div class="sub_detail">(代码:310165)-苏州分行销售</div>
                        <ul class="sub_list clearfix">
                            <li class="s_01">
                                <span>5.90%</span><br>
                                预期年化收益
                            </li>
                            <li class="s_02">
                                <span>5.10%</span><br>
                                实际年化收益
                            </li>
                            <li class="s_03">
                                <span>120</span><b style="color:#000;">天</b><br>
                                期限
                            </li>
                            <li class="s_04">
                                <span>￥969.8</span><br>
                                收益
                            </li>
                        </ul>
                    </div>
                    <div class="col_right">
                        <div class="money_time clearfix" data-time="2014-06-21 21:41:00">
                            <div class="clock_text">抢购倒计时</div>
                            <div class="clock_time">
                                <span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒
                            </div>
                        </div>
                        <div class="sub_link"><a href="">查看详情</a></div>
                    </div>
                </dd>
            </dl>
        </div>
        <script type="text/javascript" src="themes/js/app/times.js"></script>
        <script type="text/javascript">
        (function(){
            var $clockTime = $(".money_time");
            $clockTime.each(function(i){
                var $this = $(this);
                new TimeCount().init({
                    type: true,
                    elem: $this,
                    nowTime: parseInt(<?php echo time() ?>),
                    times: $this.attr("data-time"),
                    changeText: ".clock_text",
                    changeTime: ".clock_time",
                    changeClass: "clock_start"
                });
            });
        })();
        </script>

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
