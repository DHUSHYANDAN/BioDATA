const form=document.querySelector("#form");
const Fullname=document.querySelector("#fullname");
const Phonenumber=document.querySelector("#phonenumber");
const email=document.querySelector("#email");
const Linkedin=document.querySelector("#link");
const address=document.querySelector("#floatingTextarea2");
const Firstname=document.querySelector("#firstname");
const DateofBirth=document.querySelector("#Dateofbirth");
const Gender=document.querySelector("#radio input[type='radio']");
const Marital=document.querySelector("#floatingSelect");

const Language=document.querySelector("#lang");
const Height=document.querySelector("#height");
const weight=document.querySelector("#weight");
const Nationality=document.querySelector("#nation");
const Religion=document.querySelector("#religion");
const Caste=document.querySelector("#caste");
const EQ=document.querySelector("#tabletext");
const Expre=document.querySelector("#tabletext")
const agree=document.querySelector("#mycheck");
   

form.addEventListener("submit",(event) => {
   
  if(!validateInputs()){
   event.preventDefault();
   console.log('submited');
   }
});
Fullname.addEventListener('keyup', validateInputs);
function validateInputs(){
    const FullnameVal=Fullname.Value ;
    const PhonenumberVal=Phonenumber.Value ;
    const emailVal=email.Value ;
    const LinkedinVal=Linkedin.Value ;
    const addressVal=address.Value ;
   const FirstnameVal=Firstname.Value ;
    const DateofBirthVal=DateofBirth.Value ;
    const GenderVal=Gender.Value ;
    const ReligionVal=Religion.Value ;
    const LanguageVal=Language.Value ;
    const HeightVal=Height.Value ;
    const weightVal=weight.Value ;
    const NationalityVal=Nationality.Value ;
    const CasteVal=Caste.Value ;
    const EQVal=EQ.Value ;
    const ExpreVal=Expre.Value ;
    
    const agreeVal=agree.Value ;
    let success=true;

    console.log("Full Name : " + Fullname.value);
    if(FullnameVal === undefined ||Fullname.Value===""){
        success=false;
        setError(Fullname,"name is required")
    }
    else{
        setSuccess(Fullname)
    } 

    if(emailVal === undefined||emailVal===""){
        success=false;
        setError(email,"email is required")
    }
    else if(!validateEmail(emailVal)){ 
        success=false;
        setError(email,'Please Enter valid Email')
    }else{setSuccess(email)} 

    if(PhonenumberVal === undefined ||PhonenumberVal===""){
        success=false;
        setError(Phonenumber,"Phonenumber is required")
    }
    else if(!validatePhonenumber(PhonenumberVal)){ 
        success=false;
        setError(Phonenumber,'Please Enter valid Phonenumber')
    }else{setSuccess(Phonenumber)} 

    if(LinkedinVal=== undefined ||LinkedinVal===""){
        success=false;
        setError(Linkedin,"LinkedIn Profile is required")
    }
    else if(!validateEmail(LinkedinVal)){ 
     success=false;
     setError(Linkedin," Please Enter valid LinkedIn LINK")
    }
    else{setSuccess(Linkedin)} 

    if(addressVal=== undefined ||addressVal===""){
        success=false;
        setError(address,"address is required")
    }
    else{
        setSuccess(address)
    } 
 
    if(FirstnameVal=== undefined ||FirstnameVal===""){
        success=false;
        setError(Firstname,"name is required")
    }
    else{
        setSuccess(Firstname)
    }  
    
    if(DateofBirthVal=== undefined ||DateofBirthVal===""){
        success=false;
        setError(DateofBirth,"Date of Birth is required")
    }
    else{
        setSuccess(DateofBirth)
    } 
 
    if(GenderVal=== undefined ||GenderVal===""){
        success=false;
        setError(Gender,"Language is required")
    }
    else{
        setSuccess(Gender)
    }  

    if(LanguageVal=== undefined ||LanguageVal===""){
        success=false;
        setError(Language,"Language is required")
    }
    else{
        setSuccess(Language)
    } 
    if(NationalityVal=== undefined ||NationalityVal===""){
        success=false;
        setError(Nationality,"Nationality is required")
    }
    else{
        setSuccess(Nationality)
    } 
    if(HeightVal=== undefined ||HeightVal===""){
        success=false;
        setError(Height,"height is required")
    }
    else{
        setSuccess(Height)
    } 
    if(weightVal=== undefined ||weightVal===""){
        success=false;
        setError(weight,"weight is required")
    }
    else{
        setSuccess(weight)
    } 
    if(ReligionVal=== undefined ||ReligionVal===""){
        success=false;
        setError(Religion,"religion is required")
    }
    else{
        setSuccess(Religion)
    } 
    if(CasteVal=== undefined ||CasteVal===""){
        success=false;
        setError(Caste,"caste is required")
    }
    else{
        setSuccess(Caste)
    }
    if(EQVal=== undefined ||EQVal===""){
        success=false;
        setError(EQ,"EQ is required")
    }
    else{
        setSuccess(EQ)
    }  
    if(ExpreVal=== undefined ||ExpreVal===""){
        success=false;
        setError(Expre,"EQ is required")
    }
    else{
        setSuccess(Expre)
    }  
    
    
    
    if(agreeVal=== undefined ||agreeVal===""){
        success=false;
        setError(agree,"agree is required")
    }
    else{
        setSuccess(agree)
    }  
    
    
    return success;
}

function setError(element,message){
    const formfloating = element.parentElement;
    const errorElement=formfloating.querySelector('.error')

    errorElement.innerText=message;
    formfloating.classlist.add('error')
    formfloating.classlist.remove('success')
}
      
function setSuccess(element){
    const formfloating= element.parentElement;
    const errorElement=formfloating.querySelector(".error")

       errorElement.innerText='';
      formfloating.classlist.add("success")
       formfloating.classlist.remove("error")
}

const  validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
};

const  validateLink=(Linkedin)=>{
    return String(Linkedin)
    .match(/^(ftp|http|https):\/\/[^ "]+$/);
};
const  validatePhonenumber=(Phonenumber)=>{
    return String(Phonenumber)
    .match(/^[0-9]{10}$/);
};

