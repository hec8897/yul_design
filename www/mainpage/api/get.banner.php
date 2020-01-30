<?php
include("../admin/inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();

$sql = "SELECT * FROM `main_banner` WHERE `activation` = 1";
$query = mysqli_query($conn,$sql);

while($row = mysqli_fetch_array($query)){
    array_push($result, array(
        "idx"=>$row['idx'],
        "imgLink"=>$row['banner_route'],
        "Activation"=>$row['activation']
    ));
}

if(isset($query)){
    $phpResult = 'ok';
}
else{
    $phpResult = 'no';
}

$json =  json_encode(
    array(
        "result"=>$result,
        "phpResult"=>$phpResult
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');

?>