/**
 * Created by Administrator on 2016/8/10.
 */

/*背景图片区导航栏隐藏模块显示与隐藏*/
var course = document.getElementById('course');
//var course_nav = course.getElementsByTagName('ul');
var nav_list = course.getElementsByTagName('li');
var Course_Details = document.getElementsByClassName('Course_Details');
var publicBox = document.getElementsByClassName('publicBox');
for(var i=0; i<Course_Details.length;i++){
    Course_Details[i].x=i;
    Course_Details[i].onmouseenter = function () {//onmouseover onmouseout是冒泡的，onmouseenter ommouseleave是阻止冒泡的ݵ�
        for(var j=0; j<publicBox.length;j++){
            publicBox[j].style.display = 'none';
            /*console.log(publicBox[j]);*/
        }
        publicBox[this.x].style.display = 'block';
    };
    nav_list[i].onmouseleave = function () {
        for (var i = 0; i < publicBox.length; i++) {
            publicBox[i].style.display = 'none';
        }
    }
}
/*下面课程区文字盒子伸缩*/

/*var mr = document.getElementsByClassName('mr');
var bottom = document.getElementsByClassName('Det_box');
for (var j = 0; j < bottom.length; j++) {
    mr[j].x = j;
    mr[j].onmouseover = function () {
        bottom[this.x].style.bottom = '40px';
    };
    mr[j].onmouseout= function () {
        bottom[this.x].style.bottom = '0';
    };
}*/

/*jquery方法*/

var $mr = $('.mr');
$mr.each(function () {
    $(this).hover(function () {
        $(this).find('.Det_box').stop();//stop为立即停止当前动画，如果接下来还有动画会以当前的状态完成接下来的动画
        $(this).find('.Det_box').animate({bottom: '40px'},300);
        $(this).find('.box_bottom').css({
            webkitBoxShadow:'0 10px 10px #D2D2D2',
            msBoxShadow:'0 10px 10px #D2D2D2',
            mozBoxShadow:'0 10px 10px #D2D2D2',
            boxShadow:'0 10px 10px #D2D2D2'
        })
    },function () {
       $(this).find('.Det_box').stop();
        $(this).find('.Det_box').animate({bottom: '0'},300);
        $(this).find('.box_bottom').css({
            webkitBoxShadow:'0 5px 5px #ececec',
            msBoxShadow:'0 5px 5px #ececec',
            mozBoxShadow:'0 5px 5px #ececec',
            boxShadow:'0 5px 5px #ececec'
        })
    });
});
/*背景图片切换*/

var $course = $('#course');
var $prev = $('#prev');
var $next = $('#next');
var index = 1;
$next.on('click', function () {
    next();
});
$prev.on('click', function () {
   prev();
});

function next(){
    if (index > 3) {
        index = 0;
    }
    index++;
    $course.find(".page"+index+"").fadeIn(500).siblings().fadeOut(500);
}
function prev(){
    if (index < 2) {
        index = 5;
    }
    index--;
    $course.find(".page"+index+"").fadeIn(500).siblings().fadeOut(500);
}
//背景自动播放
function play(){
    timer = setInterval(function(){
        next();
    },3000);
}
function stop(){
    clearInterval(timer);
}
course.onmouseover = stop;
course.onmouseout = play;
play();