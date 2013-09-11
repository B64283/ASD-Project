//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project
$('#page1').on('pageinit', function() {
//code needed for home page goes here
console.log("Page one loaded."); 
 });
		
$('#addItem').on('pageinit', function(){
console.log("Form loaded.");
var myForm = $('#campingForm');
		    tterrorsLink	= $ ("#tterrorsLink");	    
		    
		myForm.validate({
			invalidHandler: function(form, validator) {
			     tterrorsLink.click();
			     //var html= ' ';
			     for(var key in validator.submitted){
			      var label = $(' label[for^=" ' + key +' "]'); 
			       var legend = label.closest('fieldset').find('.label');
			       var fieldName = legend.length ? legend.text() : label.text(); 
			        html += '<li>'+ fieldName +'</li>';  
			     
			     };
			    $("#TravelTypeErrors ul").html(html);
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
					}
	});
		//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var storeData = function(data, key){
	


 
	    //if there is no key, this means this is a new item and needs a new key
	      if (!key){		   
	        var id           = Math.floor(Math.random()*10000001);
	    
	     }else{	    
		 
		  id = key;
        }
   
   
    var item			  = {}; 
	        item.TravelType     =["TravelType:", $("#TravelType").val()];         
	        item.Destination     =["Destination:", $("#Destination").val()];
	        item.startdate        =["startdate:", $("#startdate").val()];	        
	        item.enddate         =["enddate:" , $("#enddate").val()];	        
	        item.notes            =["notes:", $("#notes").val()];
 	   	//save data into local storage, use stringify to convert object to a string
 	   	localStorage.setItem(id, JSON.stringify(item) );
	   alert("Travel plan complete!");
 	   	
	  
} 
 	var	deleteItem = function (){
	};		
 //get local storage
	

var clearLocal = function(){
   function clearLocal(){
	    if (localStorage.length === 0){
		    alert("No Data To Clear.");
	    } else {
	        localStorage.clear();
	        alert("All plans Deleted.");
	        window.location.reload();
	        return false;
	   }
 }
};
 
 function showData(data,key){
	displayData.addEventListener("click", getData);
	};
	  
 	  
 	  
 	  
 	  
 	  
 	   



			      
			      
			      
			      
			      
			      
			      
			      
			      
			      
			      