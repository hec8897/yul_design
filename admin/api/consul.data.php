<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);
$result = array();
$mode = $data['mode'];

if($mode == 'lists'){
    $sql = "SELECT * FROM `insert_tb` ORDER by idx desc";
    $query = mysqli_query($conn,$sql);
    
    while($row = mysqli_fetch_array($query)){
        array_push($result, array(
            "idx"=>$row['idx'],
            "reqName"=>$row['reqname'],
            "reqPhone"=>$row['reqphone'],
            "standard"=>$row['standard'],
            "tit"=>$row['title'],
            "reqConsult"=>$row['reqconsult'],
            "reqMemo"=>$row['reqmemo'],
            "reqAddress"=>$row['reqaddress'],
            "InsertDate"=>$row['insertdate'],
            "reqMeasure"=>$row['reqmeasure'],
            "reqDate"=>$row['reqdate']
        ));
    }
}
else if($mode == 'list'){
    $idx = $data['idx'];
    $sql = "SELECT * FROM `insert_tb` WHERE `idx` = $idx";
    $query = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($query);

    array_push($result, array(
        "idx"=>$row['idx'],
        "reqName"=>$row['reqname'],
        "reqPhone"=>$row['reqphone'],
        "standard"=>$row['standard'],
        "tit"=>$row['title'],
        "reqConsult"=>$row['reqconsult'],
        "reqMemo"=>$row['reqmemo'],
        "reqAddress"=>$row['reqaddress'],
        "InsertDate"=>$row['insertdate'],
        "reqMeasure"=>$row['reqmeasure'],
        "reqDate"=>$row['reqdate']
    ));
}
else if($mode == "Delete"){
    $idx = $data['Data'];
    $sql = "DELETE FROM `insert_tb` WHERE `insert_tb`.`idx` = '$idx'";
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
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');

?>