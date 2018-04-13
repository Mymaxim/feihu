require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
require(['jquery','common'],function($,common){
    $('#header').load('../index.html #header');
    $('#footer').load('../index.html #footer .copyRight');
    
    //获取cookie
    var goodslist = common.Cookie('goodslist') || [];
    judge();
    if(typeof goodslist === 'string'){
        goodslist = JSON.parse(goodslist);
    }

    //判断购物车状态    
    function judge(){
        if(goodslist.length == 0){
            $(".tips").show();
            $(".cartlist").hide();
        }else{
            $(".tips").hide();
            $(".cartlist").show();
        }  
    }

    //写入数据    
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

    // 计算总金额
    var $table = $('table');
    var $checkboxs = $table.find(':checkbox').not('.all');  
    function count(){
        var total = 0;
        $('.newTotal').html(total);
        var checkboxs = $checkboxs.filter(':checked'); 
        tr = checkboxs.parents('tr')
        $.each(tr,function(idx,item){
            total += item.children[5].children[0].innerText*1;
        });
        $('.newTotal').html(total);
    }

    //更新cookie
    // function updata(res){
    //     var now=new Date();
    //     now.setDate(now.getDate()+7);
    //     document.cookie='res='+JSON.stringify(res)+';expires='+now.toUTCString()+';path=/';
    // }     

    //确认删除函数
    function confirmDel() { 
        var msg = "您确定要删除该商品吗"; 
        if (confirm(msg)){ 
          return true; 
        }else{ 
          return false; 
        } 
    }

    //-按钮 
    $('tbody').on('click','.sub',function(){
        var val = $(this).prev(':input').val()*1;
        val--;
        if(val<1){
            var res = confirmDel();
            if(res){
                $.each($(goodslist),(idx,item)=>{
                    if(item.id == $(this).parents('tr').attr("data-id")){
                        goodslist.splice(idx,1);
                        var now=new Date();
                        now.setDate(now.getDate()+7);
                        document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';
                    }
                })
                $(this).parents('tr').remove();
                judge();
                count();
            }else{
                val = 1;
            }
        }
        
        $(this).prev(':input').val(val);
        var sum = $(this).parents('td').siblings().children('.sum');
        var price = $(this).parents('td').siblings().children('.price').text();
        sum.text(price*val);
        count();
        $.each($(goodslist),(idx,item)=>{
            if(item.id == $(this).parents('tr').attr("data-id")){
                goodslist[idx].qty = val;
                var now=new Date();
                now.setDate(now.getDate()+7);
                document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';
            }
        })
    })

    //+按钮
    $('tbody').on('click','.add',function(){
        var val = $(this).prevAll(':input').val()*1;
        val++;
        $(this).prevAll(':input').val(val);
        var sum = $(this).parents('td').siblings().children('.sum');
        var price = $(this).parents('td').siblings().children('.price').text();
        sum.text(price*val)
        count();
        $.each($(goodslist),(idx,item)=>{
            if(item.id == $(this).parents('tr').attr("data-id")){
                goodslist[idx].qty = val;
                var now=new Date();
                now.setDate(now.getDate()+7);
                document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';
            }
        })
    })
    
    // 全选按钮
    var $btnAll = $('.all');
    $btnAll.on('click',function(){
        // 勾选复选框
        $checkboxs.prop('checked',this.checked);
        count();
    });
    // 检测全选按钮状态
    function checkall(){
        // 获取选中的复选框
        var $checkeds = $checkboxs.filter(':checked');
        // 判断勾选数量与checkbox的数量是否相等
        $btnAll.prop('checked',$checkboxs.length===$checkeds.length);
    }
    checkall();

    //点击复选框改变价格
    $('tbody').on('click',':checkbox',function(){
        count();
        checkall();
    })
    //清空购物车.
    $(".handleCart").on('click','.clearCart',function(){
        $("tbody").children("tr").remove();
        goodslist = [];
        document.cookie='goodslist='+JSON.stringify(goodslist)+';path=/';
        $(".tips").show();
        $(".cartlist").hide();
    })

    //删除按钮
    if($('.del') != undefined){
        $('tbody').on('click','.del',function(e){
            $.each($(goodslist),(idx,item)=>{
                if(item.id == $(this).parents('tr').attr("data-id")){
                    goodslist.splice(idx,1);
                    var now=new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';
                }
            })
            $(this).parents('tr').remove();
            judge();
        })
    }    
    count();
});