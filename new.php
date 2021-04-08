<!DOCTYPE HTML>  
<html>
<head>
    <title>Pattern using php</title>
</head>
<body>  

<center><h2> Enter The Number of row in pattern</h2></center>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
    <center>Name: <input type="number" name="name" placeholder="Enter the no of row in pattern"></center>
  <br><br>
  <center><input type="submit" name="submit" value="Submit"></center>    
</form>

<?php
$name = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
 function print_pattern($name)
 {
  // Outer loop handles number of rows 
  for ($i = 1; $i <= $name; $i++)
  {
   // inner loop handles indentation
   for($k = $name; $k > $i; $k-- )
   {
    // Print spaces
    echo " ";
   }
   // inner loop handles number of stars 
   for($j = 1; $j <= $i; $j++ )
   {
    // Print characters 
    echo " ".chr(64+$j)."";
	}

   for($j = $i-1; $j >= 1; $j-- ) 
   {
    // Print characters
    echo " ".chr(64+$j)."";
	}
   // go to new line after each row pattern is printed
   echo "<br>\n";
  }
}

?>

<?php
echo "<center><h2>Your Pattern:</h2></center>";
echo "<center>".print_pattern($name)."</center>";  
?>

</body>
</html>
