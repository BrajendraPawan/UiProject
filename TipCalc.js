function calculate() {
   var bill = document.getElementById("bill").value;
    var serviceType = document.getElementById("serviceId").value;
    var noOfPeople=document.getElementById("people").value;
	if(validate(bill,serviceType,noOfPeople)){
	var result=(bill*serviceType)/(noOfPeople*100);
	document.getElementById("resultId").innerHTML = "Tip Amount= $ "+result + " Per Person";
	}

  }
  
function validate(bill,serviceType,noOfPeople){
	if(bill.length==0){
		alert("Amount Field should not Empty")
		return false;
	}
	else if(serviceType.length==0){
		alert(" ServiceType Field should not Empty")
		return false;
}	
else if(noOfPeople.length==0){
		alert("people Field should not Empty")
		return false;
}	
  else{
	  return true;
  }
}
