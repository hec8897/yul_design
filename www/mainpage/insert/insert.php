<?php
include("../admin/inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);

$reqStandard = $data['reqStandard'];
$reqName = $data['reqName'];
$reqPhone = $data['reqPhone'];
$reqMemo = $data['reqMemo'];
$reqAddress = $data['reqAddress'];
$reqMeasure = $data['reqMeasure'];
$reqDate = $data['reqDate'];
$reqTit = $data['reqTit'];
$time = date('Y-m-d H:i');


$sql = "INSERT INTO `insert_tb` (`reqname`, `reqphone`, `standard`, 
`title`, `reqconsult`, `reqaddress`, `reqmemo`, `reqmeasure`, `reqdate`, `insertdate`) 
VALUES ('$reqName', '$reqPhone', '$reqStandard', 
'$reqTit ', '', '$reqAddress', '$reqMemo', '$reqMeasure', '$reqDate', '$time')";

$query = mysqli_query($conn,$sql);


if(isset($query)){
    $phpResult = 'ok';
}
else{
    $phpResult = 'no';
}

$json =  json_encode(
    array(
        "phpResult"=>$phpResult
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');

?>