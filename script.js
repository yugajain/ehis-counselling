document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            // Here, you can implement code to handle the form submission, e.g., send the data to a server.
            alert("Form submitted successfully!");
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
