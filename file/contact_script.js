document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("xie8d_iBekx8nTGby"); 
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  this.parentNode.classList.add("focus");
  this.style.boxShadow = "0 0 5px #rgb(255, 255, 255)"; 
}

function blurFunc() {
  this.style.boxShadow = "none"; 
  if (this.value.trim() === "") {
    this.parentNode.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.getElementById("backButton")?.addEventListener("click", function () {
  window.location.href = "Portfolio.html"; 
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseText = document.getElementById("response");

  if (!name || !email || !message) {
    responseText.innerText = "Please fill in all required fields!";
    responseText.style.color = "red";
    responseText.style.display = "block";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    responseText.innerText = "Please enter a valid email address!";
    responseText.style.color = "red";
    responseText.style.display = "block";
    return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (phone && !phonePattern.test(phone)) {
    responseText.innerText = "Please enter a valid 10-digit phone number!";
    responseText.style.color = "red";
    responseText.style.display = "block";
    return;
  }

  responseText.innerText = "Sending...";
  responseText.style.color = "#00d1b2";
  responseText.style.display = "block";

  const data = {
    from_name: name,
    from_email: email,
    phone: phone,
    message: message,
  };

  emailjs.send("service_xyh1jnf", "template_8029d6s", data)
    .then(function (response) {
      console.log("Success:", response);
      responseText.innerText = "Message sent successfully!";
      responseText.style.color = "green";
      responseText.style.display = "block";
      document.getElementById("contact-form").reset(); 
      window.scrollTo({ top: responseText.offsetTop, behavior: "smooth" }); 
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      responseText.innerText = "Failed to send message. Please try again.";
      responseText.style.color = "red";
      responseText.style.display = "block";
    });
});

