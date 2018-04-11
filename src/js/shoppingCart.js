require.config({
    paths:{
        'jquery':'../lib/js/jquery-3.2.1'
    }
 })
require(['jquery','common'],function($,common){
    $('#header').load('../index.html #header');
    $('#footer').load('../index.html #footer .copyRight');
});