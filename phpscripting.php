<?php
$conn = mysqli_connect("localhost","root","","airlines");

	if(isset($_POST['Submit-Button']))
	{
		$return=$_POST['inputToggle'];
	$departure_destination=$_POST['departure-destination'];
	$arival_destination=$_POST['arival-destination'];
	$Departure_Date=$_POST['Departure-Date'];
	$Additional_Detail=$_POST['Additional-Detail'];
	$First_Name=$_POST['FirstName'];
	$Last_Name=$_POST['LastName'];
	$Passenger_Number=$_POST['Passenger-Number'];
	$Email_Id=$_POST['EmailId'];
	$Country_code=$_POST['Country-code'];
	$Contact_Number=$_POST['Contact-Number'];
	$Radio_button=$_POST['Radio'];
	$pAulBosKy_mail='connect@paulandbosky.asia';
	$subjectOfMail='New Air Charter Service tuple inserted in the database';
	$message='<b>you have received a request from a new client, please check your database to contact the person </b> ';

	
	if($return=='YES'){
		$return='YES';
	} else { $return='NO';}
	$que = "insert into a_insert
	(a_return,a_departure,a_arival,a_date,a_detail,a_name,a_lname,a_number,a_email,a_countrycode,a_contact,a_update) values
	('$return','$departure_destination','$arival_destination','$Departure_Date','$Additional_Detail','$First_Name','$Last_Name',
	'$Passenger_Number','$Email_Id','$Country_code','$Contact_Number','$Radio_button')";
	if(mysqli_query($conn,$que))
	{
		
		echo "<script>alert('Thank You for choosing us! Our Charter Expert shall get in touch with you as soon as possible')</script>";
		mail($pAulBosKy_mail,$subjectOfMail,$message);
	}
	}
	?>