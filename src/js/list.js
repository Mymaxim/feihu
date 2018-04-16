// require(['config'],function(){
require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
    require(['jquery','common'],function($,common){
        $('#header').load('../index.html #header');
        $('#search').load('../index.html #search');
        $('#footer').load('../index.html #footer');

        var par=location.search;
        par=decodeURI(par);
        var url=par.substring(1);
        url=url.split('=');
        par=url[1];

        var id = '';
        function detailHref(data){
            id +='?'+'id'+'='+data;
            location.href='details.html'+id;
        }

        //分页


        $('.content').html('');
        $.ajax({
            url:'../api/list.php',
            dataType:'json',
            data:{category:par},
            success:function(res){
               $.each($(res),function(idx,item){
                    var cont = $(`
                        <li data-id="${item.id}">
                            <img src="${item.img}"/>
                            <h4> ${item.shortname} </h4>
                            <p>${item.name.slice(0,21)}</p>
                            <span>￥${item.price}</span>
                            <button>快速购买</button>
                            <button>加入购物车</button>
                        </li>
                    `).prependTo('.content');
                })
            }   
        });
        $('.content').on('click','li',function(e){
            detailHref(this.getAttribute('data-id'));
        })
        $('.goods').on('click','img',function(e){
            detailHref($(this).parents('.goods').attr('data-id'));
        })
        $('.goods').on('click','a',function(e){
            detailHref($(this).parents('.goods').attr('data-id'));
        })
        $('.goods').on('click','span',function(e){
            detailHref($(this).parents('.goods').attr('data-id'));
        })

        $('.tabul').children('li').on('click',function(e){
            detailHref($(this).attr('data-id'));
        })
        $('.myNav').on('click','.click',function(e){
            var category = this.getAttribute('data-id');
            location.href='list.html?category='+category;
            
        })

        var li = $('.tab').children();
        $('.tabul')[0].style.display = 'block';
        li[0].classList.add('active');
        for(var i=0;i<li.length;i++){
            li[i].onclick = function (num){
                return function(){
                    for(var j=0;j<li.length;j++){
                        li[j].classList.remove('active');
                        $('.tabul')[j].style.display = 'none';
                    }    
                    li[num].classList.add('active');
                    $('.tabul')[num].style.display = 'block';
                }
            }(i);
        }

        //二级菜单
        $('.second').css("display","none");
        $(`
            <span data-id="phone">手机</span>
            <span data-id="photo">摄影摄像</span>
            <span data-id="mouse">电脑外设</span>
            <span data-id="phone">手机</span>
            <span data-id="photo">摄影摄像</span>
            <span data-id="mouse">电脑外设</span>
        `).appendTo($('.phone').parents('.item').children('div'));
        $(`
            <span data-id="face">面部护理</span>
            <span data-id="hair">洗发护发</span>
            <span data-id="makeup">魅力彩妆</span>
            <span data-id="face">面部护理</span>
            <span data-id="hair">洗发护发</span>
            <span data-id="makeup">魅力彩妆</span>
        `).appendTo($('.makeup').parents('.item').children('div'));
        $(`
            <span data-id="fruits">水果生鲜</span>
            <span data-id="health">营养保健</span>
            <span data-id="food">坚果零食</span>
            <span data-id="wine">酒水</span>
            <span data-id="fruits">水果生鲜</span>
            <span data-id="health">营养保健</span>
            <span data-id="food">坚果零食</span>
            <span data-id="wine">酒水</span>
        `).appendTo($('.food').parents('.item').children('div'));

        $('.sortlist').on('click','.item',function(e){
            $('.item').children('div').css('display','none');
            $(this).children('div')[0].style.display = 'block';
        })
        $('.second').on('click','span',function(){
            var category = this.getAttribute('data-id');
            location.href='list.html?category='+category;
        })
        $('.paixu').find('li')[0].classList.add('active')
        var click = true;
        $('.tit').on('click','li',function(){
            $('.paixu').find('li').map(function(idx,item){
                item.classList.remove('active');
            })
            $(this).addClass('active');
            if(click == true){
                console.log(666)
                $('.content').html('');
                $.ajax({
                    url:'../api/list.php',
                    dataType:'json',
                    data:{category:par,paixu:"up"},
                    success:function(res){
                       $.each($(res),function(idx,item){
                            var cont = $(`
                                <li data-id="${item.id}">
                                    <img src="${item.img}"/>
                                    <h4> ${item.shortname} </h4>
                                    <p>${item.name.slice(0,21)}</p>
                                    <span>￥${item.price}</span>
                                    <button>快速购买</button>
                                    <button>加入购物车</button>
                                </li>
                            `).prependTo('.content');
                        })
                    }   
                });
                return click = false;
            }else{
                console.log(777);
                $('.content').html('');
                $.ajax({
                    url:'../api/list.php',
                    dataType:'json',
                    data:{category:par,paixu:"down"},
                    success:function(res){
                       $.each($(res),function(idx,item){
                            var cont = $(`
                                <li data-id="${item.id}">
                                    <img src="${item.img}"/>
                                    <h4> ${item.shortname} </h4>
                                    <p>${item.name.slice(0,21)}</p>
                                    <span>￥${item.price}</span>
                                    <button>快速购买</button>
                                    <button>加入购物车</button>
                                </li>
                            `).prependTo('.content');
                        })
                    }   
                });
                return click = true;
            }
        })

        var goodslist = common.Cookie('goodslist') || [];
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
            $(".Cart").on('mouseenter','.shopping',function(){
                clearTimeout(timer);
                $('.cart').css("display","block")
            }).on('mouseleave','.shopping',function(){
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
    });
// });