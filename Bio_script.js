const submitAndList = () => {
    var fName = document.getElementById("B_FN").value;
    var lName = document.getElementById("B_LN").value;
    var Date_of_Birth = document.getElementById("B_date").value;
    var Country = document.getElementById("B_country").value;
    var District = document.getElementById("B_D").value;
    var Village = document.getElementById("B_V").value;
    var TA = document.getElementById("B_TA").value;
    var Edu_Level = document.getElementById("B_edu").value;
    var Phone_Number = document.getElementById("B_Phone").value;

    if(validation()){
    var b_applicant = {
            fName : B_FN,
            lName : B_LN,
            Date_of_Birth :B_date,
            Country : B_country,
            District : B_D,
            village : B_V,
            TA : B_TA,
            Edu_Level : B_edu,
            Phone_Number : B_Phone
        }
    bSaveApplicants(b_applicant);
    bLoadApplicants();
    bApplicantsListing(b_applicant);
    nullify();
    alert("you have been successfully enlisted");
    }
}
const validation = () => {
    var fName = document.getElementById("B_FN").value;
    var lName = document.getElementById("B_LN").value;
    var Date_of_Birth = document.getElementById("B_date").value;
    var Country = document.getElementById("B_country").value;
    var District = document.getElementById("B_D").value;
    var Village = document.getElementById("B_V").value;
    var TA = document.getElementById("B_TA").value;
    var Edu_Level = document.getElementById("B_edu").value;
    var Phone_Number = document.getElementById("B_Phone").value;

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
const bSaveApplicants = (b_applicant) => {
    var storage = window.localStorage.getItem("b_applicants");
    var b_applicants = [];
    
   if (storage === undefined && storage === null){
       b_applicants.push(b_applicant);
       window.localStorage.setItem("b_applicants", JSON.stringify(b_applicants));
   } else{
       if (storage !== 0){
           b_applicants = JSON.parse(window.localStorage.getItem("b_applicants"));
       }
   }

}

const bApplicantsListing = (b_applicant) => {
    let person = document.createElement("li");

    person.innerHTML= b_applicant;
    return b_applicant;
    
//    person.addEventListener("click", details(){
//        document.getElementById("details").innerHTML=
//            b_applicant.fName +" "+ b_applicant.Name + " born in, "+ b_applicant.Date_of_Birth+
//            " currentry hold a " + b_applicant.Edu_Level;
//    });
}
const bLoadApplicants = () =>{
    var storage = window.localStorage.getItem("b_applicants");
    let ol = document.getElementById("B_enl");
    
    
    if(storage !== undefined && storage !== null){
        if(storage.length !== 0){
            b_applicant = JSON.parse(storage);
        }
    if (b_applicants !== null){
        if(b_applicants.length !== 0){
            b_applicants.map(b_applicant => {
                ol.appendChild(bApplicantListing(b_applicant.fName +" "+ b_applicant.lName + '(' + b_applicant.Edu_Level +')'));
            });
        }
    }
 }
}
nullify =()=> {
     document.getElementById('B_FN').value = '';
     document.getElementById('B_LN').value = '';
     document.getElementById('B_date').value = '';
     document.getElementById('B_country').value = '';
     document.getElementById('B_D').value = '';
     document.getElementById('B_V').value = '';
     document.getElementById('B_TA').value = '';
     document.getElementById('B_edu').value = '';
     document.getElementById('B_Phone').value = '';
}
