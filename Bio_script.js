    var storage = window.localStorage.getItem("bB_applicants");
    var bB_applicants = [];
    let ol = document.getElementById("B_enl");
    let person = document.createElement("li");
    
        
    const submitAndList =() => {
        var fName = document.getElementById("B_FN").Value;
        var lName = document.getElementById("B_LN").value;
        var Date_of_Birth = document.getElementById("B_date").value;
        var Country = document.getElementById("B_country").value;
        var District= document.getElementById("B_D").value;
        var Village = document.getElementById("B_V").value;
        var TA = document.getElementById("B_TA").value;
        var Edu_Level = document.getElementById("B_edu").value;
        var Phone_Number = document.getElementById("B_Phone").value;
        const b_applicant = {
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
        validation();
        bSaveApplicants(b_applicant);
        bLoadApplicants();
        bApplicantsListing(b_applicant);
        nullify();
        if(validation()==="true"){
            alert("you have been successfully enlisted");
        };
    }
    const validation = () => {
    
        var fName = document.getElementById("B_FN").Value;
        var lName = document.getElementById("B_LN").value;
        var Date_of_Birth = document.getElementById("B_date").value;
        var Country = document.getElementById("B_country").value;
        var District = document.getElementById("B_D").value;
        var Village = document.getElementById("B_V").value;
        var TA = document.getElementById("B_TA").value;
        var Edu_Level = document.getElementById("B_edu").value;
        var Phone_Number = document.getElementById("B_Phone").value;
        
        
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
    const bSaveApplicants = (b_applicant) => {
       if (storage === undefined && storage === null){
           b_applicants.push(b_applicant);
           window.localStorage.setItem("b_applicants", JSON.stringify(b_applicants));
       } else{
           if (storage !== 0){
               b_applicants = JSON.parse(window.localStorage.getItem("b_applicants"));
           }
       }
      
    }

    const bApplicantsListing = (b_applicant) =>{
            person.innerHTML= b_applicant;
        return b_applicant;
    }
    const bLoadApplicants = () => {
        if(storage !== undefined && storage !== null){
            if(storage.length !== 0){
                b_applicant = JSON.parse(storage);
            }
        if (b_applicants !== null){
            if(b_applicants.length !== 0){
                b_applicants.map(b_applicant => {
                    ol.appendChild(applicantListing(b_applicant.fName +" "+ b_applicant.lName + '(' + b_applicant.Edu_Level +')'));
                });
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