<?php
    require('connect.php');

    $category = isset($_GET['category']) ? $_GET['category'] : 'phone';
    $goods = $conn->query("select * from goodslist where category='$category'");
    $cont = $goods->fetch_all(MYSQLI_ASSOC);
    $goods->close();
    $conn->close();
    echo json_encode($cont,JSON_UNESCAPED_UNICODE);
?>    