require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
require(['jquery','common'],function($,common){
    $('#header').load('../index.html #header');
    $('#footer').load('../index.html #footer .copyRight');
    
    var goodslist = common.Cookie('goodslist') || [];
    if(typeof goodslist === 'string'){
            goodslist = JSON.parse(goodslist);
        }

    if(goodslist.length === 0){
        $(".tips").show();
        $(".cartlist").hide();
    }else{
        $(".tips").hide();
        $(".cartlist").show();

    }
    $.each($(goodslist),function(idx,item){
        var cont = $(`
                <tr>
                    <td><input type="checkbox" checked/></td>
                    <td><img src="${item.imgurl}" /></td>
                    <td>${item.name}</td>
                    <td>
                        <div class="clearfix">
                            <input type="text" value='${item.qty}'/>
                            <span class="sub"> - </span>
                            <span class="add"> + </span>
                        </div>
                     </td>
                    <td>￥ ${item.price}</td>
                    <td>￥ <span class="sum"></span></td>
                    <td><span class="del">删除</span> | <span>收藏</span></td>
                </tr>
            `).prependTo('tbody');
    });
    //计算价格
    // var sum =
    
    // 按钮
    let $btnAll = $('.all');
    let $table = $('table');
    let $checkboxs = $table.find(':checkbox').not('.all');
    $btnAll.on('click',function(){
        // 勾选复选框
        $checkboxs.prop('checked',this.checked);
    });
    // 检测全选按钮状态
    function checkall(){
        // 获取选中的复选框
        let $checkeds = $checkboxs.filter(':checked');
        console.log($checkeds)
        // 判断勾选数量与checkbox的数量是否相等
        $btnAll.prop('checked',$checkboxs.length===$checkeds.length);
        console.log($checkboxs.length===$checkeds.length );
    }
    checkall();
});