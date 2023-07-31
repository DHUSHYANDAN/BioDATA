const form=document.querySelector("form");
const Fullname=document.querySelector("#fullname");
const email=document.querySelector("#email");
const Linkedin=document.querySelector("#link");
const address=document.querySelector("#floatingTextarea2");
const Firstname=document.querySelector("#firstname");
const DateofBirth=document.querySelector("#Dateofbirth");
const Gender=document.querySelector("#radio input[type='radio']");
const Marital=document.querySelector("#floatingSelect");
const floatingSelectLabel = document.querySelector('label[for="floatingSelect"]');
const Language=document.querySelector("#lang");
const Height=document.querySelector("#height");
const weight=document.querySelector("#weight");
const Nationality=document.querySelector("#nation");
const Religion=document.querySelector("#religion");
const Caste=document.querySelector("#caste");
const EQ=document.querySelector("#tabletext");
const Expre=document.querySelector("#tabletext")
const agree=document.querySelector("#mycheck");
 console.log(Firstname,Fullname,agree,Gender,Marital,weight);   

form.addEventListener("submit",(event) => {
   
  if(!validateInputs()){
   event.preventDefault();
   }
});
 
function validateInputs(){
    const FullnameVal=Fullname.Value.trim();
    const emailVal=email.Value.trim();
    const LinkedinVal=Linkedin.Value.trim();
    const addressVal=address.Value.trim();
    const FirstnameVal=Firstname.Value.trim();
    const DateofBirthVal=DateofBirth.Value.trim();
    const GenderVal=Gender.Value.trim();
    const MaritalVal=Marital.Value.trim();
    const ReligionVal=Religion.Value.trim();
    const LanguageVal=Fullname.Value.trim();
    const HeightVal=Height.Value.trim();
    const weightVal=weight.Value.trim();
    const NationalityVal=Nationality.Value.trim();
    const CasteVal=Caste.Value.trim();
    const EQVal=EQ.Value.trim();
    const ExpreVal=Expre.Value.trim();
    
    const agreeVal=agree.Value.trim();
    let success=true


    if(FullnameVal===""){
        success=false;
        setError(Fullname,"name is required")
    }
    else{
        setSuccess(Fullname)
    } 
    if(emailVal===""){
        success=false;
        setError(email,"email is required")
    }
    else if(!validateEmail(emailVal)){ 
        success=false;
        setError(email,'Please Enter valid Email')
    }else{setSuccess(email)} 

    if(LinkedinVal===""){
        success=false;
        setError(Linkedin,"LinkedIn Profile is required")
    }
    else if(!validateEmail(LinkedinVal)){ 
     success=false;
     setError(Linkedin," Please Enter valid LinkedIn LINK")
    }
    else{setSuccess(Linkedin)} 

    if(addressVal===""){
        success=false;
        setError(address,"address is required")
    }
    else{
        setSuccess(address)
    } 
 
    if(FirstnameVal===""){
        success=false;
        setError(Firstname,"name is required")
    }
    else{
        setSuccess(Firstname)
    }  
    
    if(DateofBirthVal===""){
        success=false;
        setError(DateofBirth,"Date of Birth is required")
    }
    else{
        setSuccess(DateofBirth)
    } 
 
    if(GenderVal===""){
        success=false;
        setError(Gender,"Language is required")
    }
    else{
        setSuccess(Gender)
    }  

    if(LanguageVal===""){
        success=false;
        setError(Language,"Language is required")
    }
    else{
        setSuccess(Language)
    } 
    if(NationalityVal===""){
        success=false;
        setError(Nationality,"Nationality is required")
    }
    else{
        setSuccess(Nationality)
    } 
    if(HeightVal===""){
        success=false;
        setError(Height,"height is required")
    }
    else{
        setSuccess(Height)
    } 
    if(weightVal===""){
        success=false;
        setError(weight,"weight is required")
    }
    else{
        setSuccess(weight)
    } 
    if(ReligionVal===""){
        success=false;
        setError(Religion,"religion is required")
    }
    else{
        setSuccess(Religion)
    } 
    if(CasteVal===""){
        success=false;
        setError(Caste,"caste is required")
    }
    else{
        setSuccess(Caste)
    }
    if(EQVal===""){
        success=false;
        setError(EQ,"EQ is required")
    }
    else{
        setSuccess(EQ)
    }  
    if(ExpreVal===""){
        success=false;
        setError(Expre,"EQ is required")
    }
    else{
        setSuccess(Expre)
    }  
    
    if(!MaritalVal){
        success=false;
        setError(Marital,"Marital is required")
    }
    else{
        setSuccess(Marital)
    } 
    
    if(agreeVal===""){
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

