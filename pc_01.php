<?php include 'pc_header.php'; ?>


    
<div class="js_img img_slider">
    <ul class="bxslider">
        <li><img src="/themes/temp/1.jpg" title="" /></li>
        <li><img src="/themes/temp/2.jpg" title="" /></li>
        <li><img src="/themes/temp/3.jpg" title="" /></li>
        <li><img src="/themes/temp/4.jpg" title="" /></li>
        <li><img src="/themes/temp/5.jpg" title="" /></li>
    </ul>
    <script type="text/javascript">
        $('.bxslider').bxSlider({
            touchEnabled: false,
            controls: false,
            auto: true
        });
    </script>
</div>


<link rel="stylesheet" type="text/css" href="themes/jquery.bxslider.video.css" />
<div class="js_video img_video">
    <ul class="bxvideo">
        <li><img src="/themes/temp/1.jpg" title="" /></li>
        <li><img src="/themes/temp/2.jpg" title="" /></li>
        <li><img src="/themes/temp/3.jpg" title="" /></li>
    </ul>
    <script type="text/javascript">
        $('.bxvideo').bxSlider({
            touchEnabled: false,
            controls: false,
            auto: false,
            onSliderLoad: function() {
                var $that = $('.js_video .bx-wrapper .bx-pager .bx-pager-item');

                $that.eq(0).find('a').html('ANTHONY STRONG');
                $that.eq(1).find('a').html('DEE DEE BRIDGEWATER');
                $that.eq(2).find('a').html('CUI JIAN 崔健');
            }
        });
    </script>
</div>

<div class="wrapper clearfix">
    <h2 class="title_01">
        Shanghai Jazz Week Present<br>
        即将呈现
    </h2>
    <div class="text_01">
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂<br><br>
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
        阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂
    </div>


    <ul class="list_01 clearfix">
        <li class="this_odd">
            <div class="this_img">
                <img class="img" src="/themes/temp/images.jpg" alt="" />
                <img src="/themes/temp/images.jpg" alt="" />
            </div>
            <div class="this_text">
                <h3>
                    Shanghai Jazz Week Present<br>
                    即将呈现
                </h3>
                <div>阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂</div>
            </div>
            <div class="this_time">
                Show Time:oct.02<br>
                Address: balabalba<br><br>
                演出信息<br>
                时间：2014年10月2日<br>
                地点：上海
            </div>
        </li>
        <li class="this_even">
            <div class="this_img">
                <img class="img" src="/themes/temp/images.jpg" alt="" />
                <img src="/themes/temp/images.jpg" alt="" />
            </div>
            <div class="this_text">
                <h3>
                    Shanghai Jazz Week Present<br>
                    即将呈现
                </h3>
                <div>阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂</div>
            </div>
            <div class="this_time">
                Show Time:oct.02<br>
                Address: balabalba<br><br>
                演出信息<br>
                时间：2014年10月2日<br>
                地点：上海
            </div>
        </li>
        <li class="this_odd">
            <div class="this_img">
                <img class="img" src="/themes/temp/images.jpg" alt="" />
                <img src="/themes/temp/images.jpg" alt="" />
            </div>
            <div class="this_text">
                <h3>
                    Shanghai Jazz Week Present<br>
                    即将呈现
                </h3>
                <div>阿斯蒂芬阿斯蒂芬阿萨德发生的发送到飞洒地方阿萨德阿斯蒂</div>
            </div>
            <div class="this_time">
                Show Time:oct.02<br>
                Address: balabalba<br><br>
                演出信息<br>
                时间：2014年10月2日<br>
                地点：上海
            </div>
        </li>
    </ul>
</div>
<?php include 'pc_footer.php'; ?>