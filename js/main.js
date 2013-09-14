//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project
$('#page1').on('pageinit', function() {
//code needed for home page goes here
//GETS data and parses it

$("#Jsondata").on("click", function(){
	$.ajax({
		url        : "xhr/data.json",
		type       : "GET",
		dataType  : "json",
		success   : function(data, status) {
			console.log(data, status);
	    },
	    error     : function(error, parseerror){
		    console.log(error, parseerror);
	    }
	});
});

$("#XMLdata").on("click", function(){
	$.ajax({
		url        : "xhr/data.xml",
		type       : "GET",
		dataType  : "xml",
		success   : function(data, status) {
			console.log(data, status);
	    },
	    error     : function(error, parseerror){
		    console.log(error, parseerror);
	    }
	});
});

$("#yamldata").on("click", function(){
	$.ajax({
		url        : "xhr/data.yaml",
		type       : "GET",
		dataType  : "yaml",
		success   : function(data, status) {
			console.log(data, status);
	    },
	    error     : function(error, parseerror){
		    console.log(error, parseerror);
	    }
	});
});

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
			       //var legend = label.closest('fieldset').find('.label');
			       //var fieldName = legend.length ? legend.text() : label.text(); 
			        //html += '<li>'+ fieldName +'</li>';  
			     };
			    //$("#TravelTypeErrors ul").html(html);
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data , key);
					}
	});
		//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

     
                 	  
 function storeData (data, key){
//if there is no key, this means this is a new item and needs a new key
	      if (!key){		   
	        var id           = Math.floor(Math.random()*10000001);
	    
	     }else{	    
		 
		  id = key;
        }
   
   
    var item			  = {}; 
	        item.Category     =["CampingType:", $("#CampingType").val()];         
	        item.Destination     =["Destination:", $("#Destination").val()];
	        item.startdate        =["startdate:", $("#startdate").val()];	        
	        item.enddate         =["enddate:" , $("#enddate").val()];	        
	        item.notes            =["notes:", $("#notes").val()];
 	   	//save data into local storage, use stringify to convert object to a string
 	   	localStorage.setItem(id, JSON.stringify(item) );
	   alert("Travel plan complete!");
 	  
	  
};

//Display Local storage 
 $("#pageView").on("click", function() {
	 var getData = function(){
		 if(localStorage.length === 0 );
	alert(" no stored plans.");
		 }
});
	     for(var i=0; i<localStorage.length; i++){
		 var key = localStorage.getItem(key);
		     var obj = JSON.parse(value);
		     
		     for ( var n in obj ){
			 var optSubText = obj[n][0] + " " + obj[n][1];
			         $("#itemList").append(optSubText + "</ul>");
		     }
	    $("#itemList").append(key  + " " +  "</ul>");
	    $("#itemList").append('<a href="#" id="editLink">Edit</a> | <a href="#" id="deleteLink">Delete</a>');
	     
 };	
   //edit
   $("#editLink").on("click", function() {
	   validateInfo(key);
   }); 	
 	
 	//delete function
 	$("#deleteLink").on("click", function() {
	 	var question = confirm("Do you want to delete this plan?");
	 	if(question){
		 	localStorage.removeItem(key);
		 	alert("Plan has been deleted");
	} else {
	    alert("Plan was not deleted");
	          
	     
    }
});



                                                                                                                                                                                                                           