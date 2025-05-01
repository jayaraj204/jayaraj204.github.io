// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("xie8d_iBekx8nTGby"); // Replace with actual User ID
});

// Select all input fields with the class "input"
const inputs = document.querySelectorAll(".input");

// Function to handle input focus
function focusFunc() {
  this.parentNode.classList.add("focus");
  this.style.boxShadow = "0 0 5px #rgb(255, 255, 255)"; // Add glowing effect on focus
}

// Function to handle input blur (when focus is lost)
function blurFunc() {
  this.style.boxShadow = "none"; // Remove glow when focus is lost
  if (this.value.trim() === "") {
    this.parentNode.classList.remove("focus");
  }
}

// Attach event listeners to input fields
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Back button navigation handling
document.getElementById("backButton")?.addEventListener("click", function () {
  window.location.href = "Portfolio.html"; // Ensure this path is correct
});

// Form submission handling with validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseText = document.getElementById("response");

  // Basic form validation
  if (!name || !email || !message) {
    responseText.innerText = "Please fill in all required fields!";
    responseText.style.color = "red";
    responseText.style.display = "block";
    return;
  }

  // Email format validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    responseText.innerText = "Please enter a valid email address!";
    responseText.style.color = "red";
    responseText.style.display = "block";
    return;
  }

  // Phone number validation (optional, only if a phone number is entered)
  const phonePattern = /^[0-9]{10}$/;
  if (phone && !phonePattern.test(phone)) {
    responseText.innerText = "Please enter a valid 10-digit phone number!";
    responseText.style.color = "red";
    responseText.style.display = "block";
    return;
  }

  // Show loading message while sending
  responseText.innerText = "Sending...";
  responseText.style.color = "#00d1b2";
  responseText.style.display = "block";

  // Create the data object for EmailJS
  const data = {
    from_name: name,
    from_email: email,
    phone: phone,
    message: message,
  };

  // Send data via EmailJS
  emailjs.send("service_xyh1jnf", "template_8029d6s", data)
    .then(function (response) {
      console.log("Success:", response);
      responseText.innerText = "Message sent successfully!";
      responseText.style.color = "green";
      responseText.style.display = "block";
      document.getElementById("contact-form").reset(); // Reset form on success
      window.scrollTo({ top: responseText.offsetTop, behavior: "smooth" }); // Scroll to response message
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      responseText.innerText = "Failed to send message. Please try again.";
      responseText.style.color = "red";
      responseText.style.display = "block";
    });
});

