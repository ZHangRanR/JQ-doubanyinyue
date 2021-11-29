$('.tab-prev').add('.tab-next').on('click',function(){
    var left = $('.box-list').position().left;
    if($(this).hasClass('btn-hide')){
        if(left == 0){
            $('.box-list').css('left','-645px');
        }else{
            $('.box-list').css('left','0');
        }
        $(this).removeClass('btn-hide');
        $('.btn-show').addClass('btn-hide');
        $('.btn-show').removeClass('btn-show');
        $(this).addClass('btn-show');
    }
})

