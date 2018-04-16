<?php
    require('connect.php');

    $category = isset($_GET['category']) ? $_GET['category'] : 'phone';
    $paixu = isset($_GET['paixu']) ? $_GET['paixu'] : '';
    if($paixu == 'up'){
        $goods = $conn->query("select * from goodslist where category='$category' order by price");
    }else if($paixu == 'down'){
        $goods = $conn->query("select * from goodslist where category='$category' order by price desc");
    }else{
        $goods = $conn->query("select * from goodslist where category='$category'");   
    }
    $cont = $goods->fetch_all(MYSQLI_ASSOC);
    $goods->close();
    $conn->close();
    echo json_encode($cont,JSON_UNESCAPED_UNICODE);
?>    