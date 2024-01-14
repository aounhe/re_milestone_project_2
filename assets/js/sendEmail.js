function sendMail(contactForm) {
    emailjs.send("service_wp0647l", "template_y0i6nqx", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "your_request": contactForm.summary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}