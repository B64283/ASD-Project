//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project


$('#page1').on('pageinit', function() {
//code needed for home page goes here
//GETS data and parses it

//ajax grabing json data
$('#FamilyBtn').on( 'click',function(){ 
	$('#itemDetails').empty();
	$.mobile.changePage('#pageView');
	$.ajax({
		url        : "_view/Plans",
		dataType  : "json",
		success   : function(data) {
			$.each(data.rows, function(index, plan){
			   var Categoryfamily = plan.value;
			   $('#itemDetails').append(
			   $('<li>').append(
			   $('<a>').attr('href', '#')
			   .text(Categoryfamily)
			   
			   
			   )
			 );
	      });
    	$('#itemDetails').listview('refresh');
    	}
	});	    
});		  
});		  
			  
			   /*///Display Local storage 

$('#storage').on('click', function(){
$.mobile.changePage('#pageView');
		//Empty the div to 
		$('#itemDetails').empty();
		//for loop goes through localStorage for all items.
		for( var i=0, ls = localStorage.length; i < ls; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);

		var item = $.parseJSON(value);
		//var objectString = $.parseJSON(value);
		//console.log(objectString);

			$(''+
				'<div class="listing">' +
				        '<h3>' + 'Category: ' + item.Category +'</h3>' + 
				       '<p>' + 'Destination: ' + item.Destination +'</p>' +
				          '<p>' + 'startdate: ' + item.startdate +'</p>' +
				           '<p>' + 'enddate: ' + item.enddate +'</p>' +
				              '<p>' + 'notes: ' + item.notes  +'</p>' +	
					'<div class="ui-block-b">' + '<input type="button" class="delete" value="Delete" data-key="' + key + '">' + '</div>'+ 
                    '<div class="ui-block-b">' + '<input type="button" class="edit" value="Edit" data-key="' + key + '">' + '</div>'+
					'<br />'+
					'<hr />' +
				'</div>'
			).appendTo('#itemDetails'); 
		
           
           //delete function
			$('.delete').on('click', function(){
				
				 var dkey = $(this).data('key');				
				  var ask = confirm("Are you sure you want to delete the plan?");
	    if (ask){
	        localStorage.removeItem(dkey);
	        alert("Plan was deleted.");
		  $.mobile.changePage('#addItem'); 		  
		   window.location.reload();     
      
        }else{
	   alert("Vacation was not deleted.") 
    }
 
});



			//edit function
			$('.edit').on('click', function(key, value){
				$.mobile.changePage('#addItem');

				var ekey = $(this).data('key');
				var val = localStorage.getItem(this.key);				
				console.log(ekey);
	            $('#CampingType').val(item.Category[1]);
				$('#Destination').val(item.Destination[1]);
            	$('#startdate').val(item.startdate[1]);
            	$('#enddate').val(item.enddate[1]);
				$('#notes').val(item.notes[1])	;			
				//$('#key').val(ekey);
			});
		}
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
			submitHandler: function(form) {
		var data = myForm.serializeArray();
			storeData(data);
					}
	});
		//any other code needed for addItem page goes here

});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){

};

     
                 	  
 var storeData = function (key, value){
	if($('#key').val() == '') {
		var randomID = Math.floor(Math.random()*10000001);
        console.log(randomID);
    } else {
    	var randomID = $('#key').val();
    }  
    
     var item			  = {}; 
	        item.Category       =["CampingType:", $("#CampingType").val()];         
	        item.Destination     =["Destination:", $("#Destination").val()];
	        item.startdate        =["startdate:", $("#startdate").val()];	        
	        item.enddate         =["enddate:" , $("#enddate").val()];	        
	        item.notes            =["notes:", $("#notes").val()];
 	   	//save data into local storage, use stringify to convert object to a string
 	   	localStorage.setItem(randomID, JSON.stringify(item));
	  var randomID = key;	 	   
	  alert("Camping plan complete!");
 	 
 	 window.location.reload(); 	   

};
//var submit = $('#submit'){
	//submit.on('click', storeData); 
	
 //window.location.reload();

});

$('#pageView').on('pageinit', function(){

});	*/



                                                                                                                                                                                                                           