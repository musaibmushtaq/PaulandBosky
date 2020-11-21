<?php
	$conn = mysqli_connect("localhost","root","","airlines");

	if(isset($_POST['Submit-Button']))
	{

	$search_destination=$_POST['search_destination'];
	$season_id=$_POST['season_id_list'];
	$guests_from=$_POST['guests_from'];
	$vessel_type=$_POST['vessel_type_id'];
	$First_Name=$_POST['FirstName'];
	$Last_Name=$_POST['LastName'];
	$Email_Id=$_POST['EmailId'];
	$Country_code=$_POST['Country-code'];
	$Contact_Number=$_POST['contactNumber'];
	$pAulBosKy_mail='connect@paulandbosky.asia';
	$subjectOfMail='New Air Charter Service tuple inserted in the database';
	$message='<b>you have received a request from a new client, please check your database to contact the person </b> ';



	$que = "insert into y_insert
	(y_where,y_when,y_sleeps,y_type,y_fname,y_lname,y_email,y_countrycode,y_contact) values
	('$search_destination','$season_id','$guests_from','$vessel_type','$First_Name','$Last_Name',
	'$Email_Id','$Country_code','$Contact_Number')";
	if(mysqli_query($conn,$que))
	{
		
		echo "<script>alert('Thank You ! we have received your request, our expert shall contact you as soon as possible')</script>";
		mail($pAulBosKy_mail,$subjectOfMail,$message);
		
	}
	}
	
	?>