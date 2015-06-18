$(document).ready(function(){


		$('#SignUp_Form').validate({
	    rules: {
	        FirstName: {
	        minLength:5,
	       required: true
	      },
		  
		    LastName: {
	        minlength: 5,
	        required: true
	      },
		  
		  Password: {
				required: true,
				minlength: 6
			},
			
		  
	      Email: {
	        required: true,
	        email: true
	      },

	      Email_Confirm: {
	          required: true,
	          equalTo: "#Email"
	      },
		 
		  
		  agree: "required"
		  
	    },
			highlight: function(element) {
				$(element).closest('.form-group').removeClass('success');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.form-group').addClass('success');
			}
	  });

}); // end document.ready