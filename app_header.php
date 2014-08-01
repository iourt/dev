<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="stylesheet" type="text/css" href="themes/app_themes.css" />
        <link rel="stylesheet" type="text/css" href="themes/jquery.bxslider.app.css" />

        <!--<script type="text/javascript" src="themes/js/jquery-1.4.2.js"></script> -->
        <script type="text/javascript" src="themes/js/jquery.min-1.8.2.js"></script>
        <script type="text/javascript" src="themes/js/jquery.bxslider.min.js"></script>
    </head>
    <body>
        <header class="header">
            <div class="logo"><img src="themes/images/app_logo.jpg" /></div>
            <div class="reg">
                <a class="js_reg">注册 | SING UP</a>
            </div>
            <ul class="bxslider">
                <li><img src="themes/temp/app.jpg" /></li>
                <li><img src="themes/temp/app.jpg" /></li>
                <li><img src="themes/temp/app.jpg" /></li>
                <li><img src="themes/temp/app.jpg" /></li>
            </ul>
            <script type="text/javascript">
                $(document).ready(function(){
                    $('.bxslider').bxSlider({
                        touchEnabled: false,
                        controls: true,
                        auto: true
                    });
                });
            </script>

            <ul class="menu">
                <li><a href="">奖项设置<br>2014 AWARD</a></li>
                <li><a href="">候选榜单<br>AWARD LIST</a></li>
                <li><a href="">历届颁奖<br>AWARD&EVENT</a></li>
                <li><a href="">关于奖项<br>ABOUT AWARD</a></li>
            </ul>
        </header>