//alert("javaScript works");
// Matthew Darke
//ASD 1309 Project1

$('#home').on('pageinit', function(){
	//code needed for home page goes here
 });	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#Form');
		    	    
		    
		myForm.validate({
			invalidHandler: function(form, validator) {
			     			     //var html= ' ';
			     for(var key in validator.submitted){
			      var label = $(' label[for^=" ' + key +' "]'); 