// 计时器调
(function(window, undefined){
    var TimeCount = function(){};
    TimeCount.prototype = {
        init: function(conf){
            var conf  = conf || {},
                $elem = conf.elem,
                tType = conf.type || false;
            
            this.$changeText = $elem.children(conf.changeText);
            this.$changeTime = $elem.children(conf.changeTime);
            this.disTime     = conf.times;
            this.endTime     = this.formatTime(this.disTime);

            if(!tType){
                this.nowTime = conf.nowTime + 1;
            }else{
                this.nowTime = Math.floor(parseInt((new Date().getTime())/1000)) + 1;
            }
            this.setLoop();
        },
        setLoop: function(){
            var self = this;
            var leftTime = self.endTime - self.nowTime;
            if(leftTime <= 0){
                leftTime = self.nowTime - self.endTime;
                self.$changeText.html("抢购已开始");
                self.$changeTime.addClass("clock_start");
            }

            var tDay    = Math.floor(leftTime/(60*60*24)),
                tHour   = Math.floor((leftTime-tDay*24*60*60)/3600),
                tMinute = Math.floor((leftTime-tDay*24*60*60-tHour*3600)/60),
                tSecond = Math.floor(leftTime-tDay*24*60*60-tHour*3600-tMinute*60);

            self.$changeTime.html("<span>"+tDay+"</span>天<span>"+tHour+"</span>时<span>"+tMinute+"</span>分<span>"+tSecond+"</span>秒");
            self.nowTime += 1;

            setTimeout(function(){
                self.setLoop();
            }, 1000);
        },
        formatTime: function(time){
            var a = [],
                b = [],
                c = [];
            a = time.split(' ');
            b = a[0].split('-');
            c = a[1].split(':');
            var time = (new Date(b[0], b[1]-1, b[2], c[0], c[1], c[2]).getTime())/1000;
            return time;
        }
    };
    window.TimeCount = TimeCount;
})(window);