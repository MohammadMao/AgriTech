function sendMail() {
    (function () {
        emailjs.init("h2jRzfLdtbSz9LHPc");
      })();
    // Get the button element
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Disable the button to prevent multiple clicks

    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_485efg8", "template_kvyq5ot", params)
        .then(function(res) {
            alert('Message Sent! You\'ll be getting a response soon');
        })
        .catch(function(err) {
            console.error('EmailJS error:', err);
            alert('Failed to send email. Error: ' + JSON.stringify(err));
        })
        .finally(function() {
            submitButton.disabled = false; // Re-enable the button after the process
        });
}