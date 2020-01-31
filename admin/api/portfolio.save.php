<?php
  include("../inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);

    $mode = $_POST['mode'];
    $idx = $_POST['idx'];
    $ReqTit = $_POST['ReqTit'];
    $Activation = $_POST['Activation'];
    $Writer = $_POST['Writer'];
    $Standard = $_POST['Standard'];
    $Address = $_POST['Address'];
    $Measure = $_POST['Measure'];
    $Ceiling = $_POST['Ceiling'];
    $Floor = $_POST['Floor'];
    $Walls = $_POST['Walls'];
    $desc = $_POST['desc'];

    $MainImg = $_FILES['MainImg'];

    function FileUploader($files){
        $file = $files;
        $upload_directory = '../../port_upload/main_img/';
        $time = date('YmdHi');

        $ext_str = "jpg,gif,png";
        $allowed_extensions = explode(',', $ext_str);
        $max_file_size = 5000000;
        //Byte 단위임..
        $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
        $path = $file['name'];
        if($files == null){
            $Results = 'fileNo';
        }
        else if(!in_array($ext, $allowed_extensions)) {
            $Results = 'noExt';
        }
        else if($file['size'] >= $max_file_size){
            $Results = 'huge';
        }
        else if(move_uploaded_file($file['tmp_name'], $upload_directory.$time.$path)) {
                $Results = $time.$path;
        }
        return $Result = $Results;
    }
    $MainImgRoute = FileUploader($MainImg);

    if($mode == 'new'){
        $sql = "INSERT INTO `tb_portfolio` 
        (`activation`, `writer`, `standard`, `address`, 
        `measure`, `floor`, `walls`, `ceiling`, `title`, `main_img`, `desc`) 
        VALUES 
        ('0', '$Writer', '$Standard', '$Address', 
        '$Measure', '$Floor', '$Walls', '$Ceiling', '$ReqTit', '$MainImgRoute', '$desc')";
        $query = mysqli_query($conn,$sql);
    
    }
    else if($mode == 'update'){
        $sql ="UPDATE `tb_portfolio` SET `activation`= '$Activation', 
        `writer`='$Writer',`standard`='$Standard', `address` = '$Address', 
        `measure` = '$Measure', `floor` = '$Floor', `walls` = '$Walls' , 
        `ceiling` = '$Ceiling', `title`= '$ReqTit', `main_img` = '$MainImgRoute', `desc` = '$desc' WHERE `idx`='$idx'";
        $query = mysqli_query($conn,$sql);

    }
    else{
        $idx = $data['Data'];
        $JoinUsingImg = "SELECT `main_img` FROM `tb_portfolio` WHERE idx = '$idx'";
        $MainImgquery = mysqli_query($conn,$JoinUsingImg);
        $DeletImg = mysqli_fetch_assoc($MainImgquery);
        $DeletImgTarget = "../../port_upload/main_img/".$DeletImg['main_img'];

        //메인이미지삭제
        //사용된이미지도삭제....할방법 고민좀
        // $sql = "DELETE FROM `tb_portfolio` WHERE idx = '$idx'";
    }
    
    if(isset($query)){
        $phpResult = 'ok';
    }
    else{
        $phpResult = 'no';
    }

    $json =  json_encode(
        array(
            "phpResult"=>$phpResult,
            "test"=>$DeletImgTarget
    ));

    echo urldecode($json);
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
  
?>