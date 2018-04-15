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
        },
        writeIn:function(){
            function get(key){
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
            }
            var goodslist = get('goodslist') || [];
            if(typeof goodslist === 'string'){
                goodslist = JSON.parse(goodslist);
            }
            if(goodslist.length == 0){
                $('.cart').css("display","none")
            }else{
                $('.number').text(goodslist.length);
                $('.num').text(goodslist.length);
                $.each($(goodslist),function(idx,item){
                    var cont = $(`
                        <img src="${item.imgurl.slice(2)}"/>
                            <div class="txt fr">
                                <p>${item.name}</p>
                                <p class="pri">￥${item.price}</p>
                                <p class="del">删除</p>
                            </div>
                    `).prependTo('.myCart');
                });
                var mon =  $('.pri');
                var val = 0;
                var res = mon.map(function(idx,item){
                    return val += item.innerText.slice(1)*1;    
                });
                // eval(res.join('+'));
                $('.money').html('￥'+res.slice(-1)[0].toFixed(2));

                var timer;
                $(".shopping").on('mouseenter',function(){
                    console.log(8888)
                    clearTimeout(timer);
                    $('.cart').css("display","block")
                }).on('mouseleave',function(){
                    timer = setTimeout(function(){
                        $('.cart').css("display","none");
                    },300);
                })
                $(".cart").on('mouseenter',function(){
                    clearTimeout(timer);
                    $('.cart').css("display","block")
                }).on('mouseleave',function(){
                    $('.cart').css("display","none");
                })
            }
        }
    }
})  