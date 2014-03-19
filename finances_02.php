<?php include 'public_header.php'; ?>
<link rel="stylesheet" href="themes/global.css" type="text/css" />
<style type="text/css">
.header_logo li.menu_prod{
	color:#044b9d
}
</style>
<div class="path">
	<div>理财产品 > <a href="">类余额宝产品</a></div>
</div>


<div class="wrap clearfix">
	<div class="border_04" style="margin-bottom:20px;">
		<table class="table_list_02" cellspacing="0" cellpadding="0">
		<tr>
			<th class="null"></th>
			<th class="hit_box col_01">产品名</th>
			<th class="hit_box col_02">互联网渠道</th>
			<th class="hit_box col_03">基金名称</th>
			<th class="hit_box col_04">
				万元收益<br>
				<span class="color_gray">(元/日)</span>
			</th>
			<th class="col_05" colspan="6">
				<div>年化收益率</div>
				<ul>
					<li class="hit_box">单日</li>
					<li class="hit_box">7日</li>
					<li class="hit_box">14日</li>
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
						})();
						</script>
					</li>
				</ul>
			</th>
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
			<td class="col col_01"><a href="">余额宝</a></td>
			<td class="col col_02">支付宝</td>
			<td class="col col_03">天弘增利宝货币市场基金</td>
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
			<td class="null"></td>
		</tr>			
		</table>
	</div>

	<?php include 'show_page.php'; ?>
</div>
<?php include 'public_footer.php'; ?>
