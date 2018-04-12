
<?php
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : 1;
    $goods = $conn->query("select * from goodslist where id='$id'");
    $cont = $goods->fetch_all(MYSQLI_ASSOC);
    $goods->close();
    $conn->close();
    echo json_encode($cont,JSON_UNESCAPED_UNICODE);
?>    