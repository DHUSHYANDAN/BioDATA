const form = document.querySelector("#form");
const Fullname = document.querySelector("#name");
const Phonenumber = document.querySelector("#phonenumber");
const email = document.querySelector("#email");
const Linkedin = document.querySelector("#link");
const address = document.querySelector("#floatingTextarea2");
const Firstname = document.querySelector("#firstname");
const DateofBirth = document.querySelector("#Dateofbirth");
const Language = document.querySelector("#lang");
const Height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const Nationality = document.querySelector("#nation");
const Religion = document.querySelector("#religion");
const Caste = document.querySelector("#caste");
const EQ = document.querySelector("#tabletext");
const Expre = document.querySelector("#tabletext");
const agree = document.querySelector("#mycheck");


const PHONE_REGEX="/^[0-9]{10}$/";
const NAME_REGEX="/^[0-9]{10}$/";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate(Firstname,NAME_REGEX,"Please enter Valid NAme")) {
    console.log("success");
  }
});

// Fullname.addEventListener("keyup", validateInputs);
// Phonenumber.addEventListener("keyup", validateInputs);
// email.addEventListener("keyup", validateInputs);
// Linkedin.addEventListener("keyup", validateInputs);
// address.addEventListener("keyup", validateInputs);
// Firstname.addEventListener("keyup", validateInputs);

function isExists(data,message) {
  if (data.value === "" || data.value === undefined) {
    setError(data, message);
    return false;
  } else {
    return true;
  }
}

function isValid(data,message,pattern) {
  return 
}

function validate(data,pattern,message){
  if (data.value === "" || data.value === undefined) {
    setError(data, message);
    return false;
  } else {
    if(data.value.match(pattern)){
      return true;
    }else{
      setError(data,message);
    }
  }
}



// function validateInputs() {
//   Fullname.value;
//   Phonenumber.value;
//   email.value;
//   Linkedin.value;
//   address.value;
//   Firstname.value;
//   DateofBirth.value;
//   Religion.value;
//   Language.value;
//   Height.value;
//   weight.value;
//   Nationality.value;
//   Caste.value;
//   EQ.value;
//   Expre.value;
//   agree.value;
//   let success = true;

//   console.log("Full Name : " + Fullname.value);
//   console.log("phonenumber : " + Phonenumber.value);
//   console.log("email : " + email.value, "adresss: " + address.value);
//   console.log("Firstname:" + Firstname.value);
//   console.log("DateofBirth" + DateofBirth.value);
//   console.log("language:" + Language.value);
//   console.log("Nationality:" + Nationality.value);
//   console.log("Height:" + Height.value);
//   console.log("weight:" + weight.value);
//   console.log("Religion:" + Religion.value);
//   console.log("Caste:" + Caste.value);
//   console.log("EQ:" + EQ.value);
//   console.log("Expre:" + Expre.value);
//   console.log("agree:" + agree.value);

//   if (Fullname.value === "" || Fullname.value === undefined) {
//     success = false;
//     setError(Fullname, "name is required");
//   } else {
//     setSuccess(Fullname);
//   }

//   if (Phonenumber.value === "" || Phonenumber.value === undefined) {
//     success = false;
//     setError(Phonenumber, "Phonenumber is required");
//   }
//   if (!validatePhonenumber(Phonenumber.value)) {
//     success = false;
//     setError(Phonenumber, "Please Enter valid Phonenumber");
//   } else {
//     setSuccess(Phonenumber);
//   }

//   if (email.value === "" || email.value === undefined) {
//     success = false;
//     setError(email, "email is required");
//   }
//   if (!validateEmail(email.value)) {
//     success = false;
//     setError(email, "Please Enter valid Email");
//   } else {
//     setSuccess(email);
//   }

//   if (Linkedin.value === "" || Linkedin.value === undefined) {
//     success = false;
//     setError(Linkedin, "LinkedIn Profile is required");
//   }
//   if (!validateLink(Linkedin.value)) {
//     success = false;
//     setError(Linkedin, " Please Enter valid LinkedIn LINK");
//   } else {
//     setSuccess(Linkedin);
//   }

//   if (address.value === "" || address.value === undefined) {
//     success = false;
//     setError(address, "address is required");
//   } else {
//     setSuccess(address);
//   }

//   if (Firstname.value === "" || Firstname.value === undefined) {
//     success = false;
//     setError(Firstname, "name is required");
//   } else {
//     setSuccess(Firstname);
//   }

//   if (DateofBirth.value === "") {
//     success = false;
//     setError(DateofBirth, "Date of Birth is required");
//   } else {
//     setSuccess(DateofBirth);
//   }

//   if (Language.value === "" || Language.value === undefined) {
//     success = false;
//     setError(Language, "Language is required");
//   } else {
//     setSuccess(Language);
//   }

//   if (Nationality.value === "" || Nationality.value === undefined) {
//     success = false;
//     setError(Nationality, "Nationality is required");
//   } else {
//     setSuccess(Nationality);
//   }
//   if (Height.value === "" || Height.value === undefined) {
//     success = false;
//     setError(Height, "height is required");
//   } else {
//     setSuccess(Height);
//   }
//   if (weight.value === "" || weight.value === undefined) {
//     success = false;
//     setError(weight, "weight is required");
//   } else {
//     setSuccess(weight);
//   }
//   if (Religion.value === "" || Religion.value === undefined) {
//     success = false;
//     setError(Religion, "religion is required");
//   } else {
//     setSuccess(Religion);
//   }
//   if (Caste.value === "" || Caste.value === undefined) {
//     success = false;
//     setError(Caste, "caste is required");
//   } else {
//     setSuccess(Caste);
//   }

//   if (EQ.value === "" || EQ.value === undefined) {
//     success = false;
//     setError(EQ, "Educational qualification is required");
//   } else {
//     setSuccess(EQ);
//   }

//   if (Expre.value === "" || Expre.value === undefined) {
//     success = false;
//     setError(Expre, "Experience qualification is required");
//   } else {
//     setSuccess(Expre);
//   }

//   if (!(agree.value === checkbox.checked) || agree.value === undefined) {
//     success = false;
//     setError(agree, "agree is required");
//   } else {
//     setSuccess(agree);
//   }

//   return success;
// }

function setError(element, message) {
  console.log(element);
  console.log(message);

  const formfloating = element.parentElement;
  const errorElement = formfloating.querySelector(".error");

  console.log(errorElement);

  errorElement.innerText = message;
  formfloating.classlist.add("error");
  formfloating.classlist.remove("success");
}

function setSuccess(element) {
  const formfloating = element.parentElement;
  const errorElement = formfloating.querySelector(".error");

  errorElement.innerText = "";
  // formfloating.classlist.add("success");
  // formfloating.classlist.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
};

const validateLink = (Linkedin) => {
  return String(Linkedin).match(/^(ftp|http|https):\/\/[^ "]+$/);
};
const validatePhonenumber = (Phonenumber) => {
  return Phonenumber.match(/^[0-9]{10}$/);
};
