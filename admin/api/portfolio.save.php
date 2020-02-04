<?php
  include("../inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);

    $mode = isset($_POST['mode'])?$_POST['mode']:$data['mode'];
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
    $DescImg = $_POST['desc_img'];
    $MainSlider = $_POST['Mainslider'];

    $MainImg = $_FILES['MainImg'];

    function FileUploader($files){
        $file = $files;
        $upload_directory = '../../port_upload/main_img/';
        $time = date('YmdHis');

        $ext_str = "jpg,gif,png,JPG,GIF,PNG";
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

    if($mode == 'new'){
        $MainImgRoute = FileUploader($MainImg);

        $sql = "INSERT INTO `tb_portfolio` 
        (`activation`, `writer`, `standard`, `address`, `main_slider`,
        `measure`, `floor`, `walls`, `ceiling`, `title`, `main_img`, `desc`,`desc_img`) 
        VALUES 
        ('$Activation', '$Writer', '$Standard', '$Address', '$MainSlider',
        '$Measure', '$Floor', '$Walls', '$Ceiling', '$ReqTit', '$MainImgRoute', '$desc','$DescImg')";
        $query = mysqli_query($conn,$sql);
    
    }
    else if($mode == 'update'){
        $MainImgRoute = FileUploader($MainImg);
        if(strlen($MainImgRoute)>10){
            $Route = "`main_img` = '$MainImgRoute',";
        }
        else{
            $Route = "";
        }

        $sql ="UPDATE `tb_portfolio` SET `activation`= '$Activation', `main_slider` = '$MainSlider',
        `writer`='$Writer',`standard`='$Standard', `address` = '$Address', 
        `measure` = '$Measure', `floor` = '$Floor', `walls` = '$Walls' , 
        `ceiling` = '$Ceiling', `title`= '$ReqTit', $Route`desc` = '$desc', `desc_img` = '$DescImg' WHERE `idx`='$idx'";
         $query = mysqli_query($conn,$sql);

    }
    else if($mode == 'NoneSave'){
        //저장안했을때 로직
        $DescImg = $data['Data'];
        for($count = 0 ; $count <count($DescImg) ; $count++){
            unlink("../../".substr($DescImg[$count],20));
            // unlink("../../".substr($DescImg[$count],도메인주소길이));
        }

    }
    else{
        //포트폴리오삭제로직
        $Data = $data['Data'];
        $idx = $data['Data']['idx'];
        if($Data['mode'] == "DataAll"){
            $url = "http://yuldesign.kr/";
            $DescImg = $data['Data']['ImgArray'];
            $JoinUsingImg = "SELECT `main_img` FROM `tb_portfolio` WHERE idx = '$idx'";
            $MainImgquery = mysqli_query($conn,$JoinUsingImg);
            $DeletImg = mysqli_fetch_assoc($MainImgquery);
            $DeletImgTarget = "../../port_upload/main_img/".$DeletImg['main_img'];
            for($count = 0 ; $count <count($DescImg) ; $count++){
                    unlink("../../".substr($DescImg[$count],20));
                    // unlink("../../".substr($DescImg[$count],도메인주소길이));
                }
                unlink($DeletImgTarget);
                $sql = "DELETE FROM `tb_portfolio` WHERE idx = '$idx'";
            }
            else{
                $DeletImgTarget = "../../port_upload/main_img/".$Data['ImgArray'];
                unlink($DeletImgTarget);
                $sql = "UPDATE `tb_portfolio` SET `main_img` = '' WHERE idx = '$idx'";
            }
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
            "phpResult"=>$phpResult,
            "mode"=>$Data,
            "test"=>$Route
           
    ));

    echo urldecode($json);
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
  
?>