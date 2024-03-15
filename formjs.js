document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input, textarea, select");

  inputs.forEach(input => {
    input.addEventListener("blur", function() {
      validateInput(input);
    });

    // Add event listeners for other events like 'input', 'change', or 'keyup' for real-time validation
    // input.addEventListener("input", function() {
    //   validateInput(input);
    // });
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValidForm = true;
    inputs.forEach(input => {
      if (!validateInput(input)) {
        isValidForm = false;
      }
    });
    if (isValidForm) {
      form.submit();
    }
  });
});

function validateInput(input) {
  const value = input.value.trim();
  const errorElement = input.nextElementSibling; // Assuming error is the next element
  let isValid = true;

  switch (input.getAttribute("name")) {
    case "fullname":
      isValid = validateName(value);
      break;
    case "Phone number":
      isValid = validatePhoneNumber(value);
      break;
    case "email":
      isValid = validateEmail(value);
      break;
    // Add more cases for other inputs
  }

  if (!isValid) {
    errorElement.innerText = "Invalid input";
    input.classList.add("is-invalid");
  } else {
    errorElement.innerText = "";
    input.classList.remove("is-invalid");
  }

  return isValid;
}

function validateName(name) {
  return /^[A-Za-z\s]+$/.test(name);
}

function validatePhoneNumber(phoneNumber) {
  return /^[0-9]{10}$/.test(phoneNumber);
}

function validateEmail(email) {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
}