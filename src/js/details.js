require.config({
    paths:{
        jquery:'../lib/js/jquery-3.2.1',
        magnifier:'../lib/js/magnifier'
    },
    shim:{
        magnifier:['jquery']
    }
 })
require(['jquery','common','magnifier'],function($,common){
    $('#header').load('../index.html #header');
    $('#search').load('../index.html #search');
    $('#nav .cont').load('../index.html #nav .bar');
    $('.Img').load('../html/list.html .Img');
    $('#footer').load('../index.html #footer');

    var magnifierConfig = {
        magnifier : "#magnifier1",//最外层的大容器
        width : 350,//承载容器宽
        height : 350,//承载容器高
        moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
        zoom : 3//缩放比例
    };
    var _magnifier = magnifier(magnifierConfig);

    // 根据url发起ajax请求
    var par=location.search;
    par=decodeURI(par);
    var url=par.substring(1);
    url=url.split('=');
    par=url[1];

    $.ajax({
        url:'../api/details.php',
        dataType:'json',
        data:{id:par},
        success:function(res){
           $.each($(res),function(idx,item){
                var imglist=$(`
                    <ul class="clearfix animation03">
                        <li><div class="small-img"><img src="${item.img}"/></div></li>
                        <li><div class="small-img"><img src="${item.img}"/></div></li>
                        <li><div class="small-img"><img src="${item.img}"/></div></li>
                        <li><div class="small-img"><img src="${item.img}"/></div></li>
                        <li><div class="small-img"><img src="${item.img}"/></div></li>
                    </ul>    
                `).appendTo('.magnifier-line');
                var cont = $(`
                        <p class="tit">${item.name}</p>
                        <p class="shortname">${item.shortname}</p>
                        <p class="price clearfix"><span>飞&nbsp;&nbsp;虎&nbsp;&nbsp;价:<em><i>￥</i><strong>${item.price}</strong></em></span><span>商品编号：20611010021${item.id}</span></p>
                    `).prependTo('.goods');
           })
            
            var num = $('.num').text();
            $(".number").on('click span',function(e){
                e.preventDefault();
                if(num<1){
                    num=1;
                }
                if(e.target.className == 'subtract'){
                    num--;
                    console.log('jian');
                    $('.num').html(num);
                }
                if(e.target.className == 'add'){
                    num++;
                    $('.num').html(num);
                    console.log('jia');
                }
            })

            var goodslist = common.Cookie('goodslist') || [];
            if(typeof goodslist === 'string'){
                goodslist = JSON.parse(goodslist);
            }
            // res[0].shortname
            $(".action").on("click",function(e){
                var val = num;
                var idx;
                var has = goodslist.some(function(g,i){
                    idx = i;
                    return g.id === par;
                });
                if(has){
                    goodslist[idx].qty=(goodslist[idx].qty)*1+val*1;
                }else{
                    // 获取商品信息
                    var goods = {
                        id:par,
                        name:res[0].shortname,
                        imgurl:res[0].img,
                        price:res[0].price,
                        // 商品数量
                        qty:val 
                    };
                    goodslist.push(goods);
                }
                if(e.target == $('.join').get(0) || e.target == $('.buyit').get(0)){
                    var now=new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';

                }
                if(e.target == $('.join').get(0)){
                    $('.animate').fadeIn(500).animate({top:"-4px"},500).fadeOut(500).animate({top:'-330px'},500);
                }
                if(e.target == $('.buyit').get(0)){
                    location.href='shoppingCart.html?id'+par;
                }  
            })
        },
    });
});
