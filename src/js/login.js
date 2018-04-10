require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
require(['jquery'],function($){
    // 加载远程html文件，load取html结构
    $('#footer').load('../index.html #footer .copyRight');
    $('.logBox').on('change','input',function(e){
        switch(e.target.id){
            case 'username':
            // 用户名是否注册验证
                var name = $('#username').get(0).value;
                $.ajax({
                    url:'../api/check.php',
                    data:{'tryname':name},
                    success:function(data){
                        if(data !== 'exsit'){
                            alert('该用户不存在');
                        }
                    }
                })
            break;    
        }
   }).on('click','.login',function(){
            var password = $('#password').val();
            var username = $('#username').val();
            $.ajax({
                 url:'../api/login.php',
                    data:{'username':username,'password':password},
                    success:function(data){
                        if(data == 'success'){
                            alert(username+'您好，欢迎登录飞虎乐购，我们将竭诚为您服务！')
                            location.href = "../index.html";
                        }else{
                             alert('密码输入有误');
                        }
                    }
            })
   })
})