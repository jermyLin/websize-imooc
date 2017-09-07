/**
 * Created by Administrator on 2016/8/9.
 */
var $recommend_class = $('.recommend_class');
var $lf_list = $('.leifeng_list');
var $oul = $lf_list.children('ul');
var $yc = $recommend_class.children('.leifeng_yc');

$('.nowDay').addClass('Day_on').on('click',function () {
    $oul.eq(0).show().siblings().hide();
    $(this).addClass('Day_on').siblings().removeClass('Day_on');
});
$('.oneWeek').on('click',function () {
    $oul.eq(0).hide().siblings().show();
    //$oul.eq(1).show();
    $(this).addClass('Day_on').siblings().removeClass('Day_on');
});

$yc.toggle(function () {
    $lf_list.animate({
        height:'720px'
    });
    $('.leifeng_yc span').text('隐藏后面5个雷锋')
}, function () {
    $lf_list.animate({
        height:'370px'
    });
    $('.leifeng_yc span').text('显示另外5个雷锋')
});



