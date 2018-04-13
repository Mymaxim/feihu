// require(['config'],function(){
require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
    require(['jquery'],function($){
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
       
    });
// });