function validate_login() {

	// alert("Check");
	var id = document.login.id.value;
	var pwd = document.login.password.value; 

	// Check empty field
	if (id=="" || pwd=="") {
		alert ("Enter Login Id and Password");
		
	}

	// Check password length
	else if (pwd.length < 8) {
		alert ("Password must be atleast 8 characters long.");
		
	}

	else if (id == "admin" && pwd == "admin123") {
		alert ("Login Successful !");
		window.location = "Account_Summary.html";
		return false;
	}

	// else {
	// 	login_attempt--;
	// 	alert ("You have " + login_attempt + " attempts left.");
	// 	if (login_attempt == 0) {
	// 		document.login.id.disabled = true;
	// 		document.login.password.disabled = true;
	// 		document.login.submit.disabled = true;
	// 		return false;
	// 	}
	// }
}

function validate_registration () {

	// alert("Check");
	var name = document.register.name.value;
	var email = document.register.email.value;
	var mobile = document.register.mobile.value;
	var gender = document.register.gender.value;

	var dob = document.register.dob.value;
	var branch = document.register.branch.value;
	var type = document.register.account_type.value;

	var address = document.register.address.value;
	var balance = document.register.balance.value;
	var password = document.register.password.value;
	var password2 = document.register.password2.value;



	if (name==null || name=="") {  
		alert ("Name can't be blank.");  
		return;
	}

	else if (email==null || email.length<6) {
		alert ("Email ID not valid.");
		return;
	}

	else if (mobile=="" || isNaN(mobile) || mobile.length!=10) {
		alert ("Mobile number must be 10 digits (Numeric).");
		return;
	}

	else if (gender==null || gender=="") {
		alert ("Enter your gender.");
		return;
	}

	else if (dob==null || dob=="") {
		alert ("Date of Birth must be provided.");
		return;
	}

	else if (branch==null || branch=="") {
		alert ("Select branch.");
		return;
	}

	else if (type==null || type=="") {
		alert ("Select Account type.");
		return;
	}

	else if (address==null || address=="") {
		alert ("Please provide your address");
		return;
	}

	else if (balance=="" || isNaN(balance)) {
		alert ("Invalid Balance amount");
		return;
	}

	else if (password.length<8) {
		alert ("Password must be at least 8 characters long.");
		return;
	} 

	else if (password != password2) {
		alert ("Password not matching.");
		return;
	}

	else {
		alert ("Account Created Successfully !");
		window.location = "Account_Summary.html";
		return false;
	}
}



function validate_date() {

	// alert("check");
	var start = document.date.start.value;
	var end = document.date.end.value;

	if (start==null || start=="") {
		alert ("Please provide Start date.");
		return;
	}

	else if (end==null || end=="") {
		alert ("Please provide End date.");
		return;
	}

	else if (start > end) {
		alert ("Invalid date range. Start date must be less than End date.");
		return;
	}

	else {
		alert ("Search successful ! Account Statement between " + start + " and " + end + " will be displayed.");
	}
}


function validate_beneficiary () {
	var name = document.beneficiary.payee.value;
	var account = document.beneficiary.account.value;
	var branch = document.beneficiary.branch.value;
	var ifsc = document.beneficiary.ifsc.value;

	if (name==null || name=="") {  
		alert ("Payee Name can't be blank.");  
		return;
	}

	else if (account==null || account=="" || isNaN(account)) {
		alert ("Account Number is invalid.");
		return;
	}

	else if (branch==null || branch=="") {
		alert ("Select branch.");
		return;
	}

	else if (ifsc==null || ifsc=="") {  
		alert ("IFSC Code cannot be blank.");  
		return;
	}

	else {
		alert (name + " has been successfully added as Beneficiary.")
		return false;
	}

}


function validate_transfer () {
	var beneficiary = document.transfer.beneficiary.value;
	var amount = document.transfer.amount.value;
	var pwd = document.transfer.password.value;

	if (beneficiary==null || beneficiary=="") {  
		alert ("Please select Beneficiary.");  
		return;
	}

	else if (amount==null || amount=="" || isNaN(amount)) {
		alert ("Please enter valid amount.");
		return;
	}

	else if (pwd==null || pwd=="") {
		alert ("Please enter password.");
		return;
	}

	else if (pwd != "admin123") {
		alert ("Wrong Password.");
		return;
	}

	else {
		alert ("Transfer of INR " + amount + " to " + beneficiary + " has been initiated ")
	}

}


function validate_request () {
	var req = document.request.issue.value;
	alert ("Request for new " + req + " has been initiated successfully and will reach you via Post with in 4-5 working days");
}

function validate_password_change () {
	var old = document.change_password.old_password.value;
	var new1 = document.change_password.new_password.value;
	var new2 = document.change_password.new_password2.value;

	if (old=="" || old==null) {
		alert ("Please provide the old password.");
		return;
	}

	else if (new1=="" || new1==null) {
		alert ("Please enter the new password.");
		return;
	}

	else if (new2=="" || new2==null) {
		alert ("Please confirm the new password.");
		return;
	}


	else if (new1.length < 8) {
		alert ("New password must be atleast 8 characters long.");
	}

	else if (new1 != new2) {
		alert ("Passwords not matching.");
		return
	}

	else if (old != "admin123") {
		alert ("Old Password is wrong.");
		return
	}

	else {
		alert ("Password Changed successfully ! ");
	}

}


function validate_contact () {

	// alert("Check");

	var name = document.contact.name.value;
	var mobile = document.contact.mobile.value;
	var email = document.contact.email.value;
	var type = document.contact.type.value;

	if (name==null || name=="") {  
		alert ("Name can't be blank.");  
		return;
	}

	else if (mobile=="" || isNaN(mobile) || mobile.length!=10) {
		alert ("Mobile number must be 10 digits (Numeric).");
		return;
	}

	else if (email==null || email.length<6) {
		alert ("Email ID not valid.");
		return;
	}

	else if (type==null || type=="") {
		alert ("Please select Loan Type.");
	}

	else {
		alert ("We will contact you soon " + name + " regarding " + type);
	}

}