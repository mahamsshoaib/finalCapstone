let contactDetails=[];
/*On page load it will stringify the array and will store it in session storage, if the visitor is
visiting the page second time his previously entered data will remain stored in session storage and would be parsed for further use. */
const pageLoad=()=>{
    if(sessionStorage.getItem("session")===null)
    {
        sessionStorage.setItem("session",true);
        sessionStorage.setItem("condetails",JSON.stringify(contactDetails));
    }
    else
    {
        contactDetails=JSON.parse(sessionStorage.getItem("condetails"));
    }
}
/*The function will validate any input and would throw error messages accordingly */
const isValidate = (input) => 
{
    let regex=/^[a-zA-Z]+$/;
    if (!regex.test(input.value))
    {
      input.nextElementSibling.innerHTML = "* Invalid input, please enter again.";
      input.value = "";
      input.focus();
    } 
    else 
    {
      input.nextElementSibling.innerHTML = "";
    }
}  
/*When the submit button is clicked, any data input by the user will be updated in session storage*/
const submitForm=(event)=>{
    event.preventDefault();
    const form = document.querySelector("form");
    const inputs = Array.from(form.elements);
    let index=0;
    for(let i=0;i<inputs.length;i++)
    {
        if (inputs[i].nodeName === "INPUT" || inputs[i].nodeName==="TEXTAREA") {
            contactDetails[index++]=(inputs[i].value);
        }
    }
    console.log(contactDetails);
    sessionStorage.setItem("condetails",JSON.stringify(contactDetails));
    alert("Wohoo. Your form has successfully been submitted.");
}
window.addEventListener("load",pageLoad);