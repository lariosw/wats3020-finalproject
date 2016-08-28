/*
* On page ready event
*/


/*login functions*/
/*$(function(){
  $('#loginform').submit(function(e){
    return false;
  });
      $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
 };
};*/


function setupModal(modalId, openElementSelector){
    // Get the modal
    var modal = document.getElementById(modalId); 
    
    //register event to open modal 
    $(openElementSelector).click(function(){
        modal.style.display = "block";
    });
    
    //register event to close modal
    $(modal).find('.close').click(function(){
        modal.style.display = "none";
    });
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    };
};

$(document).ready(function() {
   
    //initialize youtube popup 
    $("a.demo").YouTubePopUp();
    
    //configure directions modal
    setupModal('directionsModal', '#notificationbar .directions');
    
        //configure directions modal
    setupModal('signUpModal', '#newsletter img');
    
 }); 
/*
//code for newsletter sign up
$(document).on('ready', function(){
    // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-state": {
                required: true,
                maxlength: 2
            },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true
        },
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});

*/


    
    

    
    /* logic to show name after login
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    //login click to hide login and show name
    $('.sign-in button[name=loginButton]').on('click', function(event){

        var $loginForm = $('#login-form'),
            $userInfoContainer = $('#navbar .user-info'),
            $nameContainer = $userInfoContainer.find('.user-fullname');
        
        //hide login form      
        $loginForm.hide();
        $userInfoContainer.show();
        $nameContainer.text(userInfo.firstName + ' ' + userInfo.lastName);
    });
    */

 
