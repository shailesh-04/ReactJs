<?php
header('Access-Control-Allow-Origin: *');
  try{
    $conn = new mysqli("localhost:3306","root","","test");
  }
  catch(Exception $e){
    echo($e->getMessage());
  }
  
  
?>