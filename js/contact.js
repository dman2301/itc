const contactForm = document.getElementById('contact-form');
const contactFormButton = document.getElementById('contact-button');



function validateForm() {

    if (
        document.forms["contact-form"]["_firstname"].value &&
        document.forms["contact-form"]["_replyto"].value &&
        document.forms["contact-form"]["message"].value &&
        document.forms["contact-form"]["coffee"].value
    ) {
        // valid
        contactForm.action = "https://formspree.io/f/xeqvdkbj";
        contactFormButton.disabled = false;
    } else {
        // not valid
        contactFormButton.disabled = true;
        contactForm.action = "";
    }
}

function submit() {
    contactForm.submit()
}