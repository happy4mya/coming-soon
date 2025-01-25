document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            isValid = false;
            showError(nameInput, "Please enter your name.");
        }

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            isValid = false;
            showError(emailInput, "Please enter a valid email address.");
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            isValid = false;
            showError(messageInput, "Please enter your message.");
        }

        // If valid, log data and reset the form
        if (isValid) {
            console.log("Form Submitted:");
            console.log("Name:", nameInput.value);
            console.log("Email:", emailInput.value);
            console.log("Message:", messageInput.value);

            alert("Thank you for your message! We'll get back to you soon.");
            form.reset();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to show error message
    function showError(input, message) {
        const error = document.createElement("p");
        error.className = "error-message";
        error.textContent = message;
        error.style.color = "red";
        error.style.fontSize = "0.9rem";
        input.parentElement.appendChild(error);
    }

    // Function to clear error messages
    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach((error) => error.remove());
    }

    

    
});
