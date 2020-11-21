
    var check_name=/^[A-Za-z]{3,50}$/;
    var check_email=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var da=new Date();
    var yyyy= da.getFullYear(); var mm=da.getMonth()+1; var dd=da.getDate();
    var today=yyyy+"-"+mm+"-"+dd;
    var phoneNO=/^\d{10}$/;
    
function tovalidate(){
    alert("Started");
    var where_=document.forms["yachtsQuery"]["search_destination"].value;
    var when_=document.forms["yachtsQuery"]["season_id_list"].value;
    var sleeps_=document.forms["yachtsQuery"]["guests_from"].value;
    var yachtsType=document.forms["yachtsQuery"]["vessel_type_id"].value;
    var fname_=document.forms["yachtsQuery"]["FirstName"].value;
    var lname_=document.forms["yachtsQuery"]["LastName"].value;
    var email_=document.forms["yachtsQuery"]["EmailId"].value;
    var countryCode_=document.forms["yachtsQuery"]["Country-Code"].value;
    var contactNo_=document.forms["yachtsQuery"]["contactNumber"].value;
   
    if(where_ == "Select")
    {
        alert("Select 'Where*' input field");
        document.forms["yachtsQuery"]["search_destination"].focus();
        return false;
    }
    if(when_ == "Select")
    {
        alert("Select When field");
        document.forms["yachtsQuery"]["season_id_list"].focus();
        return false;
    }
    if(sleeps_ == "guests") {
        alert(" Select Number of Passengers/Guests Field");
        document.forms["yachtsQuery"]["guests_from"].focus();
        return false;
    }
    if(yachtsType == "Select") {
        alert("Select a yacht type field !");
        document.forms["yachtsQuery"]["vessel_type_id"].focus();
        return false;
    }

    
    if(!check_name.test(fname_)) {
        alert("Enter Valid First Name");
        document.forms["yachtsQuery"]["FirstName"].focus();
        return false;
    }
    if(!check_name.test(lname_)) {
        alert("Enter Valid Last Name");
        document.forms["yachtsQuery"]["LastName"].focus();
        return false;
    }

    if(!check_email.test(email_)) {
         alert("Enter Valid E-mail Address");
        document.forms["yachtsQuery"]["EmailId"].focus();
        return false;   
    }
    if(countryCode == "Select")
    {
        alert("Select Your County Code");
        document.forms["yachtsQuery"]["Country-Code"].focus();
        return false;

    }
    alert("Ended");
    return true;
    }
