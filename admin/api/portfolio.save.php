<?php
  include("../inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);

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

    $sql = "INSERT INTO `tb_portfolio` 
    (`activation`, `writer`, `standard`, `address`, 
    `measure`, `floor`, `walls`, `ceiling`, `title`, `main_img`, `desc`) 
    VALUES 
    ('0', '$Writer', '$Standard', '$Address', 
    '$Measure', '$Floor', '$Walls', '$Ceiling', '$ReqTit', '$MainImgRoute', '$desc')";

    $query = mysqli_query($conn,$sql);
    if(isset($query)){
        $phpResult = 'ok';
    }
    else{
        $phpResult = 'no';
    }

    $json =  json_encode(
        array(
            "phpResult"=>$phpResult,
            "sql"=>$sql
    )); 

    echo urldecode($json);
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
  
?>