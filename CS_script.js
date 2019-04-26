    var storage = window.localStorage.getItem("cs_applicants");
    var cs_applicants = [];
    let ol = document.getElementById("CS_enl");
    let person = document.createElement("li");
    
        
    const submitAndList =() => {
        var fName = document.getElementById("CS_FN").Value;
        var lName = document.getElementById("CS_LN").value;
        var Date_of_Birth = document.getElementById("CS_date").value;
        var Country = document.getElementById("CS_country").value;
        var District= document.getElementById("CS_D").value;
        var Village = document.getElementById("CS_V").value;
        var TA = document.getElementById("CS_TA").value;
        var Edu_Level = document.getElementById("CS_edu").value;
        var Phone_Number = document.getElementById("CS_Phone").value;
        const cs_applicant = {
            fName : CS_FN,
            lName : CS_LN,
            Date_of_Birth : CS_date,
            Country : CS_country,
            District : CS_D,
            village : CS_V,
            TA : CS_TA,
            Edu_Level : CS_edu,
            Phone_Number : CS_Phone
        }
        validation();
        csSaveApplicants(cs_applicant);
        csLoadApplicants();
        csApplicantsListing(cs_applicant);
        nullify();
        if(validation()==="true"){
            alert("you have been successfully enlisted");
        };
    }
    const validation = () => {
    
        var fName = document.getElementById("CS_FN").Value;
        var lName = document.getElementById("CS_LN").value;
        var Date_of_Birth = document.getElementById("CS_date").value;
        var Country = document.getElementById("CS_country").value;
        var District = document.getElementById("CS_D").value;
        var Village = document.getElementById("CS_V").value;
        var TA = document.getElementById("CS_TA").value;
        var Edu_Level = document.getElementById("CS_edu").value;
        var Phone_Number = document.getElementById("CS_Phone").value;
        
        
    if( fName === '' && lName === ''){
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
    const csSaveApplicants = (cs_applicant) => {
       if (storage === undefined && storage === null){
           cs_applicants.push(cs_applicant);
           window.localStorage.setItem("cs_applicants", JSON.stringify(cs_applicants));
       } else{
           if (storage !== 0){
               cs_applicants = JSON.parse(window.localStorage.getItem("cs_applicants"));
           }
       }
      
    }

    const csApplicantsListing = (cs_applicant) =>{
            person.innerHTML= cs_applicant;
        return cs_applicant;
    }
    const csLoadApplicants = () => {
        if(storage !== undefined && storage !== null){
            if(storage.length !== 0){
                cs_applicant = JSON.parse(storage);
            }
        if (cs_applicants !== null){
            if(cs_applicants.length !== 0){
                cs_applicants.map(cs_applicant => {
                    ol.appendChild(applicantListing(cs_applicant.fName +" "+ cs_applicant.lName + '(' + cs_applicant.Edu_Level +')'));
                });
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