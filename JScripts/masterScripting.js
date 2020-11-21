
	var check_name=/^[A-Za-z]{3,50}$/;
	var check_email=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var da=new Date();
	var yyyy= da.getFullYear(); var mm=da.getMonth()+1; var dd=da.getDate();
	var today=yyyy+"-"+mm+"-"+dd;
function submission(){
	
	var fname=document.forms["queryForm"]["FirstName"].value;
	var lname=document.forms["queryForm"]["LastName"].value;
	var email=document.forms["queryForm"]["EmailId"].value;
	var date=document.forms["queryForm"]["Departure-Date"].value;
	var departureDestination=document.forms["queryForm"]["departure-destination"].value;
	var arivalDestination=document.forms["queryForm"]["arival-destination"].value;
	var passengerNumber=document.forms["queryForm"]["Passenger-Number"].value;
	var countryCode=document.forms["queryForm"]["Country-Code"].value;
	
	if(departureDestination=="Select")
	{
		alert("Select Departure Destination Field");
		document.forms["queryForm"]["departure-destination"].focus();
		return false;

	}
 if(arivalDestination=="Select")
	{
		alert("Select Arival Destination Field");
		document.forms["queryForm"]["arival-destination"].focus();
		return false;

	}
	if(date<=today)
	{
		alert("Entered Departure Date is incorrect. It Must Be Atlest From Tomarrow");
		document.forms["queryForm"]["Departure-Date"].focus();
		return false;

	}
	if(!check_name.test(fname)) {
		alert("Enter Valid First Name");
		document.forms["queryForm"]["FirstName"].focus();
		return false;
	}
	if(!check_name.test(lname)) {
		alert("Enter Valid Last Name");
		document.forms["queryForm"]["LastName"].focus();
		return false;
	}
if(passengerNumber=="Select")
	{
		alert("Number of Passengers/Guests Field");
		document.forms["queryForm"]["Passenger-Number"].focus();
		return false;

	}
	if(!check_email.test(email)) {
		 alert("Enter Valid E-mail Address");
		document.forms["queryForm"]["EmailId"].focus();
		return false;	
	}
	if(countryCode=="Select")
	{
		alert("Select Your County Code");
		document.forms["queryForm"]["Country-Code"].focus();
		return false;

	}
	
	return true;
	}
