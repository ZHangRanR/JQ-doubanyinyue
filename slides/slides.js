(function ($) {
    // 构造函数
    function SlidesImg(options) {
        this.opts = options || {};
        this.wrap = this.opts.father;
        this.init();
    }
    // 初始化
    SlidesImg.prototype.init = function () {
        this.len = this.opts.images.length;
        this.itemW = this.wrap.width();
        this.itemH = this.wrap.height();
        this.key = true;
        this.timer = null;
        this.creatDom();
        this.point();
    }
    // 生产dom结构
    SlidesImg.prototype.creatDom = function () {
        var self = this;
        var len = self.len;
        var imgStr = '';
        var dotStr = '';
        var imgBox = $('<div class="img-box"></div>');
        var dotList = $('<ul class="dots"></ul>');
        var order = $('<ul class="order"><div class="next"><img src="' + self.opts.order[0] + '" alt=""></div><div class="prev"><img src="' + this.opts.order[1] + ' " alt=""></div></ul>');
        for (var i = 0; i < len; i++) {
            imgStr += '<li class="item"><a href="javascript:void(0)"><img src="' + self.opts.images[i] + '" alt=""></a></li>';
            dotStr += '<li class="dot"></li>';
        }
        imgStr += '<li class="item"><a href="javascript:void(0)"><img src="' + self.opts.images[0] + '" alt=""></a></li>';
        $(dotStr).appendTo(dotList);
        self.wrap.append(imgBox.html(imgStr))
            .append(dotList)
            .append(order);
        $('.dot').eq(0).addClass('active');
        imgBox.css({
            'height':self.itemH,
            'width':self.itemW * (this.len + 1)
        })
        $('.item img').css({
            'height':self.itemH,
            'width':self.itemW
        })
    }
    SlidesImg.prototype.point = function () {
        var self = this;
        self.autoplay();
        this.wrap.hover(function () {
            clearTimeout(self.timer);
            $('.next').show();
            $('.prev').show();
            self.clickEvent();
        }, function () {
            self.autoplay();
            $('.next').hide();
            $('.prev').hide();
        });
    }
    // 点击事件
    SlidesImg.prototype.clickEvent = function () {
        var self = this;
        //  绑定点击事件
        $('.dot').add('.next').add('.prev').on('click', function () {
            if (self.key == true) {
                self.key = false;
                // 判断点击对象是否是底部圆点选项
                if ($(this).hasClass('dot')) {
                    var index = $('.dot').index(this);
                    // 判断点击对象是否是next
                } else if ($(this).hasClass('next')) {
                    var index = $('.dot').index($('.active')) + 1;
                    // 判断点击对象是否是prev
                } else if ($(this).hasClass('prev')) {
                    var index = $('.dot').index($('.active')) - 1;
                }
                self.changeImg(index);
            }
        })
    }
    //切换图片
    SlidesImg.prototype.changeImg = function (index) {
        var self = this;
        //判断当前图片是否是第一张
        if (index == -1) {
            index = self.len;
            $('.img-box').css('left', -index * self.itemW + 'px');
            index = self.len - 1;
        }
        // 根据index切换图片 
        $('.img-box').animate({
            'left': -index * self.itemW + 'px'
        }, 700, function () {
            //判断当前图片是否是最后一张
            if (index == self.len) {
                index = 0;
                $('.img-box').css('left', -index * self.itemW + 'px');
            }
            self.changeStyle(index);
            self.key = true;
        });
    }
    // 改变底部圆点选项CSS样式
    SlidesImg.prototype.changeStyle = function (index) {
        $('.active').removeClass('active');
        $('.dot').eq(index).addClass('active');
    }
    // 自动播放
    SlidesImg.prototype.autoplay = function () {
        var self =this;
        self.timer = setInterval(function () {
            var index = $('.dot').index($('.active')) + 1;
            self.changeImg(index);
        }, 3000);
    }
    $.fn.extend({
        slidesImg: function (options) {
            options.father = this || $('body');
            new SlidesImg(options);
        }
    });

})(jQuery)