define(function(){
    return{
        randomCode:function(){
            var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';//15
            var res = '';
            for(var i=0;i<6;i++){
                res += str[parseInt(Math.random()*str.length)];
            }
            return res;
        },
        Cookie:function(key){
            // 先获取所有cookie
            var cookies = document.cookie;
            if(cookies.length === 0){
                return '';
            }
            // 拆分每一个cookie
            cookies = cookies.split('; ');
            for(var i=0;i<cookies.length;i++){
                // 拆分key,value
                var arr = cookies[i].split('=');
                if(arr[0] === key){
                    return arr[1];
                }
            }
        },
        set:function(key,value,date,path){
            var str = key + '=' + value;
            // 有效期
            if(date){
                str += ';expires=' + date.toUTCString();
            }
            // 路径
            if(path){
                str += ';path='+path;
            }

            document.cookie = str;
        }
    }
})  