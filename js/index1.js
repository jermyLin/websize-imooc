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
var mr = document.getElementsByClassName('mr');
var bottom = document.getElementsByClassName('Det_box');

var cc =0;
for (var j = 0; j < mr.length; j++) {
    mr[j].timer2=null;
    //mr[j].x = j;
    mr[j].onmouseover = function () {

        var xy = this.getElementsByClassName('Det_box')[0];
        //xy.timer2 = null;
        //console.log(xy);
        //xy.style.bottom = '40px';
        startmove(xy,40,5);
    };
    mr[j].onmouseout= function () {
        var xy = this.getElementsByClassName('Det_box')[0];
        //xy.timer2 = null;
        //xy.style.bottom = '0';
        startmove(xy,0,-5);
    };
}
function startmove(obj,aa,speed){
    clearInterval(obj.timer2);
    obj.timer2=setInterval(function () {

        /*var speed = cc/8;
         speed =speed>0?Math.ceil(speed):Math.floor(speed);*/
        if (cc==aa) {
            clearInterval(obj.timer2);
        }else{
            cc += speed ;
            obj.style.bottom = cc+'px';
        }
        console.log(cc);
    },30)
}
/*背景图片切换*/
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var num_a = 1;
next.onclick = function () {
    if (num_a > 3) {
        num_a = 0;
    }
    num_a++;
    go();
};
prev.onclick = function () {
    if (num_a < 2) {
        num_a = 5;
    }
    num_a--;
    go();
};
function go(){
    course.style.background = 'url('+'"shouye/banner'+num_a+'.jpg"';
}

//背景自动播放
function play(){
    timer = setInterval(function(){
        next.onclick();
    },3000);
}
function stop(){
    clearInterval(timer);
}
course.onmouseover = stop;
course.onmouseout = play;
play();

/*
 /!*登入注册*!/
 var $head_right = $('.head_right');
 var $login = $head_right.children('.login');
 var $dengRu = $login.find('.eq0');
 var $zhuCe = $login.find('.eq1');
 var $sign = $('#Sign');
 var $sign_input = $sign.find('input');
 var $back_in = $('#back_in');
 var $Sign_content = $('.Sign_content');
 var $Sign_Register = $('.Sign_Register>span');

 //点击登入弹出表单
 $dengRu.on('click', function () {
 $sign.show();
 $back_in.show();
 dengRu();
 $Sign_Register.eq(0).addClass('Sign_on').siblings().removeClass('Sign_on')
 });

 //点击注册弹出表单

 $zhuCe.on('click', function () {
 $sign.show();
 $back_in.show();
 zhuCe();
 $Sign_Register.eq(1).addClass('Sign_on').siblings().removeClass('Sign_on')
 });

 function zhuCe(){
 $Sign_content.hide().next().show();
 }
 function dengRu(){
 $Sign_content.show().next().hide();
 }

 //表单登入注册切换
 $Sign_Register.each(function () {
 $(this).on('click', function () {
 $(this).addClass('Sign_on').siblings().removeClass("Sign_on");
 var index = $(this).index();//获取当前索引值
 if(index==0){
 dengRu()
 }
 else{
 zhuCe();
 }
 $sign_input.val('');//清空文本框内容
 $sign.find('.formtips').remove();
 });
 });

 //点击表单外面隐藏表单
 $back_in.on('click',function () {
 $sign.hide().next().hide();
 $sign_input.val('');
 $sign.find('.formtips').remove();
 });

 //点击X隐藏表单
 $('.Sign_Register>a').on('click',function () {
 $sign.hide().next().hide();
 $sign_input.val('');
 $sign.find('.formtips').remove();
 });

 //验证表单
 $sign_input.blur(function () {
 //var $parent = $(this).parent();
 $(this).next('.formtips').remove();//删除以前的元素，避免重复提醒
 var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;// &&! mobile.test(this.value)
 //验证用户名
 if($(this).is('#pass')){
 if (this.value==''||this.value.length<6) {
 var errorMsg = '请输入6-16位密码，区分大小写，不能使用空格！';
 $(this).after('<span class="formtips onError">'+errorMsg+'</span>');
 } else {
 var okMsg = '输入正确';
 $(this).after('<span class="formtips onSuccess">'+okMsg+'</span>');
 }
 }
 //邮箱验证
 else if($(this).is('#email')){
 if (this.value==''||(this.value!=''&&! /.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {//判断邮箱的格式
 if(this.value.length==11 && mobile.test(this.value)){//验证是否为手机号格式
 okMsg = '输入正确';
 $(this).after('<span class="formtips onSuccess">'+okMsg+'</span>')
 }
 else{
 errorMsg = '请输入正确的邮箱或手机号';
 $(this).after('<span class="formtips onError">'+errorMsg+'</span>');
 }
 }
 else {
 okMsg = '输入正确';
 $(this).after('<span class="formtips onSuccess">'+okMsg+'</span>')
 }
 }
 else if($(this).is('#username')){
 if (this.value==''||(this.value!=''&&! /.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {//判断邮箱的格式
 if(this.value.length==11 && mobile.test(this.value)){
 okMsg = '输入正确';
 $(this).after('<span class="formtips onSuccess">'+okMsg+'</span>')
 }
 else{
 errorMsg = '请输入要注册的邮箱或手机号';
 $(this).after('<span class="formtips onError">'+errorMsg+'</span>');
 }
 } else {
 okMsg = '输入正确';
 $(this).after('<span class="formtips onSuccess">'+okMsg+'</span>')
 }
 }
 else if($(this).is('#code')){
 if (this.value==''||this.value.length<4) {//判断邮箱的格式
 errorMsg = '请输入验证码';
 $(this).after('<span class="formtips onError">'+errorMsg+'</span>');
 } else {
 okMsg = '输入正确';
 $(this).after('<span class="formtips onSuccess">'+okMsg+'</span>')
 }
 }
 }).keyup(function () {//实现输入时就提醒输入是否正确
 $(this).triggerHandler('blur');//triggerHandler只会触发元素绑定的blur事件，不会触发浏览器默认的blur事件
 }).focus(function () {//实现聚焦时就提醒输入是否正确
 $(this).triggerHandler('blur');
 });
 //整体验证
 var $Sign_in = $('.Sign_in');
 var $Register_content = $('.Register_content');
 $Sign_in.eq(0).on('click',function () {
 $Sign_content.find(':input.required').trigger('blur');
 var numError = $('.onError').length;
 if(numError){//等价于numError>0，当numError==0时，if(numError)为false，所以不执行{}里面的表达式
 return false
 }
 alert('登入成功')
 });
 $Sign_in.eq(1).on('click',function () {
 $Register_content.find(':input').trigger('blur');
 var numError = $('.onError').length;
 if(numError){//等价于numError>0，当numError==0时，if(numError)为false，所以不执行{}里面的表达式
 return false
 }
 alert('注册成功，密码已经发到你邮箱')
 });
 */
