// $(document).ready(function() {
//     $("#register").click(function() {
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var password = $("#password").val();
//     //var cpassword = $("#cpassword").val();
//     if (name == '' || email == '' || password == '' ) {
//     alert("Please fill all fields...!!!!!!");
//     } else if ((password.length) < 8) {
//     alert("Password should atleast 8 character in length...!!!!!!");
//     } 
//     else {
//     var data ='You have Successfully Registered.....';
//     alert(data);
//     };
    
//     });
//     });



    $(document).ready(function() {
        $('#signupf').submit(function(e) {
            e.preventDefault();
            var InputName1 = $('#InputName1').val();
            //var last_name = $('#last_name').val();
            var email = $('#InputEmail1').val();
            var LoginPassword1 = $('#LoginPassword1').val();
        
            $(".error").remove();
        
            if (InputName1.length < 1) {
              $('#InputName1').after('<span class="error">This field is required</span>');
            }
            // if (last_name.length < 1) {
            //   $('#last_name').after('<span class="error">This field is required</span>');
            // }
            if (email.length < 1) {
                $('#InputEmail1').after('<span class="error">This field is required</span>');
              } else {
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!InputEmail1.value.match(mailformat)){
                    $('#InputEmail1').after('<span class="error">Enter a valid email</span>');
                }
                // var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
                // var validEmail = regEx.test(email);
                // if (!validEmail) {
                //   $('#InputEmail1').after('<span class="error">Enter a valid email</span>');
                // }
              }
            if (LoginPassword1.length < 8) {
              $('#LoginPassword1').after('<span class="error">Password must be at least 8 characters long</span>');
            }
          });




        // $('form[id="signupf"]').validate({
        //     rules: {
        //         InputName1: 'required',
              
        //         InputEmail1: {
        //         required: true,
        //         email: true,
        //       },
        //       LoginPassword1: {
        //         required: true,
        //         minlength: 8,
        //       }
        //     },
        //     messages: {
        //         InputName1: 'This field is required',
        //       //lname: 'This field is required',
        //       InputEmail1: 'Enter a valid email',
        //       LoginPassword1: {
        //         minlength: 'Password must be at least 8 characters long'
        //       }
        //     },
        //     submitHandler: function(form) {
        //       form.submit();
        //     }
        //   });
        
        });