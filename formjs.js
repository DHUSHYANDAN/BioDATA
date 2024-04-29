document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input, textarea, select,error");

  inputs.forEach(input => {
    input.addEventListener("blur", function() {
      validateInput(input);
    });

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
    case "link":
      isValid = validateURL(value);
      break;
    case "address":
      isValid = validateName(value);
      break;
    case "select":
        isValid = validateStatus(value);
        break;
   
          
    
  }

  if (value === "") {
    errorElement.innerText = "This field is required";
    input.classList.add("is-invalid");
    return false; // Return false immediately if the field is empty
  }
    else if (!isValid) {
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

function validateURL(url) {
  
  var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}
// function validateRadio(radioGroup) {
//   // Loop through each radio button in the group
//   for (let i = 0; i < radioGroup.length; i++) {
//     if (radioGroup[i].checked) {
//       // If any radio button is checked, return true (valid)
//       return true;
//     }
//   }
//   // If no radio button is checked, return false (invalid)
//   return false;
// }
function validateStatus(select) {
  // Check if an option other than the default has been selected
  return select.value !== "0";
}
