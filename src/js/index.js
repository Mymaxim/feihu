 $(function(){
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
    // 延时500ms执行点击首页商品跳转到详情页
    $('.rightSid').on('click','li',function(e){
        detailAjax(this.getAttribute('data-id'));
        detailHref(this.getAttribute('data-id'));
    })
});