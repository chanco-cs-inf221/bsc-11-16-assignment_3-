    var storage = window.localStorage.getItem("p_applicants");
    var p_applicants = [];
    let ol = document.getElementById("P_enl");
    let person = document.createElement("li");
    
        
    const submitAndList =() => {
        var fName = document.getElementById("P_FN").Value;
        var lName = document.getElementById("P_LN").value;
        var Date_of_Birth = document.getElementById("P_date").value;
        var Country = document.getElementById("P_country").value;
        var District= document.getElementById(P_D").value;
        var Village = document.getElementById("P_V").value;
        var TA = document.getElementById("P_TA").value;
        var Edu_Level = document.getElementById("P_edu").value;
        var Phone_Number = document.getElementById("P_Phone").value;
        const cs_applicant = {
            fName : P_FN,
            lName : P_LN,
            Date_of_Birth : P_date,
            Country : P_country,
            District : P_D,
            village : P_V,
            TA : P_TA,
            Edu_Level : P_edu,
            Phone_Number : P_Phone
        }
        validation();
        p_applicantsSaveApplicants(pp_applicant);
        ppLoadApplicants();
        ppApplicantsListing(pp_applicant);
        nullify();
        if(validation()==="true"){
            alert("you have successfully been enlisted");
        };
    }
    const validation = () => {
    
        var fName = document.getElementById("P_FN").Value;
        var lName = document.getElementById("P_LN").value;
        var Date_of_Birth = document.getElementById("P_date").value;
        var Country = document.getElementById("P_country").value;
        var District = document.getElementById("P_D").value;
        var Village = document.getElementById("P_V").value;
        var TA = document.getElementById("P_TA").value;
        var Edu_Level = document.getElementById("P_edu").value;
        var Phone_Number = document.getElementById("P_Phone").value;
        
        
    if( fName === "" && lName === ""){
        alert("Please enter your full name!!!");
        return false;
    }  
    if(District ===""){
        alert("Please enter your current District!!!");
        return false;
    }
    if(Village ===""){
        alert("Please enter your current Village!!!");
        return false;
    } 
    if(TA ===""){
        alert("Please enter Traditiional Authority name!!!");
        return false;
    }  
    if(Phone_Number ===""){
        alert("Please enter your phone number!!!");
        return false;
    }  
    else {
        return true;
    }
}
    const pSaveApplicants = (p_applicant) => {
       if (storage === undefined && storage === null){
           p_applicants.push(p_applicant);
           window.localStorage.setItem("p_applicants", JSON.stringify(p_applicants));
       } else{
           if (storage !== 0){
               p_applicants = JSON.parse(window.localStorage.getItem("p_applicants"));
           }
       }
      
    }

    const pApplicantsListing = (p_applicant) =>{
            person.innerHTML= p_applicant;
        return p_applicant;
    }
    const pLoadApplicants = () => {
        if(storage !== undefined && storage !== null){
            if(storage.length !== 0){
                p_applicant = JSON.parse(storage);
            }
        }
        if (p_applicants !== null){
            if(p_applicants.length !== 0){
                p_applicants.map(p_applicant => {
                    ol.appendChild(applicantListing(p_applicant.fName +" "+ p_applicant.lName + '(' + p_applicant.Edu_Level +')'));
                });
            }
        }
    }
   
    nullify =()=> {
         document.getElementById('P_FN').value = '';
         document.getElementById('P_LN').value = '';
         document.getElementById('P_date').value = '';
         document.getElementById('P_country').value = '';
         document.getElementById('P_D').value = '';
         document.getElementById('P_V').value = '';
         document.getElementById('P_TA').value = '';
         document.getElementById('P_edu').value = '';
         document.getElementById('P_Phone').value = '';
    }