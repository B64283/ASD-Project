//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project
$('#page1').on('pageinit', function() {
//code needed for home page goes here
 
		
$('#addItem').on('pageinit', function(){



var storeData = function(data, key){
	


 
	    //if there is no key, this means this is a new item and needs a new key
	     if (campingForm.valid()){		   
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
 	   	console.log('ItemKey before local storage Save:' , itemKey)
 	   	localStorage.setItem(itemKey, JSON.stringify(item));
 	   	
 	   	var toChangePage = function (toPageId) {
        $.mobile.changePage("#" + toPageId , {
            type:"post",
            data:$("form").serialize(),
            reloadPage:true
        
        });
        });
    
 	   	 	   	
}); 




			      
			      
			      
			      
			      
			      
			      
			      
			      
			      
			      