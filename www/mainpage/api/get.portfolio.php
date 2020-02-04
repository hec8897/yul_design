<?php
include("../admin/inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$mode = $data['mode'];
  if($mode == "standard"){
    $standard = $data['standard'];

    $sql = "SELECT * FROM `tb_portfolio` WHERE `activation`='1' AND `standard` = '$standard'";
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

    $sql = "SELECT * FROM `tb_portfolio` WHERE `activation`='1' AND `idx` = '$idx'";
    $query = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($query);
        array_push($result, array(
          "idx"=> $row['idx'],
          "tit"=> $row['title'],
          "standard"=> $row['standard'],
          "reqAddress"=> $row['address'],
          "reqMeasure"=> $row['measure'],
          "option1"=> $row['ceiling'],
          "option2"=> $row['floor'],
          "option3"=> $row['walls'],
          "Activation"=> $row['activation'],
          "Desc"=>$row['desc'],
        ));
        $standard = $row['standard'];
        $idxArray = array();
        $idxSql = "SELECT idx FROM `tb_portfolio` WHERE `standard`='$standard'";
        $queryIdx= mysqli_query($conn,$idxSql);

        while($rows = mysqli_fetch_assoc($queryIdx)){
          array_push($idxArray, array(
              "idx"=>$rows['idx']
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
      "Standardidx"=>$idxArray,
      "phpResult"=>$phpResult ,

)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');


?>