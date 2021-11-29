(function($){
	 function Tabs(options) {
	    this.opts = options || {};
	    this.wrap = this.opts.father;
	    this.init();
	 }

     Tabs.prototype.init = function(){
        this.createDom();
        this.clickEvent();
     }

     Tabs.prototype.createDom = function(){
         var self = this;
     	var headLen = this.opts.heading.length;
        var head = '<ul class="tab-caption"></ul>';
        var headStr = '' ;
        var tabStr = '';
        for (var i = 0; i < headLen; i++) {
             headStr += '<li>' + this.opts.heading[i] + '</li>'
             tabStr += '<div class="tab-list"></div>'
        }
        this.wrap.append($(head).html(headStr));
        // 标题
        if(this.opts.title){
            var title = '<span class="tab-title">' + this.opts.title + '</span>';
            $(title).prependTo($(self.wrap).find('.tab-caption'));
        }
        if(this.opts.more){
            var title = '<a href="#1" class="tab-more">' + this.opts.more + '</a>';
            $(title).prependTo($(self.wrap).find('.tab-caption'));
        }
        this.wrap.append($(tabStr));
        $(self.wrap).find('.tab-caption li').eq(0).addClass('tab-active');
        $(self.wrap).find('.tab-list').eq(0).addClass('tabShow');
        
     }

     Tabs.prototype.clickEvent = function(){
        var self = this;
        console.log($(self.wrap).find('.tab-caption li'));
        $(self.wrap).find('.tab-caption > li').on('click',function(event) {
            var index = $(self.wrap).find('.tab-caption > li').index(this);
            $(self.wrap).find('.tab-active').removeClass('tab-active');
            $(this).addClass('tab-active');
            $(self.wrap).find('.tabShow').removeClass('tabShow');
            $(self.wrap).find('.tab-list').eq(index).addClass('tabShow');
        })
     }
     $.fn.extend({
     	tabs:function(options){
     		options.father = this || $('body');
     		new Tabs(options);
     	}
     });

}(jQuery))