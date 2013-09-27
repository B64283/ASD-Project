//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project4 


$(document).on('pageinit', '#page1', function(){
 // CouchDB Code
    $.couch.db("campingplannerasd").view("/app/plans", {
       success: function(data) {
         console.log(data);
       }
    });
});


/*
//code needed for home page goes here
//GETS data and parses it

//ajax grabing json data
$('#BackpackingBtn').on( 'click',function(){ 
     $.couch.db("campingplannerasd").view("app/plan", {
        success: function(data){
    $('#itemDetails').empty();   // emty the itemDetails section
    $.mobile.changePage('#pageView');
    $.ajax({
        url        : "_view/Plans",
        dataType  : "json",
        success   : function(data) {
            $.each(data.rows    , function(index, plan){
               // var Category= plan.value.Category;
               // var Destination= plan.value.Destination;               
                //var startdate= plan.value.startdate;
               // var enddate= plan.value.enddate;
               // var notes= plan.value.notes;
               // $('#itemDetails').append(
                $(''+
                   ' <li>'+
                '<a href="#">' +
                '<h1>' + plan.value.Category + '</h1>' +
                '<h2>' + plan.value.Destination + '</h2>' +
                '<P>' + plan.value.startdate + '</p>' +
                '<p>' + plan.value.enddate + '</p>' +   
                '<p>' + plan.value.notes + '</P>' +   
                '</a>' +
                '<li>'    
                  ).appendTo("#itemDetails");  
                
                
                
             
          });
        $('#itemDetails').listview('refresh');
        }
        });
        }
        });
    });        
          




	  
$('#FamilyBtn').on( 'click',function(){ 
	$.couch.db("campingplannerasd").view("app/planB", {
        success: function(data){
	$('#itemDetails').empty();
	$.mobile.changePage('#pageView');
	$.ajax({
		url        : "_view/planB",
		dataType  : "json",
		success   : function(data) {
			$.each(data.rows	, function(index, planB){
			   // var Category= planB.value.Category;
			    //var Destination= planB.value.Destination;			   
	            //$('#itemDetails').append(
	            $(''+
	               ' <li>'+
	            '<a href="#">' +
	            '<h3>' + planB.value.Category + '</h3>' +
	            '<p>' + planB.value.Destination + '</P>' +
	            '<P>' + planB.value.startdate + '</p>' +
	            '<p>' + planB.value.enddate + '</p>' +   
	            '<p>' + planB.value.notes + '</P>' +   
	            '</a>' +
	            '<li>'    
	              ).appendTo("#itemDetails");  
	            
	            
	            
			 
	      });
    	$('#itemDetails').listview('refresh');
   }
        });
        }
        });
    });        
          
$('#SurvivalistBtn').on( 'click',function(){ 
	$.couch.db("campingplannerasd").view("app/planC", {
        success: function(data){
	$('#itemDetails').empty();
	$.mobile.changePage('#pageView');
	$.ajax({
		url        : "_view/planC",
		dataType  : "json",
		success   : function(data) {
			$.each(data.rows	, function(index, planC){
			    //var Category= planC.value.Category;
			    //var Destination= planC.value.Destination;			   
	             $(''+
	               ' <li>'+
	            '<a href="#">' +
	            '<h3>' + planC.value.Category + '</h3>' +
	            '<p>' + planC.value.Destination + '</P>' +
	            '<P>' + planC.value.startdate + '</p>' +
	            '<p>' + planC.value.enddate + '</p>' +   
	            '<p>' + planC.value.notes + '</P>' +   
	            '</a>' +
	            '<li>'    
	              ).appendTo("#itemDetails");  
	            
	            
	            
			 
	      });
    	$('#itemDetails').listview('refresh');
  }
        });
        }
        });
    });        
     ///Display Local storage  
 */    
     
     
     
     
            
			  



			   ///Display Local storage 

/*$('#storage').on('click', function(){
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
		
 */          
           //delete function
 var deleteData = function(delData) {
	$.couch.db("campinplannerasd").removeDoc(key, function() {
		//success: function(deData) {
		    console.log('Plan Deleted');
		    
			$('#pageView').listview('refresh');
			console.log(deData);
		},
		error: function() {
		console.log(Plan was not deleted);
		//}
	$('delete').on('click', function() {
        var id = $(this).data('id');
        var rev = $(this).data('rev');
        
        var key = {};
        key._id = id;
        key._rev = rev;
        
        delete data(key);
      
 });
};
/*			$('.delete').on('click', function(){
				
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

*/
$('document').on('pageinit', '#addItem', function(){
console.log("Form loaded.");
//The functions below can go inside or outside the pageinit function for the page in which it is needed.
//var autofillData = function (){
//};


    var saveData = function(savdData) {
	var key= id;	
	var data={};
	data.key= key;
	
	savdData.Category = $('#Category').val();
	savdData.Destination= $('#Destination').val();
	savdData.startdate= $('#startdate').val();
	savdData.enddate= $('#enddate').val();
	savdData.notes= $('#notes').val();
	console.log(savdData);
	//localStorage.steItem(key, JSONStringify(data));
	var doc = {};
        $.couch.db("campingplannerasd").saveDoc(doc, {
        "_id": "Category": savdData.Category,
        "Category":    savdData.Category,
        "Destination":   savdData.Destination,
        "start date":    savdData.startdate,
        "enddate":     savdData.enddate;
        "notes":    savdData.notes               
     }      ,{  success: function(savdData) {
      console.log('data has been saved: ' + savdData);
         alert('Plan Saved');
            window.location.reload();    
    },
    });
    $('#addItem').listview('refresh');
     }
  var submit = $('#submit'){
	submit.on('click', saveData); 
	
  }

});

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
			saveData(key);
		});
		//any other code needed for addItem page goes here

});
                	  
/*  var storeData = function (key, value){
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
 	   	//localStorage.setItem(randomID, JSON.stringify(item));
	  //var randomID = key;	 	   
	 
	 
	  alert("Camping plan complete!");
 	 
 	 window.location.reload(); 	   

};*/

$('#pageView').on('pageinit', function(){

});	



                                                                                                                                                                                                                           