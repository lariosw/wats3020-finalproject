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








$(document).ready(function() {
   
    //initialize youtube popup 
    
   
    $("a.demo").YouTubePopUp();
    
//code to make modal work    
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var $directionsWrapper = $('#notificationbar .directions'); 
   

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
$directionsWrapper.click(function(){
    modal.style.display = "block";
});
/*    btn.onclick = function() {
    modal.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
    
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
    
}); 