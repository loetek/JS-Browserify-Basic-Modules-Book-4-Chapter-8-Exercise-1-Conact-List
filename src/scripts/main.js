import contactMoverandShaker from "./contact"
import formBuilder from "./contactForm";


// // From here we are testing storing the created contacts. 

formBuilder.addInputForm();

let saveButton = document.querySelector(".saveButton");

saveButton.addEventListener("click", event =>{
    
    let nameInput = document.querySelector("#contact__Name").value;
    let numberInput = document.querySelector("#contact__Number").value;
    let newContact = contactMoverandShaker.createContact(nameInput, numberInput);
    contactMoverandShaker.contactPost(newContact);
    formBuilder.displayAllContacts(newContact);
 
});

let clearButton = document.querySelector(".clearButton");

clearButton.addEventListener("click", event =>{

    formBuilder.clearIT();
 
});

