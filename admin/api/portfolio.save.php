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

    function FileUploader($files,$Result){
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

    $sql = "INSERT INTO `tb_portfolio` (`activation`, `writer`, `standard`, `address`, 
    `measure`, `floor`, `walls`, `ceiling`, `title`, `main_img`, `desc`, `main_img`,`desc`) 
    VALUES ('0', '$Writer', '$Standard', '$Address', '$Measure', '$Floor', '$Walls', '$Ceiling', '$ReqTit', '$MainImgRoute', '$desc');"

    // if($mode == 'new'){
    //     $UploadResult1 = FileUploader($subImg,$UploadResult1,'sub');
    //     $UploadResult2 = FileUploader($MainImg,$UploadResult2,'main');
    //     $fileRoute1 = FileRoutRetrun($UploadResult1);
    //     $fileRoute2 = FileRoutRetrun($UploadResult2);
    //     $sql = "INSERT INTO `works_tb` (writer,activation,port,customer,class,title,sub_tit,font_color,site_link,project,main_desc,period,img_route,main_img_route) 
    //     VALUES ('$reqWriter','0','0','$reqCustomer','$Class','$reqTit','$reqSubTit','$fontColor','$siteLink''$reqProjectDesc','$mainDesc','$reqPeriod',
    //     '$fileRoute1','$fileRoute2')";
    // }
    // else if($mode =='update'){
    //     $UploadResult1 = FileUploader($subImg,$UploadResult1,'sub');
    //     $UploadResult2 = FileUploader($MainImg,$UploadResult2,'main');

    //     $fileRoute1 = FileRoutRetrun($UploadResult1);
    //     $fileRoute2 = FileRoutRetrun($UploadResult2);

    //     if($fileRoute1 == ""){
    //         $fileQuery1 = "";

    //     }
    //     else{
    //         $fileQuery1 = "`img_route`='$fileRoute1',";

    //     }
    //     if($fileRoute2 == ""){
    //         $fileQuery2 = "";
    //     }
    //     else{
    //         $fileQuery2 = "`main_img_route`='$fileRoute2',";
    //     }
    //     $sql = "UPDATE `works_tb` SET `writer` ='$reqWriter', `activation` = '$Activation', `customer` ='$reqCustomer',
    //      `class` = '$Class', `title` = '$reqTit', `sub_tit` = '$reqSubTit', `font_color` = '$fontColor', `site_link` = '$siteLink', `project` = '$reqProjectDesc', `period` = '$reqPeriod',
    //      $fileQuery1 $fileQuery2 `port`='$port' WHERE idx = '$idx'";
    // }
    // else if($mode == 'Activation'){
        
    // }

    $query = mysqli_query($conn,$sql);
    if(isset($query)){
        $phpResult = 'ok';
    }
    else{
        $phpResult = 'no';
    }

    $json =  json_encode(
        array(
            "file1"=>$fileRoute1,
            "phpResult"=>$phpResult,
    )); 
    echo urldecode($json);
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
  
?>