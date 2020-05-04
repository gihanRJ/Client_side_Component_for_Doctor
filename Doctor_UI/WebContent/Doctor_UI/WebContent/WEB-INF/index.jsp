<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script> 
<script src="Components/main.js"></script>

</head>
<body>  
	<div class="container"> 
 
 		 <div class="row">  
			 <div class="col-8">
 
 				   <h1 class="m-3">Doctor details</h1> 
 
				    <form id="formDoctor">
				    
				    <!-- NAME -->
						<div class="input-group input-group-sm mb-3"> 
							<div class="input-group-prepend"> 
								<span class="input-group-text" id="lblName">Name: </span>  
							</div>
							<input type="text" id="txtName" name="txtName">
						</div> 
						
						<!-- Contact No-->
							<div class="input-group input-group-sm mb-3"> 
								<div class="input-group-prepend"> 
									<span class="input-group-text" id="lblName"> Contact Number:</span>  
								</div>
								<input type="text" id="txtContactNo" name="txtContactNo">
							</div>
							
							<!-- DOB-->
							<div class="input-group input-group-sm mb-3"> 
								<div class="input-group-prepend"> 
									<span class="input-group-text" id="lblName">DOB: </span>  
								</div>
								<input type="text" id="txtDOB" name="txtDOB">
							</div> 
							
							<!--Email-->
							<div class="input-group input-group-sm mb-3"> 
								<div class="input-group-prepend"> 
									<span class="input-group-text" id="lblName">Email: </span>  
								</div>
								<input type="text" id="txtE_mail" name="E_mail">
							</div> 
							
							<!--Gender-->
							<div class="input-group input-group-sm mb-3"> 
								<div class="input-group-prepend"> 
									<span class="input-group-text" id="lblName">Gender: </span>  
								</div>
								<input type="text" id="txtgender" name="txtgender">
							</div> 
							
							<!--NIC-->
							<div class="input-group input-group-sm mb-3"> 
								<div class="input-group-prepend"> 
									<span class="input-group-text" id="lblName">NIC: </span>  
								</div>
								<input type="text" id="txtnic" name="txtnic">
							</div> 
							
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div> 
					
					<input type="button" id="btnSave" value="Save" class="btn btn-primary"> 		
				    
				    
				    </form>    
				</div>   
			</div>     
 			<br> 
 			
 			<div class="row">
 				<div class="col-12" id="coldoctors">
 				
 				</div>
 			</div> 
 
	 </div> 
</body>
</html>