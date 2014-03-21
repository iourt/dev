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
			$select     = $(".select_01 li"),
			$hotThreeDt = $(".select_01 dt");

		$select.hover(function(){
			$(this).addClass("hover");
		}, function(){
			$(this).removeClass("hover");
		});

		$hotOne.on("click", function(){
			$hotOne.removeClass("current");
			$(this).addClass("current");
		});

		$hotTwo.on("click", function(){
			$hotTwo.removeClass("current");
			$(this).addClass("current");
		});

		$hotThree.on("click", function(){
			$hotThreeDt.removeClass("current");
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
                <dt>货币基金动态</dt>
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
		<table class="table_list_01" cellspacing="0" cellpadding="0">
		<tr>
			<th class="null"></th>
			<th class="hit_box col_01">基金名称</th>
			<th>基金代码</th>
			<th>基金公司</th>
			<th>
				万元收益<br>
				<span class="color_gray">(元/日)</span>
			</th>
			<th class="col_05" colspan="6">
				<div>年化收益率</div>
				<ul>
					<li class="hit_box">单日</li>
					<li class="hit_box">7日</li>
					<li class="hit_box" class="hit_box">14日</li>
					<li class="hit_box">35日</li>
					<li class="hit_box">2个月</li>
					<li class="col_box">
						<div class="col_event">&nbsp;</div>
						<div class="mod_box" style="right:-35px;top:35px;width:230px;text-align:left;">
							<div class="mod_box_icon"></div>
							<div class="mod_box_close"></div>
							<div class="clearfix">
								<div class="d_01" style="">选择时间</div>
								<div class="d_02">
									<input name="time" type="radio" />2个月
									<input name="time" type="radio" />3个月
									<input name="time" type="radio" />6个月
									<input name="time" type="radio" />1年
								</div>
								<div class="d_03">其它天数</div>
								<div class="d_04">
									<div class="d_btn">确 定</div>
									<input type="text" value="" /> 天
								</div>
							</div>
						</div>
						<script type="text/javascript">
						(function(){
							var $wrap  = $(".col_box"),
								$show  = $(".col_box .col_event"),
								$box   = $(".mod_box"),
								$close = $(".mod_box_close");

							$wrap.hover(function(){
								$(this).addClass("hover");
							}, function(){
								$(this).removeClass("hover");
							});
							$show.on("click", function(){
								$(this).parent(".col_box").addClass("hover");
								$box.css("display", "block");
							});
							$close.on("click", function(){
								$(this).parent().parent(".col_box").removeClass("hover");
								$box.css("display", "none");
							});
						})()
						</script>
					</li>
				</ul>
			</th>
			<th>申购<br>状态</th>
			<th>赎回<br>状态</th>
			<th>&nbsp;</th>
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
			<td class="col col_01"><a href="">广发天天红货币</a></td>
			<td class="col col_02">000389</td>
			<td class="col col_03">广发基金</td>
			<td class="col col_04">
				<strong>1.7840</strong><br>
				<span class="color_gray">1-28</span>
			</td>
			<td class="col col_05">6.891%</td>
			<td class="col col_06">5.821%</td>
			<td class="col col_07">5.821%</td>
			<td class="col col_08">5.821%</td>
			<td class="col col_09">5.821%</td>
			<td class="col col_10"></td>
			<td class="col col_11"><div class="checked"></div></td>
			<td class="col col_12"><div class="checked"></div></td>
			<td class="col col_13"><a href="">去投资</a></td>
			<td class="null"></td>
		</tr>
		<tr>
			<td class="null"></td>
			<td class="col col_01"><a href="">华夏财富宝</a><br><span>理财通</span></td>
			<td class="col col_02">000389</td>
			<td class="col col_03">广发基金</td>
			<td class="col col_04">
				<strong>1.7840</strong>
			</td>
			<td class="col col_05">6.891%</td>
			<td class="col col_06">5.821%</td>
			<td class="col col_07">5.821%</td>
			<td class="col col_08">5.821%</td>
			<td class="col col_09">5.821%</td>
			<td class="col col_10">&nbsp;</td>
			<td class="col col_11"><div class="check"></div></td>
			<td class="col col_12"><div class="checked"></div></td>
			<td class="col col_13"><a href="">去投资</a></td>
			<td class="null"></td>
		</tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>
		<tr> <td class="null"></td> <td class="col col_01"><a href="">华夏财富宝</a></td> <td class="col col_02">000389</td> <td class="col col_03">广发基金</td> <td class="col col_04"> <strong>1.7840</strong><br> <span class="color_gray">1-28</span> </td> <td class="col col_05">6.891%</td> <td class="col col_06">5.821%</td> <td class="col col_07">5.821%</td> <td class="col col_08">5.821%</td> <td class="col col_09">5.821%</td> <td class="col col_10">&nbsp;</td> <td class="col col_11"><div class="check"></div></td> <td class="col col_12"><div class="checked"></div></td> <td class="col col_13"><a href="">去投资</a></td> <td class="null"></td> </tr>				
		</table>
	</div>

	<?php include 'show_page.php'; ?>
</div>
<?php include 'public_footer.php'; ?>
