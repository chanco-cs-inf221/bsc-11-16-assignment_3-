const submitAndList = () => {
    var fName = document.getElementById("P_FN").value;
    var lName = document.getElementById("P_LN").value;
    var Date_of_Birth = document.getElementById("P_date").value;
    var Country = document.getElementById("P_country").value;
    var District = document.getElementById("P_D").value;
    var Village = document.getElementById("P_V").value;
    var TA = document.getElementById("P_TA").value;
    var Edu_Level = document.getElementById("P_edu").value;
    var Phone_Number = document.getElementById("P_Phone").value;

    if(validation()){
    var p_applicant = {
            fName : P_FN,
            lName : P_LN,
            Date_of_Birth :P_date,
            Country : P_country,
            District : P_D,
            village : P_V,
            TA : P_TA,
            Edu_Level : P_edu,
            Phone_Number : P_Phonep
        }
    pSaveApplicants(p_applicant);
    pLoadApplicants();
    pApplicantsListing(p_applicant);
    nullify();
    alert("you have been successfully enlisted");
    }
}
const validation = () => {
    var fName = document.getElementById("P_FN").value;
    var lName = document.getElementById("P_LN").value;
    var Date_of_Birth = document.getElementById("P_date").value;
    var Country = document.getElementById("P_country").value;
    var District = document.getElementById("P_D").value;
    var Village = document.getElementById("P_V").value;
    var TA = document.getElementById("P_TA").value;
    var Edu_Level = document.getElementById("P_edu").value;
    var Phone_Number = document.getElementById("P_Phone").value;

if(fName==="" && lName === ""){
        alert("Please enter full name");
        return false;
        }
        else{
            if(Date_of_Birth === ""){
            alert("Please enter your date of birth!!!");
            return false;
            }
            else{p
                if(Country === ""){
                alert("Please enter current Country!!!");
                return false;
                }
                else{
                    if(District === ""){
                    alert("Please enter current District!!!");
                    return false;
                    }
                    else{
                        if(Village === ""){
                        alert("Please enter current Village!!!");
                        return false;
                        }
                        else{
                            if(TA === ""){
                            alert("Please enter your Traditinal Authority!!!");
                            return false;
                            }
                                else{
                                    if(Edu_Level === ""){
                                    alert("Please enter your level of education");
                                    return false;
                                    }
                                    else{
                                        if(Phone_Number === ""){
                                        alert("Please enter current country");
                                        return false;
                                        }
                                        else{
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }
const pSaveApplicants = (p_applicant) => {
    var storage = window.localStorage.getItem("p_applicants");
    var p_applicants = [];
    
   if (storage === undefined && storage === null){
       p_applicants.push(p_applicant);
       window.localStorage.setItem("p_applicants", JSON.stringify(p_applicants));
   } else{
       if (storage !== 0){
           p_applicants = JSON.parse(window.localStorage.getItem("p_applicants"));
       }
   }
}

const pApplicantsListing = (p_applicant) => {
    let person = document.createElement("li");

    person.innerHTML= p_applicant;
    return p_applicant;
    
//    person.addEventListener("click", details(){
//        document.getElementById("details").innerHTML=
//            p_applicant.fName +" "+ p_applicant.Name + " born in, "+ p_applicant.Date_of_Birth+ 
//            " currentry hold a " + _applicant.Edu_Level;
//    });
}
const pLoadApplicants = () =>{
    var storage = window.localStorage.getItem("p_applicants");
    let ol = document.getElementById("P_enl");
    
    
    if(storage !== undefined && storage !== null){
        if(storage.length !== 0){
            p_applicant = JSON.parse(storage);
        }
    if (p_applicants !== null){
        if(p_applicants.length !== 0){
            p_applicants.map(p_applicant => {
                ol.appendChild(pApplicantListing(p_applicant.fName +" "+ p_applicant.lName + '(' + p_applicant.Edu_Level +')'));
            });
        }
    }
 }
}
nullify =()=> {
     document.getElementById('P_FN').value = '';
     document.getElementById('P_LN').value = '';
     document.getElementById('P_date').value = '';
     document.getElementById('P_country').value = '';
     document.getElementById('P_D').value = '';
     document.getElementById('P_V').value = '';P
     document.getElementById('P_TA').value = '';
     document.getElementById('P_edu').value = '';
     document.getElementById('P_Phone').value = '';
}
P