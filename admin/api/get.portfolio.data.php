<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$idx = $data['idx'];


  $sql = "SELECT * FROM `tb_portfolio` WHERE `idx` = '$idx'";
  $query = mysqli_query($conn,$sql);

  while($row = mysqli_fetch_array($query)){
    array_push($result, array(
      "idx"=> $row['idx'],
      "tit"=> $row['title'],
      "Writer"=>$row['writer'],
      "standard"=> $row['standard'],
      "reqAddress"=> $row['address'],
      "reqMeasure"=> $row['measure'],
      "option1"=> $row['ceiling'],
      "option2"=> $row['floor'],
      "option3"=> $row['walls'],
      "Activation"=> $row['activation'],
      "MainImg"=>$row['main_img'],
      "Desc"=>$row['desc'],
      "DescImg"=>$row['desc_img'],
      "MainSlider"=>$row['main_slider']
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