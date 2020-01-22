<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);

$Date = $data['RequestDate'];
$shareDate = date('Y-m-d');
$phpResult = '';

$PostId = $data['ID'];
$PostPw = $data['Pw'];

$GetIDsql = "SELECT * FROM `user_tb` WHERE `user_id` = '$PostId'";
$GetIdQuery = mysqli_query($conn,$GetIDsql);
$row = mysqli_fetch_array($GetIdQuery);

if(count($row) < 1){
    $phpResult = 'noid';
}
else{
    if($row['user_pw'] == $PostPw){
        $phpResult = 'pwok';
    }
    else {
        $phpResult = 'pwno';
    }
}

$json =  json_encode(
    array(
        "idx"=>$row['idx'],
        "userId"=>$row['user_id'],
        "userName"=>$row['user_name'],
        "userPhone"=>$row['user_phone'],
        "phpResult"=>$phpResult,

    )); 
    echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');



?>