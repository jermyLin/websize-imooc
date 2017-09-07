/**
 * Created by Administrator on 2016/8/9.
 */

/*课程区文字盒子伸缩*/

/*var course_detail = document.getElementsByClassName('course_detail');
var bottom = document.getElementsByClassName('Det_box');
var box_content = document.getElementsByClassName('box_content');
for (var i = 0; i < bottom.length; i++) {
    course_detail[i].x = i;
    course_detail[i].onmouseover = function () {
        bottom[this.x].style.bottom = '60px';
        box_content[this.x].style.display = "block";
    };
    course_detail[i].onmouseout= function () {
        bottom[this.x].style.bottom = '0';
        box_content[this.x].style.display = "none";
    };
}*/

//jquery方法：
var $course_detail = $('.course_detail');
$course_detail.each(function () {
    $(this).hover(function () {
        var $bottom = $(this).find('.box_bottom');
        var $box_content = $(this).find('.box_content');
        $(this).find('.Det_box').stop();//stop为立即停止当前动画，如果接下来还有动画会以当前的状态完成接下来的动画
        $(this).find('.Det_box').animate({bottom: '60px'},300);
        $box_content.show();
        $bottom.css({
            webkitBoxShadow:'0 10px 10px #D2D2D2',
            msBoxShadow:'0 10px 10px #D2D2D2',
            mozBoxShadow:'0 10px 10px #D2D2D2',
            boxShadow:'0 10px 10px #D2D2D2'
        })
    },function () {
        var $bottom = $(this).find('.box_bottom');
        var $box_content = $(this).find('.box_content');
        $(this).find('.Det_box').stop();
        $(this).find('.Det_box').animate({bottom: '0'},300);
        $box_content.hide();
        $bottom.css({
            webkitBoxShadow:'0 5px 5px #ececec',
            msBoxShadow:'0 5px 5px #ececec',
            mozBoxShadow:'0 5px 5px #ececec',
            boxShadow:'0 5px 5px #ececec'
        })
    });
});


/*名师列表盒子伸缩*/

/*var star_item = document.getElementsByClassName('star-item')[0];
var star_list = star_item.getElementsByTagName('li');
var tc_info = document.getElementsByClassName('tc_info');
var tc_intro = document.getElementsByClassName('tc_intro');
for(var j = 0 ; j<star_list.length; j++){
    star_list[j].x = j;
    star_list[j].onmouseover = function () {
        this.style.marginTop ="-100px";
        tc_intro[this.x].style.display = "block";

    };
    star_list[j].onmouseout = function () {
        this.style.marginTop ="0";
        tc_intro[this.x].style.display = "none";
    };
}*/

//jquery方法：

var $star_item = $('.star-item');
var $star_list = $star_item.find('li');
$star_list.each(function () {
    $(this).hover(function () {
        /*var $bottom = $(this).find('.box_bottom');
        var $box_content = $(this).find('.box_content');*/
        $(this).stop();//stop为立即停止当前动画，如果接下来还有动画会以当前的状态完成接下来的动画
        $(this).animate({marginTop: '-100px'},300);
        $(this).find('.tc_intro').show();
    },function () {
        $(this).stop();//stop为立即停止当前动画，如果接下来还有动画会以当前的状态完成接下来的动画
        $(this).animate({marginTop: '0'},300);
        $(this).find('.tc_intro').hide();
    });
});


/*底部轮播*/

var $Carousel_detail = $('.Carousel_detail');
var $oul = $Carousel_detail.find('ul');
var $oli = $oul.find('li');

var index = 1;
var val =5;

/*点击上下页切换图片*/

$('#next').click(function () {
    next()
});
$('#prev').click(function () {
    prev();
});
function next(){
    if(!$oli.children().is(':animated')){
        $oli.children().eq(index-1).
            css({backgroundColor:'#f1f1f1',zIndex:val-1,boxShadow:'0 5px 8px #bbb'})
            .animate({
                height: '210px',
                left: '400px',
                top: '50px'
            },300);
        $oli.children().eq(index)
            .css({backgroundColor:'#fff',zIndex:val,boxShadow:'0 10px 15px #ccc'})
            .animate({
                height: '240px',
                left: '200px',
                top: '35px'
            },300);
        $oli.children().eq(index+1)
            .css({zIndex:val-1});

        if(index==3){
            index=-2;
        }
        $oli.children().eq(index+2)
            .css({backgroundColor:'#f1f1f1',zIndex:val-2,boxShadow:'0 5px 8px #bbb'})
            .animate({
                height: '210px',
                left: '0',
                top: '50px'
            },300);
        $oli.children().eq(index+3)
            .css({zIndex:val-2});
        //console.log(index);
        index++;
    }
}
function prev() {
    if(index==3){
        index=-2;
    }
    if (!$oli.children().is(':animated')) {
        $oli.children().eq(index - 1).
            css({backgroundColor:'#f1f1f1',zIndex:val-1,boxShadow:'0 5px 8px #bbb'})
            .animate({
                height: '210px',
                left: '0',
                top: '50px'
            },300);
        $oli.children().eq(index)
            .css({backgroundColor: '#f1f1f1', zIndex: val - 2, boxShadow: '0 5px 8px #bbb'})
            .animate({
                height: '210px',
                left: 'o',
                top: '50px'
            }, 300);
        $oli.children().eq(index + 1)
            .css({backgroundColor: '#f1f1f1', zIndex: val - 2, boxShadow: '0 5px 8px #bbb'})
            .animate({
                height: '210px',
                left: '400px',
                top: '50px'
            }, 300);
        $oli.children().eq(index + 2)
            .css({backgroundColor: '#f1f1f1', zIndex: val - 1, boxShadow: '0 5px 8px #bbb'})
            .animate({
                height: '210px',
                left: '400px',
                top: '50px'
            }, 300);
        $oli.children().eq(index + 3)
            .css({backgroundColor: '#fff', zIndex: val, boxShadow: '0 10px 15px #ccc'})
            .animate({
                height: '240px',
                left: '200px',
                top: '35px'
            }, 300);
        index--;
        if(index==-4){
            index=1;
        }
    }
}
//自动轮播效果

$oli.hover(function () {
    clearInterval(timer);
}, function () {
    play();
});
function play(){
    timer = setInterval(function(){
        next();
    },3000);
}
play();//加载页面就开始执行自动轮播
