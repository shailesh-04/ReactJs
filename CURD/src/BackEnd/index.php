<?php
  header('Access-Control-Allow-Origin: *');
  $op = $_POST['Op'];
  $conn = new mysqli("localhost:3306","root","","test");
  if(!$conn)
    die("Data Base Is Not Connected..");
  else  {
    switch($op){
      
      case "selectAll":
        $query = ("SELECT * FROM `First`");
        $result = $conn->query($query);
        $data = array();
        if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
            $data[] = $row;
          }
        }
        header('Content-Type: application/json');
        echo json_encode($data);
      break;
      
      case "selectId": $id = $_POST['Id'];
        $query = ("SELECT * FROM `First` WHERE Id = $id");
        $result = $conn->query($query);
        $result = $result->fetch_object();
        echo json_encode($result);
      break;
      
      case "new":
        $name = $_POST['Name'];
        $email = $_POST['Email'];
        $mobile = $_POST['Mobile'];
        $query = ("INSERT INTO `First`(Name,Email,Mobile)VALUES('$name','$email',$mobile)");
        if($conn->query($query))
          echo("Data Is Successfuly Store");
        else
            echo("Found Error");
      break;
      
      case "edit":$id = $_POST['Id'];
        $id = $_POST['Id'];
        $name = $_POST['Name'];
        $email = $_POST['Email'];
        $mobile = $_POST['Mobile'];
        $query = ("UPDATE `First` SET Name='$name' , Email='$email' , Mobile=$mobile WHERE Id = $id");
        if($conn->query($query))
           $result = "Successfuly Update Data";
        else
          $result = "Error";
        echo json_encode($result);
      break;
      
      case "delete":$id = $_POST['Id'];
        $query = ("DELETE FROM `First` WHERE Id = $id");
        if($conn->query($query))
          $result ="Successfuly Delete";
        else
          $result ="Not  Delete";
        echo json_encode($result);
      break;
    }//Select
  }//else Connection
  $conn->close();
?>