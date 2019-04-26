const submitAndList = () => {
    var fName = document.getElementById("CS_FN").value;
    var lName = document.getElementById("CS_LN").value;
    var Date_of_Birth = document.getElementById("CS_date").value;
    var Country = document.getElementById("CS_country").value;
    var District = document.getElementById("CS_D").value;
    var Village = document.getElementById("CS_V").value;
    var TA = document.getElementById("CS_TA").value;
    var Edu_Level = document.getElementById("CS_edu").value;
    var Phone_Number = document.getElementById("CS_Phone").value;

    if(validation()){
    var cs_applicant = {
            fName : CS_FN,
            lName : CS_LN,
            Date_of_Birth :CS_date,
            Country : CS_country,
            District : CS_D,
            village : CS_V,
            TA : CS_TA,
            Edu_Level : CS_edu,
            Phone_Number : CS_Phone
        }
    csSaveApplicants(cs_applicant);
    csLoadApplicants();
    csApplicantsListing(cs_applicant);
    nullify();
    alert("you have been successfully enlisted");
    }
}
const validation = () => {
    var fName = document.getElementById("CS_FN").value;
    var lName = document.getElementById("CS_LN").value;
    var Date_of_Birth = document.getElementById("CS_date").value;
    var Country = document.getElementById("CS_country").value;
    var District = document.getElementById("CS_D").value;
    var Village = document.getElementById("CS_V").value;
    var TA = document.getElementById("CS_TA").value;
    var Edu_Level = document.getElementById("CS_edu").value;
    var Phone_Number = document.getElementById("CS_Phone").value;

if(fName==="" && lName === ""){
        alert("Please enter full name");
        return false;
        }
        else{
            if(Date_of_Birth === ""){
            alert("Please enter your date of birth!!!");
            return false;
            }
            else{
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
const csSaveApplicants = (cs_applicant) => {
    var storage = window.localStorage.getItem("cs_applicants");
    var cs_applicants = [];
    
   if (storage === undefined && storage === null){
       cs_applicants.push(cs_applicant);
       window.localStorage.setItem("cs_applicants", JSON.stringify(cs_applicants));
   } else{
       if (storage !== 0){
           cs_applicants = JSON.parse(window.localStorage.getItem("cs_applicants"));
       }
   }
}

const csApplicantsListing = (cs_applicant) => {
    let person = document.createElement("li");

    person.innerHTML= cs_applicant;
    return cs_applicant;
    
//    person.addEventListener("click", details(){
//    document.getElementById("details").innerHTML=
//        cs_applicant.fName +" "+ cs_applicant.Name + " born in, "+ cs_applicant.Date_of_Birth+ " currentry hold a " + cs_applicant.Edu_Level;
//    });
}
const csLoadApplicants = () =>{
    var storage = window.localStorage.getItem("cs_applicants");
    let ol = document.getElementById("P_enl");
    var cs_applicants =[];    
    
    if(storage !== undefined && storage !== null){
        if(storage.length !== 0){
            cs_applicant = JSON.parse(storage);
        }
    if (cs_applicants !== null){
        if(cs_applicants.length !== 0){
            cs_applicants.map(cs_applicant => {
                ol.appendChild(csApplicantListing(cs_applicant.fName +" "+ cs_applicant.lName + '(' + cs_applicant.Edu_Level +')'));
            });
        }
    }
}
}
nullify =()=> {
     document.getElementById('CS_FN').value = '';
     document.getElementById('CS_LN').value = '';
     document.getElementById('CS_date').value = '';
     document.getElementById('CS_country').value = '';
     document.getElementById('CS_D').value = '';
     document.getElementById('CS_V').value = '';
     document.getElementById('CS_TA').value = '';
     document.getElementById('CS_edu').value = '';
     document.getElementById('CS_Phone').value = '';
}
