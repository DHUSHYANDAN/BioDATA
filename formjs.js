document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("#username,#phonenumber,#link,#email,#textarea1,#firstname,#Dateofbirth,#lang,#nation,#height,#weight,#religion,#caste,#skills");
  const statusSelect = form.querySelector("#floatingSelect");
  const genderInputs = form.querySelectorAll("input[name='gender']");
  const statusSelect2 = form.querySelector("#floatingSelect2");
  const statusSelect3 = form.querySelector("#floatingSelect3");

  inputs.forEach(input => {
    input.addEventListener("blur", () => checkInputs(input));
    input.addEventListener("keyup", () => checkInputs(input));
  });

  function checkRequired() {
    let formValid = true;
    inputs.forEach(input => {
      if (!checkInputs(input)) {
        formValid = false;
      }
    });
    return formValid;
  }

  function checkInputs(input) {
    let allValid = true;
    const value = input.value.trim();
    if (value === "") {
      errorMessage(input, `Please enter your ${getName(input)}`);
      allValid = false;
    } else if (input === username && !validateName(value)) {
      errorMessage(input, "Please enter a valid Name");
      allValid = false;
    } else if (input === phonenumber && !isValidPhoneNumber(value)) {
      errorMessage(input, "Please enter a valid number");
      allValid = false;
    } else if (input === email && !isValidEmail(value)) {
      errorMessage(input, "Please enter a valid Email or Gmail");
      allValid = false;
    } else if (input === link && !validateURL(value)) {
      errorMessage(input, "Please enter a valid URL");
      allValid = false;
    } else {
      successMessage(input);
    }
    return allValid;
  }

  function checkGender() {
    let genderSelected = false;
    genderInputs.forEach(input => {
      if (input.checked) {
        genderSelected = true;
      }
    });

    if (!genderSelected) {
      errorMessage(genderInputs[0].parentElement, "Please select your gender");
      return false;
    } else {
      successMessage(genderInputs[0].parentElement);
      return true;
    }
  }

  function checkSelection() {
    const selectElements = [
      { element: statusSelect3, errorMessage: "Please select your Experience" },
      { element: statusSelect2, errorMessage: "Please select your Qualification" },
      { element: statusSelect, errorMessage: "Please select your status" }
    ];

    let allValid = true;

    selectElements.forEach(select => {
      const value = select.element.value;
      if (value === "0") {
        select.element.style.borderColor = '#ff6347';
        select.element.addEventListener('focus', function() {
          select.element.style.boxShadow = '0px 0px 0px 4px rgba(255, 0, 0, 0.3)';
        });
        select.element.addEventListener('blur', function() {
          select.element.style.boxShadow = '';
        });
        errorMessage(select.element.parentElement, select.errorMessage);
        allValid = false;
      } else {
        select.element.style.borderColor = 'lightgreen';
        select.element.addEventListener('focus', function() {
          select.element.style.boxShadow = '0px 0px 0px 4px rgba(0, 255, 0, 0.3)';
        });
        select.element.addEventListener('blur', function() {
          select.element.style.boxShadow = '';
        });
        successMessage(select.element.parentElement);
      }
    });

    return allValid;
  }

  function checkAgreement() {
    const checkbox = document.querySelector("#mycheck");
    if (!checkbox.checked) {
      errorMessage(checkbox.parentElement, "You must agree to the terms.");
      checkbox.style.borderColor = '#ff6347';
      return false;
    } else {
      successMessage(checkbox.parentElement);
      checkbox.style.borderColor = 'lightgreen';
      return true;
    }
  }

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
  }

  form.addEventListener("submit", function(event) {
    const isGenderValid = checkGender();
    const isRequiredValid = checkRequired();
    const isSelectionValid = checkSelection();
    const isAgreementValid = checkAgreement();

    if (isGenderValid && isRequiredValid && isSelectionValid && isAgreementValid) {
      alert("Form submitted successfully!");
    } else {
      event.preventDefault();
      alert("Please complete all fields before submitting the form.");
      console.log("Form submission is prevented due to invalid input(s)");
    }
  });

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
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }
});
