<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'
    $confirmname = isset($_GET['confirmname']) ? $_GET['confirmname'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    $email = isset($_GET['email']) ? $_GET['email'] : null;
    $referre = isset($_GET['referre']) ? $_GET['referre'] : null;
    $actCode = isset($_GET['actCode']) ? $_GET['actCode'] : null;
    // 判断用户名是否存在
    $data = $conn->query("select * from user where username ='$confirmname '");
    if($data->num_rows == 0){
            // 密码md5加密
            $password = md5($password);
            
            // 写入数据sql语句
            $sql = "insert into user(username ,password,email,referre,activityCode) values('$confirmname','$password','$email','$referre','$actCode')";

            $res = $conn->query($sql);

            if($res){
                echo "success";
            }else{
                echo "fail";
            }
        }

?>