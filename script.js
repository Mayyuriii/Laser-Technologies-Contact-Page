document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var recaptchaError = document.getElementById('recaptchaError');
    var successMessage = document.getElementById('successMessage');
    var errorMessageTimeout; 
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        recaptchaError.textContent = '';
        successMessage.textContent = '';
        clearTimeout(errorMessageTimeout); 

        var name = contactForm.querySelector('input[name="name"]').value;
        var organization = contactForm.querySelector('input[name="organization"]').value;
        var contact = contactForm.querySelector('input[name="contact"]').value;
        var email = contactForm.querySelector('input[name="email"]').value;
        var remark = contactForm.querySelector('textarea[name="remark"]').value;
        var recaptchaResponse = grecaptcha.getResponse();

        if (name === '' || organization === '' || contact === '' || email === '' || remark === '' || recaptchaResponse === '') {
            recaptchaError.textContent = 'Please fill out all fields and complete the reCAPTCHA.';
            return;
        }

        simulateSubmission();
    });

    function simulateSubmission() {
        setTimeout(function() {

            contactForm.reset();

            successMessage.textContent = 'Form submitted successfully!';

            errorMessageTimeout = setTimeout(function() {
                successMessage.textContent = '';
            }, 5000);
        }, 1000); 
    }
});
