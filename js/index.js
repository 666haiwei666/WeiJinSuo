$(function () {
banner();
xsMovible();
});
var banner=function () {
    //手势切换
    var startx=0;
    var disstancex=0;
    var ismove=0;
    $('.wjs_banner').on('touchstart',function (e) {
        startx=e.originalEvent.touches[0].clientX;
    }).on('touchmove',function (e) {
        var movex=e.originalEvent.touches[0].clientX;
        disstancex=movex-startx;
        ismove=true;
    }).on('touchend',function (e) {
       if(ismove && Math.abs(disstancex)>50){
           if(disstancex<0){
             $('.carousel').carousel('next');
           }else{
               $('.carousel').carousel('prev');
           }
           startx=0;
           disstancex=0;
           ismove=false;
       }
    })
    // var render = function () {
    //     $.get({
    //         type: 'get',
    //         url: 'js/data.json',
    //         dataType: 'json',//强制转换后台返回的数据为json对象
    //         //强制转化不成功程序报错，不执行success，执行error回调
    //         data: '',
    //         success: function (data) {
    //             window.data=data;
    //             // console.log(data);
    //             var isMobile = $(window).width() < 768 ? true : false;
    //
    //             var pointHtml = template('pointTemplate', {list: data});
    //             var imgHtml = template('imgTemplate', {list: data, Ism: isMobile});
    //             console.log(pointHtml);
    //             console.log(imgHtml);
    //             $('.carousel-indicators').html(pointHtml);
    //             $('.carousel-inner').html(imgHtml);
    //         }
    //     });
    // }
    //   render();
    //   $(window).on("resize",function () {
    //       render();
    //   }).trigger('resize');


}
//解决超小屏滑动问题
var xsMovible=function () {
    //解决换行问题
    var width=0;
    var arrayli= $('.wjs_product .nav-tabs').find('li');
    arrayli.each(function (i,item) {
       width=width+arrayli[i].offsetWidth+30;
    })
   $('.wjs_product .nav-tabs').width(width);
   new IScroll($('.nav-tabs-box')[0],{
       vScrollbar: false,
       mouseWheel: true,
       scrollX:true,
       scrollY:false,
       click:true
   })
}