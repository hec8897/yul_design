<?php
include("../admin/inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$mode = $data['mode'];
  if($mode == "All"){
    $standard = $data['standard'];

    $sql = "SELECT * FROM `tb_portfolio` ORDER by `idx` ASC limit 6";
    $query = mysqli_query($conn,$sql);

    while($row = mysqli_fetch_array($query)){
        if(strlen($row['main_img']) < 15){
            $MainImg = "http://yuldesign.kr/images/opengraph.jpg";
        }
        else{
            $MainImg = "http://yuldesign.kr/port_upload/main_img/".$row['main_img'];
        }
        array_push($result, array(
          "idx"=> $row['idx'],
          "portfolioStandard"=> $row['standard']."공간",
          "Address"=> $row['address'],
          "portfolioImg"=>$MainImg,
        ));
    }

  }
  else{
    $idx = $data['idx'];
    $sql = "SELECT * FROM `tb_portfolio` WHERE `main_slider`='1' ORDER by `idx`";
    $query = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_array($query)){
      if(strlen($row['main_img']) < 15){
          $MainImg = "http://yuldesign.kr/images/opengraph.jpg";
      }
      else{
          $MainImg = "http://yuldesign.kr/port_upload/main_img/".$row['main_img'];
      }
      array_push($result, array(
        "idx"=> $row['idx'],
        "tit"=> $row['title'],
        "portfolioStandard"=> $row['standard']."공간",
        "Address"=> $row['address'],
        "reqMeasure"=> $row['measure'],
        "portfolioImg"=>$MainImg,
      ));
  }
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