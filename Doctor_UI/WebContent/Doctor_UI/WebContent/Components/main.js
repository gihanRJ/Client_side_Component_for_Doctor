/**
 * http://usejsdoc.org/
 */

$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//SAVE ============================================ 
$(document).on("click", "#btnSave", function(event) { 
	
 	// Clear status msges------------- 
 	$("#alertSuccess").text(""); 
 	$("#alertSuccess").hide(); 
 	$("#alertError").text(""); 
 	$("#alertError").hide(); 
 
 	// Form validation----------------  	
 	var status = validateDoctorForm(); 
 
 	// If not valid-------------------  	
 	if (status != true) 
 	{ 
 	 	$("#alertError").text(status); 
 	 	$("#alertError").show(); 
 	 	return; 
 	} 
 
 	// If valid-----------------------  	
 	var doctor = getDoctorCard($("#txtName").val().trim(),   	  	 	 	 	
 			$("#txtContactNo").val().trim(),
 			$("#txtDOB").val().trim(),
 			$("#txtE_mail").val().trim(),
 			$("#txtgender").val().trim(),
 			$("#txtnic").val().trim());
 	 	 	 
 
 	$("#colDoctors").append(doctor); 
 	 
 	$("#alertSuccess").text("Saved successfully."); 
 	$("#alertSuccess").show(); 
 	 
 	$("#formDoctor")[0].reset(); 
}); 

//REMOVE========================================== 
$(document).on("click", ".remove", function(event) { 
 	$(this).closest(".doctor").remove(); 
 	 
 	$("#alertSuccess").text("Removed successfully."); 
 	$("#alertSuccess").show(); 
});

//CLIENT-MODEL================================================================= 
function validateDoctorForm() 
{ 
 	// NAME 
 	if ($("#txtName").val().trim() == "") 
 	{ 
 	 	return "Insert doctor name."; 
 	} 
 
 	// Contact Number 
 	if ($("#txtContactNo").val().trim() == "") 
 	{ 
 	 	return "Insert Contact Number."; 
 	} 
 
 	// DOB 
 	if ($("#txtDOB").val().trim() == "") 
 	{ 
 	 	return "Insert Date of Birth."; 
 	} 
 	
 // Email 
 	if ($("#txtE_mail").val().trim() == "") 
 	{ 
 	 	return "Insert Email."; 
 	}
 	
 // Gender 
 	if ($("#txtgender").val().trim() == "") 
 	{ 
 	 	return "Insert Gender."; 
 	}
 	
 // NIC 
 	if ($("#txtnic").val().trim() == "") 
 	{ 
 	 	return "Insert NIC."; 
 	}
 
 	return true; 
}  
function getDoctorCard(name, contact_num, DOB, email, gender, NIC) 
{ 
 	var title = (gender == "Male") ? "Mr." : "Ms."; 
 	var yearNumber = ""; 
 
 	switch (year) {  	case "1":  	 	yearNumber = "1st"; 
 	 	break;  	case "2":  	 	yearNumber = "2nd"; 
 	 	break;  	case "3":  	 	yearNumber = "3rd"; 
 	 	break;  	case "4":  	 	yearNumber = "4th";  	 	break; 
 	} 
 
 	var doctor = "";  	doctor += "<div class=\"doctor card bg-light m-2\"  	 	  	 	 	" +
 			"style=\"max-width: 10rem; float: left;\">"; 
 	doctor += "<div class=\"card-body\">";  	
 	doctor += + name + ",";  	
 	doctor += "<br>"; 
 	doctor += yearNumber + " year"; 
 	doctor += "</div>"; 
 	doctor += "<input type=\"button\" value=\"Remove\"   	 	  	 	 	 	class=\"btn btn-danger remove\">";  	student += "</div>"; 
 
 	return doctor; 
} 

