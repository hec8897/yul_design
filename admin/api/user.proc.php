<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$mode = $data['mode'];

$UpdateID = $data['chId'];
$UpdatePw = $data['chPw'];
$UpdatePhone = $data['chPhone'];
$idx = $data['idx'];

$sql = "UPDATE `user_tb` SET `user_id`='$UpdateID' , `user_pw` = '$UpdatePw', `user_phone` = '$UpdatePhone' WHERE `idx` = '$idx'";
$query = mysqli_query($conn,$sql);

if(isset($query)){
    $phpResult = 'ok';
}
else{
    $phpResult = 'no';
}
$json =  json_encode(
    array(
        "result"=>$data,
        "phpResult"=>$phpResult
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');
?>