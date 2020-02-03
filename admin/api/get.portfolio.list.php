<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$mode = $data['mode'];

if($mode == "search"){
  if(isset($data['BackDate'])){
    if(isset($data['SearchValue'])){

    }
    else{
      $sql = 'SELECT * FROM `tb_portfolio`';
    }
  }
  else{
    $SearchValue = $data['SearchData']['SearchValue'];
    $sql = "SELECT * FROM `tb_portfolio` WHERE `standard` = '$SearchValue'";
  }
}
else{
  $sql = 'SELECT * FROM `tb_portfolio`';
}
  $query = mysqli_query($conn,$sql);

  while($row = mysqli_fetch_array($query)){
    array_push($result, array(
      "idx"=> $row['idx'],
      "tit"=> $row['title'],
      "standard"=> $row['standard'],
      "reqAddress"=> $row['address'],
      "reqMeasure"=> $row['measure'],
      "option1"=> $row['ceiling'],
      "option2"=> $row['floor'],
      "option3"=> $row['walls'],
      "Activation"=> $row['activation']
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
      "phpResult"=>$phpResult,
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');


?>