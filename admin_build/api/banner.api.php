<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$mode = $data['mode'];
if($mode == 'default'){
    $sql = "SELECT * FROM `main_banner`";
    $query = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_array($query)){
        array_push($result, array(
            "idx"=>$row['idx'],
            "imgLink"=>$row['banner_route'],
            "Name"=>$row['name'],
            "Activation"=>$row['activation']
        ));
    }
}
else if($mode == 'activation'){
    $idx = $data['idx'];
    $activation = $data['activation'];
    
    $sql = "UPDATE `main_banner` SET `activation` = '$activation' WHERE `idx` = $idx";
    $query = mysqli_query($conn,$sql);
}
else if($mode == 'Delete'){
    $idx = $data['Data']['idx'];
    
    if(unlink('../'.$data['Data']['imgLink'])) {
        $sql = "DELETE FROM `main_banner` WHERE `main_banner`.`idx` = '$idx'";
        $query = mysqli_query($conn,$sql);

      }
      else {
        $resultss = "failed\n";

      }
}
else if(empty($mode)){
    //모드없음(이미지업로드)
    $subImg = $_FILES['bannerImg'];
    $upload_directory = "../banner/";
    $time = date('YmdHi');
    $fileName = $time.$subImg['name'];
    move_uploaded_file($subImg['tmp_name'], $upload_directory.$fileName);
    $DbUploadroute = "banner/".$fileName;
    $fileNames = $subImg['name'];

    $sql = "INSERT INTO `main_banner` (banner_route,name,activation) VALUES ('$DbUploadroute','$fileNames',0)";
    $query = mysqli_query($conn,$sql);

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
        "test"=>$DelRoutes,
        "test2"=>$resultss
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');

?>
