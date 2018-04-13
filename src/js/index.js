 require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1',
    }
 })
    require(['jquery','common'],function($,common){
    //轮播图
    var items = $('#carousel').children();
    var len = items.length;
    var index = 0;
    var str = 0;
    var dots =  $('.dot').children();
    var timer;
     //自动播放函数autoPlay()
     
    function autoPlay(){
        $(items[index]).fadeIn(1000);
        function play(){
            $(dots).removeClass("active");
            if(index >=0 & index < len-1){
                $(items[index]).fadeOut(1000);
                index++;
                $(items[index]).fadeIn(1000);
                $(dots[index]).addClass("active");
            }else{
                $(items[index]).fadeOut(1000);
                index=0;                             
                $(items[index]).fadeIn(1000);
                $(dots[index]).addClass("active");
            };
            str = index;
        }
         
        timer = setInterval(play,3000);   
    }
    autoPlay();
    $('#banner').mouseover(function(){
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    }).mouseout(function(){
        autoPlay();
        $(".left").hide();
        $(".right").hide();
    });
     
    //点击左侧按钮的函数
    $(".left").click(function(){
        clearInterval(timer);
        $(dots).removeClass("active");
        if(str == 0){
            $(items[str]).fadeOut(1500);
            str = len-1;
            $(items[str]).fadeIn(1500);
            $(dots[str]).addClass("active");
            index = str;
             
        }else{
            $(items[str]).fadeOut(1500);
            str --;
            $(items[str]).fadeIn(1500);
            $(dots[str]).addClass("active");
            index = str;
        }
    });
    //点击右侧按钮的函数
    $(".right").click(function(){
        clearInterval(timer);
        $(dots).removeClass("active");
        if(str == len-1){
            $(items[str]).fadeOut(1500);
            str = 0;
            $(items[str]).fadeIn(1500);
            $(dots[str]).addClass("active");
            index = str;
        }else{
            $(items[str]).fadeOut(1500);
            str ++;
            $(items[str]).fadeIn(1500);
            $(dots[str]).addClass("active");
            index = str;
        }
    })
     //小圆点
    $(".dot span").click(function(){
        clearInterval(timer);
        var num = $(this).index();
        $(dots).removeClass("active");
        $(dots[num]).addClass("active");
        $(items).fadeOut(1500);
        $(items[num]).fadeIn(1500);
        index = num;
    })

    $.get("../api/index.php",function(data){
        var res = JSON.parse(data);
        $(".msGoods").append(res.map(function(item){
            return`<li>
                <img src='${item.img}'>
                <p>${item.name}</p>
                <span>￥${item.sale} <del>${item.price}</del></span>
            </li>`
        }).join(""))
    })

    var goodslist = common.Cookie('goodslist') || [];
    if(typeof goodslist === 'string'){
        goodslist = JSON.parse(goodslist);
    }

    //写入头部购物车
    if(goodslist.length != 0){
        $.each($(goodslist),function(idx,item){
            var cont = $(`
                    <tr data-id="${item.id}">
                        <td><input type="checkbox" checked/></td>
                        <td><img src="${item.imgurl}" /></td>
                        <td>${item.name}</td>
                        <td>
                            <div class="clearfix">
                                <input type="text" value='${item.qty}' class="qty"/>
                                <span class="sub"> - </span>
                                <span class="add"> + </span>
                            </div>
                         </td>
                        <td>￥<span class='price'> ${item.price}<span></td>
                        <td>￥ <span class="sum">${item.price*item.qty}</span></td>
                        <td><span class="del">删除</span> | <span>收藏</span></td>
                    </tr>
                `).prependTo('tbody');
        });      
    }    

    //秒杀倒计时
    //   var d = new Date();
    //   var year = d.getFullYear();
    //   var month = d.getMonth()+1;
    //   var date = d.getDate()+1;
    //   var starttime = new Date("2018/4/8");
    //   setInterval(function () {
    //   var nowtime = new Date();
    //   var time = starttime - nowtime;
    //   var day = parseInt(time / 1000 / 60 / 60 / 24);
    //   var hour = parseInt(time / 1000 / 60 / 60 % 24);
    //   var minute = parseInt(time / 1000 / 60 % 60);
    //   var seconds = parseInt(time / 1000 % 60);
    //   $('.timespan').html(hour + ":" + minute + ":" + seconds);
    // }, 1000);
  
    var par='';
    // 点击页面任意商品位置实现跳转到详情页ajax请求
    function detailAjax(data){
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{id:data},
            success:function(res){
                console.log(res);
            },
        })
    }
    function detailHref(data){
        par+='?'+'id'+'='+data;
        location.href='html/details.html'+par;
    }

    function Ajax(data){
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{category:data},
            success:function(res){
                console.log(res);
            },
        })
    }
    function Href(data){
        par+='?'+'category'+'='+data;
        location.href='html/list.html'+par;
    }


    // 点击首页商品跳转到详情页
    $('.rightSid').on('click','li',function(e){
        detailAjax(this.getAttribute('data-id'));
        detailHref(this.getAttribute('data-id'));
    })

    var Timer;
    $('.menu').on('mouseover','a',function(e){
        clearTimeout(Timer);
        if(e.target.parentNode.className == 'phone'){
            $('.item').html('');
            var item = $(`
                    <span data-id="phone">手机</span>
                    <span data-id="photo">摄影摄像</span>
                    <span data-id="mouse">电脑外设</span>
                    <span data-id="phone">手机</span>
                    <span data-id="photo">摄影摄像</span>
                    <span data-id="mouse">电脑外设</span>
                `).appendTo(".item");
            $('.item').css({"display":"block","top":"40px"});
        }else if(e.target.parentNode.className == 'makeup'){
            $('.item').html('');
            var item = $(`
                    <span data-id="face">面部护理</span>
                    <span data-id="hair">洗发护发</span>
                    <span data-id="makeup">魅力彩妆</span>
                    <span data-id="face">面部护理</span>
                    <span data-id="hair">洗发护发</span>
                    <span data-id="makeup">魅力彩妆</span>
                `).appendTo(".item");
            $('.item').css({"display":"block","top":"72px"});
        }else if (e.target.parentNode.className == 'food'){
            $('.item').html('');
            Timer = $(`
                    <span data-id="fruits">水果生鲜</span>
                    <span data-id="health">营养保健</span>
                    <span data-id="food">坚果零食</span>
                    <span data-id="wine">酒水</span>
                    <span data-id="fruits">水果生鲜</span>
                    <span data-id="health">营养保健</span>
                    <span data-id="food">坚果零食</span>
                    <span data-id="wine">酒水</span>
                `).appendTo(".item");
            $('.item').css({"display":"block","top":"104px"});
        }else{
            $('.item').html('');
            var item = $(`
                    <p>数据告急！！！</p>
                    <p>数据告急！！！</p>
                    <p>数据告急！！！</p>
                `).appendTo(".item");
            $('.item').css({"display":"block","top":"136px"});
        }

    }).on('mouseout','li',function(e){
        Timer = setTimeout(function(){
            $('.item').css("display","none");
        },500)
    })
    $('.item').on('mouseover',function(){
        clearTimeout(Timer);
    });
    $('.item').on('click','span',function(){
        Ajax(this.getAttribute('data-id'));
        Href(this.getAttribute('data-id'));
    })

});