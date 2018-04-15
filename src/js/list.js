// require(['config'],function(){
require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
    require(['jquery','common'],function($,common){
        $('#header').load('../index.html #header');
        $('#search').load('../index.html #search');
        $('#nav .cont').load('../index.html #nav .bar');
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
        // var pagination = 9;
        // var pageLen = Math.ceil(res.prod.total/res.prod.qty);
        // page.innerHTML = '';
        // if(pageLen !=1){
        //         for(var i=0;i<pageLen;i++){
        //             var span = document.createElement('span');
        //             span.innerText = i+1;
        //             if(i==res.prod.page-1){
        //                 span.className = 'active';
        //             }
        //             page.appendChild(span);
        //             content.appendChild(page);
        //         }  
        //     }
        //     xhr.open('get','../api/products.php?qty='+qty+'&classes='+classes,true);

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

    });
// });