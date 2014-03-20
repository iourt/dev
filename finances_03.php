<?php include 'public_header.php'; ?>
<link rel="stylesheet" href="themes/global.css" type="text/css" />
<style type="text/css">
.header_logo li.menu_prod{
	color:#044b9d
}
</style>
<div class="path">
	<div>理财产品 > <a href="">货币基金</a></div>
</div>



<div class="wrap clearfix">
	<div class="mod_left clearfix">
		<div class="border_03 select_01">
			<div class="select_title">已选全部基金公司</div>
			<div class="select_detail clearfix">
				<div class="select_col">选择基金公司</div>
				<ul class="select_case_a clearfix">
					<li>不限</li>
					<li class="current">热门</li>
					<li><b>A-G</b></li>
					<li><b>H-M</b></li>
					<li><b>N-T</b></li>
					<li><b>U-Z</b></li>
				</ul>
				<ul class="select_case_b clearfix">
					<li>华夏基金</li><li>大成基金</li><li>东吴基金</li><li>国投瑞银</li><li>长城基金</li>
					<li>长盛基金</li><li>富国基金</li><li>富安达基金</li><li>广发基金</li><li>博时基金</li>
					<li>宝盈基金</li><li>国泰基金</li><li>东方基金</li><li>长信基金</li><li>财通基金</li>
					<li>光大保德信</li><li>方正富邦</li><li>长安基金</li><li>安信基金</li><li>国金通用</li>
					<li>德邦基金</li><li>道富基金</li><li>国开泰富</li><li>国联安基金</li><li>东证资管</li>
					<li>国寿安保</li><li>工银瑞信</li><li>国海富兰克林</li>
				</ul>
			</div>
			<div class="select_detail clearfix">
				<div class="select_col">按字母找基金</div>
				<dl class="clearfix">
					<dt class="current">不限</dt>
					<dd>
						<ul class="select_case_c clearfix">
							<li>A</li> <li>B</li> <li>C</li> <li>D</li> <li>E</li> <li>F</li> <li>G</li> 
							<li>H</li> <li>I</li> <li>J</li> <li>K</li> <li>L</li> <li>M</li> <li>N</li> 
							<li>O</li> <li>P</li> <li>Q</li> <li>R</li> <li>S</li> <li>T</li> <li>U</li> 
							<li>V</li> <li>W</li> <li>X</li> <li>Y</li> <li>Z</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
	</div>
	<script type="text/javascript">
	(function(){
		var $hotOne     = $(".select_case_a li"),
			$hotTwo     = $(".select_case_b li"),
			$hotThree   = $(".select_case_c li"),
			$hotThreeDt = $(".select_01 dt");

		$hotOne.on("click", function(){
			$hotOne.removeClass("current");
			$(this).addClass("current");
		});

		$hotTwo.hover(function(){
			$(this).addClass("hover");
		}, function(){
			$(this).removeClass("hover");
		});

		$hotThree.on("click", function(){
			$hotThreeDt.removeClass("current");
			$hotThree.removeClass("current");
			$(this).addClass("current");
		});

		$hotThreeDt.on("click", function(){
			$hotThree.removeClass("current");
			$(this).addClass("current");
		});
	})();
	</script>
	


	<div class="mod_right clearfix">
        <div class="border_02">
            <dl class="title_02 clearfix">
                <dt>网贷百科</dt>
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


<div class="wrap clearfix">
	<div class="border_04" style="margin-bottom:20px;">
		<table class="table_list_03" cellspacing="0" cellpadding="0">
			<tr>
				<th class="null"></th>
				<th class="hit_box col_01">网贷平台</th>
				<th>项目名称</th>
				<th class="hit_box col_03">融资金额<br><span class="color_gray">元</span></th>
				<th class="hit_box col_04">进度</th>
				<th class="hit_box col_05">起点金额<br><span class="color_gray">元</span></th>
				<th class="hit_box col_06">年化利率</th>
				<th class="hit_box col_07">期限</th>
				<th class="hit_box col_08">收益金额<br><span class="color_gray">元</span></th>
				<th class="hit_box col_09">还款方式</th>
				<th></th>
				<th class="null"></th>
				<script type="text/javascript">
				(function(){
					var $hitBox = $(".hit_box"),
						isClick = [];

					$hitBox.on("click", function(){
						var i = $(this).index();
						if(!isClick[i]){
							$(this).addClass("up");
						}else{
							$(this).removeClass("up");
						}
						isClick[i] = !isClick[i];
					});
				})();
				</script>
			</tr>
			<tr>
				<td class="null"></td>
				<td class="col col_01"><a href="">陆金所</a></td>
				<td class="col col_02">
					稳盈-安e贷二期<br>
                    <em class="box_detail">
                        <span class="span_box_green">保本息</span><span class="span_box_yellow">奖</span>
                        <div class="box_detail_show">
                            <div class="box_detail_icon"></div>
                            <div class="box_detail_text">
                                保本保息<br>
                                奖励0.2%
                            </div>
                        </div>
                    </em>
				</td>
				<td class="col col_03">91000</td>
				<td class="col col_04">0%</td>
				<td class="col col_05">30000</td>
				<td class="col col_06"><span class="color_yellow">8.61%</span></td>
				<td class="col col_07">36个月</td>
				<td class="col col_08">13278</td>
				<td class="col col_09">每月付息到期还本</td>
				<td class="col col_10"><a href="">去投资</a></td>
				<td class="null"></td>
			</tr>
			<tr>
				<td class="null"></td>
				<td class="col col_01"><a href="">陆金所</a></td>
				<td class="col col_02">
					稳盈-安e贷二期
                    <em class="box_detail">
                        <span class="span_box_blue">保本</span>
                        <div class="box_detail_show">
                            <div class="box_detail_icon"></div>
                            <div class="box_detail_text">
                                保本金
                            </div>
                        </div>
                    </em>
				</td>
				<td class="col col_03">91000</td>
				<td class="col col_04">0%</td>
				<td class="col col_05">30000</td>
				<td class="col col_06"><span class="color_yellow">8.61%</span></td>
				<td class="col col_07">36个月</td>
				<td class="col col_08">13278</td>
				<td class="col col_09">每月付息到期还本</td>
				<td class="col col_10"><a href="">去投资</a></td>
				<td class="null"></td>
			</tr>
		</table>
	</div>

	<?php include 'show_page.php'; ?>
</div>
<?php include 'public_footer.php'; ?>
