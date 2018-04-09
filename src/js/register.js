require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
require(['jquery'],function($){
    $('#footer').load('../index.html #footer .copyRight');
    function randomCode(){
        var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';//15
        var res = '';
        for(var i=0;i<6;i++){
            res += str[parseInt(Math.random()*str.length)];
        }
        return res;
    }
    $('.vCode').html(randomCode());
    var checkLength=0;
    $('.reg').on('blur','input',function(e){
        var namecheck;
        // 注册检验
        switch(e.target.id){
            // 用户名非空验证
            case 'name':
                if(!/^\S{1,}$/.test($('#name').get(0).value.trim())){
                    $('#name').next(".tips").html('用户名不能为空').css('display','inline-block');
                }else{
                    // 用户名是否被占用验证
                    var name = $('#name').get(0).value;
                    $.ajax({
                        url:'../api/check.php',
                        data:{'tryname':name},
                        success:function(data){
                            console.log(data);
                            if(data=='exsit'){
                                $('#name').next(".tips").html('该名字太受欢迎，请换一个吧！').css('display','inline-block');
                                    return false;
                            }else{
                                checkLength=1;
                                console.log(checkLength);
                            }
                        }
                    })
                }
                checkLength++;
                break;
            // 密码输入非空及密码强度验证
            case 'pwd':
                if(!/^\S{1,}$/.test($('#pwd').get(0).value.trim())){
                    $('#pwd').next(".tips").html('密码不能为空').css('display','inline-block');
                }else if(/^[a-zA-Z]\w{5,15}$/.test($('#pwd').get(0).value.trim())){
                    checkLength++;
                }else{
                    $('#pwd').next(".tips").html('以字母开头，6-16位的数字、字母、下划线').css('display','inline-block');
                    return false;
                }
                if(/^[0-9]{6,}$/.test($('#pwd').get(0).value.trim())){
                    $('#pwd').next(".tips").html('密码安全性较弱').css('display','inline-block');
                }else if(/^[0-9a-zA-Z]{6,}$/.test($('#pwd').get(0).value.trim())){
                    $('#pwd').next(".tips").html('密码安全性一般').css('display','inline-block');
                }
                // @#$%\^\&\*\!特殊字符
                else if(/^\S[a-zA-Z_]{6,}$/.test($('#pwd').get(0).value.trim())){
                    $('#pwd').next(".tips").html('密码安全性较强').css('display','inline-block');
                }
                break;
                
                // }
            // 校验密码
            case 'confirm':
                if(!/^\S{1,}$/.test($('#confirm').get(0).value.trim())){
                    $('#confirm').next(".tips").html('请再次输入密码').css('display','inline-block');
                }else if($('#confirm').get(0).value.trim()!==$('#pwd').get(0).value.trim()){
                    $('#confirm').next(".tips").html('输入密码不一致').css(
                        'display','inline-block');
                    return false;
                }else{
                    $('#confirm').next(".tips").css('display','none');
                    checkLength++;
                }
                break;
            // 校验邮箱
            case 'email':
                if(!/^\S{1,}$/.test($('#email').get(0).value.trim())){
                    $('#email').next(".tips").html('邮箱不能为空').css('display','inline-block');
                }else if(!/^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test($('#email').get(0).value)){
                 $('#email').next(".tips").html('邮箱格式不正确').css({
                        'display':'inline-block',
                    });
                    return false;
                }else{
                    $('#email').next(".tips").css('display','none');
                    checkLength++;
                }
                break;
            // 校验验证码
            case 'vcode':
                if(!/^\S{1,}$/.test($('#vcode').get(0).value.trim())){
                    $('#vcode').next(".tips").html('验证码不能为空').css('display','inline-block');
                }else if($('#vcode').get(0).value.toLowerCase()!==$('.vCode').get(0).innerText.toLowerCase()){
                    $('#vcode').next(".tips").html('验证码输入不正确').css('display','inline-block');
                    return false;
                }else{
                    $('#vcode').next(".tips").css('display','none');
                    checkLength++;
                }
                break;
        }        
    }).on('click','#getCode',function(){
         // 获取验证码
         $('.vCode').html(randomCode());
    }).on('click','.register',function(){
        $('.vCode').html(randomCode());
        if(checkLength == $('.reg input').length-1 || checkLength>$('.reg input').length-1 && $('#checkfile').get(0).checked){
            var confirmname =$('#name').get(0).value;
            var password = $('#pwd').get(0).value;
            var email = $('#email').get(0).value;
            var referre = $('#referre').get(0).value;
            var actCode = $('#actCode').get(0).value;
            $.ajax({
                url:'../api/register.php',
                data:{'confirmname':confirmname ,'password':password,'email':email},
                success:function(res){
                    if(res == 'success'){
                        $('.reg input').val('');
                       alert(confirmname+',恭喜你成为飞虎乐购会员!')
                      location.href = '../index.html';
                    }
                }
            }) 
        }
    })
})