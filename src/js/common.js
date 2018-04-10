define(function(){
    return{
        randomCode:function(){
            var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';//15
            var res = '';
            for(var i=0;i<6;i++){
                res += str[parseInt(Math.random()*str.length)];
            }
            return res;
        }
    }
})  