
function setupModal(modalId, openElementSelector){
    // Get the modal
    var modal = document.getElementById(modalId); 
    
    //register event to open modal 
    $(openElementSelector).click(function(){
        modal.style.display = "block";
        //clear any validation
        $(modal).find('form').each(function(){
            var validator = $(this).validate();
            validator.resetForm();
        });
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

function setupFormValidation(formId, validationRules, successMessage){
    var $form = $('#' + formId),
        rules = validationRules || {},
        successHandler= function(){};

    if(successMessage){
        successHandler = function(){
            $form.html('<label class="validationSuccessMsg">' + successMessage + '</label>');
        };
    }

    $form.validate({
        submitHandler: successHandler,
        invalidHandler: function(){
            //handle failed validation
        },
        rules: rules
    });

    //general validation for all inputs in the form to be required
    $form.find('input.required, .form-group.required input').each(function(){
        $(this).rules("add", {required: true});
    });
}

/*
 * On page ready event
 */

$(document).ready(function() {
   
    //initialize youtube popup 
    $("a.demo").YouTubePopUp();
    
    //configure directions modal
    setupModal('directionsModal', '#notificationbar .directions');
    
    //configure directions modal
    setupModal('signUpModal', '#newsletter img');

    //configure directions modal
    setupModal('registerModal', '.header-actions .signup');

    //configure directions modal
    setupModal('loginModal', '.header-actions .login');

    //setup register modal
    var signUpValRules = {
        "your-email": {
            email: true
        }
    };

    //setup forms validation
    setupFormValidation('signUpModalForm', signUpValRules,  'Thank You For Registering!');
    setupFormValidation('registerForm', {}, 'Thank You!');
    setupFormValidation('loginForm', {}, 'Welcome, Jane Doe');
    setupFormValidation('registerFormInModal', {}, 'Thank You!');
    setupFormValidation('loginFormInModal', {}, 'Welcome, Jane Doe');
 }); 
