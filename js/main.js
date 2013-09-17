//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project
$('#page1').on('pageinit', function() {
//code needed for home page goes here
//GETS data and parses it

//ajax grabing json data
$('#Jsondata').on('click', function(){ 
	$('#itemDetails').empty();
	$.mobile.changePage('#pageView')
	$.ajax({
		url        : "xhr/data.json",
		type       : "GET",
		dataType  : "json",
		success   : function(jsondata) {
			for (var i=0, j=jsondata.item.length; i<j; i++) {
			    var trip = jsondata.item[i];	    
                $(' '+
						'<div class="listing">' +
				          '<h3>' + 'Category: ' + trip.Category +'</h3>' + '<p>' + 'Destination: ' + trip.Destination +'</p>' +
				          '<p>' + 'startdate: ' + trip.startdate +'</p>' +
				          '<p>' + 'enddate: ' + trip.enddate +'</p>' +
				          '<p>' + 'notes: ' + trip.notes  +'</p>' +				         
				          '<hr />' +
				        '</div>'
				    ).appendTo('#itemDetails');
				}
			}
		});
	});

$('#XMLdata').on('click', function(){
	$('#itemDetails').empty();
	$.mobile.changePage('#pageView')
	$.ajax({
		url        : "xhr/data.xml",
		type       : "GET",
		dataType  : "xml",
		success   : function(xml) {
		$(xml).find('item').each(function() {
					var category = $(this).find('category').text();
					var destination = $(this).find('destination').text();
					var startdate = $(this).find('startdate').text();
					var Enddate = $(this).find('Enddate').text();
					var notes = $(this).find('notes').text();
					$(''+
					'<div class="listing">' +
				          '<h3>' + 'category: ' + category +'</h3>' + '<p>' + 'destination: ' + destination +'</p>' +
				          '<p>' + 'startdate: ' + startdate +'</p>' + '<p>' + 'Enddate: ' + Enddate +'</p>' +
				          '<p>' + 'notes: ' + notes  +'</p>' +				         
				          '<hr />' +
						'</div>'
						).appendTo('#itemDetails');
				});
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

//console.log("Page one loaded."); 
});

//Display Local storage 

$('#storage').on('click', function(){
$.mobile.changePage('#pageView');
		//Empty the div to 
		$('#itemDetails').empty();
		//for loop goes through localStorage for all items.
		for( var i=0, ls = localStorage.length; i < ls; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);

		var objectString = JSON.parse(value);
		//var objectString = $.parseJSON(value);
		//console.log(objectString);

			$(''+
				'<div class="listing">' +
				 '<h3>' + 'Category: ' + objectString.Category +'</h3>' + '<p>' + 'Destination: ' + objectString.Destination +'</p>' +
				          '<p>' + 'startdate: ' + objectString.startdate +'</p>' +
				          '<p>' + 'enddate: ' + objectString.enddate +'</p>' +
				          '<p>' + 'notes: ' + objectString.notes  +'</p>' +	
					'<div class="ui-block-b">' + '<input type="button" class="delete" value="Delete" data-key="' + key + '">' + '</div>'+ 
                    '<div class="ui-block-b">' + '<input type="button" class="edit" value="Edit" data-key="' + key + '">' + '</div>'+
					'<br />'+
					'<hr />' +
				'</div>'
			).appendTo('#itemDetails'); 


			//delete function
			$('.delete').on('click', function(){
				  	    
				   
				   var dkey = $(this).data('key');

					
					localStorage.removeItem(dkey);

			});

			//edit function
			$('.edit').on('click', function(key, value){
				$.mobile.changePage('#addItem');

				var edtkey = $(this).data('key');
				console.log(edtkey);
				$('#CampingType').val(objectString.Category[0]);
				$('#Destination').val(objectString.Destination[0]);
            	$('#startdate').val(objectString.startdate[0]);
            	$('#enddate').val(objectString.enddate[0]);
				$('#notes').val(objectString.notes[0]);				
				$('#key').val(edtkey);
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
    };   
    var item			  = {}; 
	        item.Category     =["CampingType:", $("#CampingType").val()];         
	        item.Destination     =["Destination:", $("#Destination").val()];
	        item.startdate        =["startdate:", $("#startdate").val()];	        
	        item.enddate         =["enddate:" , $("#enddate").val()];	        
	        item.notes            =["notes:", $("#notes").val()];
 	   	//save data into local storage, use stringify to convert object to a string
 	   	localStorage.setItem(randomID, JSON.stringify(item) );
	  var randomID = key;	 	   
	  alert("Camping plan complete!");
 	 
 	 window.location.reload(); 	   


var submit = $('#submit');
	submit.on('click', storeData); 
 };


$('#pageView').on('pageinit', function(){
});	



                                                                                                                                                                                                                           