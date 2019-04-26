const search = () => {
    let x = document.getElementById("srch").value;
    let a = window.localStorage.getItem("b_applicants");
    let b = window.localStorage.getItem("cs_applicants");
    let c = window.localStorage.getItem("p_applicant");
    
    let b_applicants = [];
    let cs_applicants = [];
    let p_applicant = [];
    
    if (b_applicants.fName == x || b_applicants.lName== x){
        document.getElementById("display").innerHTML =
            x + "this person has enlisted in one of the Biology research programs."
    }
    else{
        if(cs_applicants.fName == x || cs_applicants.lName == x){
            document.getElementById("display").innerHTML =
                x + "this person has enlisted in one of the Computer Science education studies."
        }
        else{
            if(p_applicants.fName == x || p_applicants.lName == x){
                document.getElementById("display").innerHTML =
                    x + "this person has enlisted in one of Physics programs."
            }
            else{ 
                return  document.getElementById("display").innerHTML = "the person you enter has not been enlisted in any of the fields."
            }
        }
    }
}