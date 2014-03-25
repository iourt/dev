<?php include 'public_header.php'; ?>
<link rel="stylesheet" href="themes/global.css?123" type="text/css" />
<style type="text/css">
.header_logo li.menu_cart{
	color:#044b9d
}
</style>
<div class="path">
	<div>网贷专栏 > <a href="">网贷计算器</a></div>
</div>

<div class="wrap clearfix">
	<div class="calculators clearfix">
		<h1>网贷理财计算器</h1>
		<div class="this_detail clearfix">
			<ul class="this_input clearfix">
				<li class="sub_1">
					投资金额：<input class="input_a" type="text" value="" />元<br>
					<span> </span>
				</li>
				<li class="sub_2" class="sub_1">
					期限：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="input_b" type="text" value="" />个月<br>
					<span> </span>
				</li>
				<li class="sub_3">
					还款方式：
					<select>
						<option>按月支付本息</option>
						<option>每月付息到期还本</option>
						<option>到期一次性还本付息</option>
					</select>
				</li>
				<li class="sub_4">
					年化利率：<input class="input_c" type="text" value="" />％<br>
					<span> </span>
				</li>
			</ul>

			<div class="this_chk clearfix">
				<div class="this_btn">开始计算</div>
				<div class="this_reset"><a>清空</a></div>
			</div>


			<div id="timeList" style="display:none;">

				<h3>收益描述</h3>
				<ul class="this_descr clearfix">
					<li style="width:30%;">投资金额 <span class="color_yellow">10000.00</span>元</li>
					<li style="width:70%;" style="width:30%;">应收本息 <span class="color_yellow">625.00</span>元</li>
					<li style="width:30%;">月收利息 <span class="color_yellow">625.00</span>元</li>
					<li style="width:70%;">您将在5个月后收回全部本息</li>
				</ul>
				<h3>本息回收时间表</h3>
				<table cellspacing="0" cellpadding="0">
					<tr>
						<th>月份</th>
						<th>月收本息</th>
						<th>月收本金</th>
						<th>月收利息</th>
						<th>待收本息</th>
					</tr>
					<tr>
						<td>1月</td>
						<td>125.00</td>
						<td>0.00</td>
						<td>123.00</td>
						<td style="color:#ba0000;">43222.00</td>
					</tr>
					<tr>
						<td>2月</td>
						<td>125.00</td>
						<td>0.00</td>
						<td>123.00</td>
						<td style="color:#ba0000;">43222.00</td>
					</tr>
					<tr>
						<td>3月</td>
						<td>125.00</td>
						<td>0.00</td>
						<td>123.00</td>
						<td style="color:#ba0000;">43222.00</td>
					</tr>
					<tr>
						<td>4月</td>
						<td>125.00</td>
						<td>0.00</td>
						<td>123.00</td>
						<td style="color:#ba0000;">43222.00</td>
					</tr>
					<tr>
						<td>5月</td>
						<td>125.00</td>
						<td>0.00</td>
						<td>123.00</td>
						<td style="color:#ba0000;">43222.00</td>
					</tr>
					<tr>
						<td>6月</td>
						<td>125.00</td>
						<td>0.00</td>
						<td>123.00</td>
						<td style="color:#ba0000;">43222.00</td>
					</tr>
				</table>
			</div>

			<div class="this_text">
				按月支付本息（等额本息），即借款人每月以相等的金额偿还借款本息，也是银行房贷等采用的方法。<br>
				因计算中存在四舍五入，最后一期还款金额与之前略有不同。<br>
				每月付息到期还本，即借款人每月偿还固定利息，最后一期偿还全部本金。
			</div>
		</div>
		<script type="text/javascript">
		(function(){
			var $inputA = $(".input_a"),
				$inputB = $(".input_b"),
				$inputC = $(".input_c"),
				$btnReset = $(".this_reset"),
				$btn      = $(".this_btn"),
				$timeList = $("#timeList");

			$btnReset.click(function(){
				$inputA.val("");
				$inputB.val("");
				$inputC.val("");
				$timeList.css("display","none");
			});

			$btn.on("click", function(){
				var a = $inputA.val();
					b = $inputB.val();
					c = $inputC.val();

				if(!a){
					$(".this_input .sub_1 span").html("输入不能为空");
				}
				if(!b){
					$(".this_input .sub_2 span").html("输入不能为空");
				}
				if(!c){
					$(".this_input .sub_4 span").html("输入不能为空");
				}
				if(a && b && c) $timeList.css("display","block");
			});

			$inputA.on("input propertychange", function(){
		        var a = $(this).val();
		        a = a.replace(/[^\d.]/g, "");
		        a = a.replace(/^\./g, "");
		        a = a.replace(/\.{2,}/g,"."); 
		        $(this).val(a);
				$(".this_input .sub_1 span").html("");
		    });
			$inputB.on("input propertychange", function(){
		        var a = $(this).val();
		        a = a.replace(/[^\d.]/g, "");
		        a = a.replace(/^\./g, "");
		        a = a.replace(/\.{2,}/g,"."); 
		        $(this).val(a);
				$(".this_input .sub_2 span").html("");
		    });
			$inputC.on("input propertychange", function(){
		        var a = $(this).val();
		        $(this).val(a.match(/\d+/g));
				$(".this_input .sub_4 span").html("");
		    });
		})();
		</script>
	</div>
</div>
<?php include 'public_footer.php'; ?>
