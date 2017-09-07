/**
 * Created by Administrator on 2016/8/30.
 */
/*登入注册*/
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
$dengRu.on('click', function (e) {
    console.log(e)
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
