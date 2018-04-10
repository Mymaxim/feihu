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
    });
// });