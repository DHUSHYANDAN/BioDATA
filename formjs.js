
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("#username,#phonenumber,#link,#email,#textarea1,#firstname,#Dateofbirth,#lang,#nation,#height,#weight,#religion,#caste,#skills           ");
  const genderInputs = form.querySelectorAll("input[name='gender']");
  const statusSelect = form.querySelector("#floatingSelect");


  function checkRequired(inputs) {
    inputs.forEach((input) => {
      const value = input.value.trim();
      if (value === "") {
        errorMessage(input, `Please enter your ${getName(input)}`);
      }
      else if (input === username && !validateName(value)) {  
        errorMessage(input, "Please enter a valid  Name ");
      } 
      else if (input === phonenumber && !isValidPhoneNumber(value)) {  
        errorMessage(input, "Please enter a valid  number ");
      } 
      else if (input === email && !isValidEmail(value)) {  
        errorMessage(input, "Please enter a valid  Email or Gmail ");
      } 
      else if (input === link && !validateURL(value)) {  
        errorMessage(input, "Please enter a valid  URL ");
      } 
      else {
        successMessage(input);
      }
    });
  }
 
// Function to check if gender has been selected
function checkGender() {
  let genderSelected = false;
  genderInputs.forEach((input) => {
    if (input.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    errorMessage(genderInputs[0].parentElement, "Please select your gender");
  } else {
    successMessage(genderInputs[0].parentElement);
  }
}

function checkStatus() {
  const values = statusSelect.value;
  if (values === "0") {
    const color = document.getElementById('floatingSelect');
    color.style.borderColor = '#ff6347';
    color.addEventListener('focus', function() {
   
      color.style.boxShadow = '0px 0px 0px 4px rgb(255, 0, 0, 0.3)'; 
  });
  color.addEventListener('blur', function() {
    
    color.style.boxShadow = '';});
    errorMessage(statusSelect.parentElement, "Please select your status");
  } else {
    const color = document.getElementById('floatingSelect');
    color.style.borderColor = 'lightgreen';
    color.addEventListener('focus', function() {
   
      color.style.boxShadow = '0px 0px 0px 4px rgb(0, 255, 0, 0.3)'; 
  });
  color.addEventListener('blur', function() {
    
    color.style.boxShadow = '';});
    successMessage(statusSelect.parentElement);
  }
}
function checkAgreement() {
  const checkbox = document.querySelector("#mycheck");
  errorMessage(checkbox.parentElement, "You must agree to the terms.");
  if (!checkbox.checked) {
    const checkbox = document.querySelector("#mycheck");
    checkbox.style.borderColor = '#ff6347';
   
  } else {
    successMessage(checkbox.parentElement);
    checkbox.style.borderColor = 'lightgreen';
    
    
  }
}


// this for geting the elements by it attribute name
  function getName(input) {
    return input.getAttribute("name");
  }

  

  function errorMessage(input, message) {
    const field = input.parentElement;
    field.classList.remove("success");
    field.classList.add("error");
    const errorElement = field.querySelector(".eror");
    errorElement.textContent = message;
  }

  function successMessage(input) {
    const field = input.parentElement;
    field.classList.remove("error");
    field.classList.add("success");
    const errorElement = field.querySelector(".eror");
    errorElement.textContent = "";
    // const successElement = field.querySelector(".sucess");
    // successElement.textContent = "Success!";
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented");
    checkRequired(inputs);
    checkGender();
    checkStatus();
    checkAgreement();
  });


  //this for validating the individual properties
 
  function validateName(name) {
      return /^[A-Za-z\s]+$/.test(name);
    }

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  }
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

       return emailRegex.test(email);
     }
     function validateURL(url) {
  
        var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
      }

});
