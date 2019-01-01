

//This application will take information gathered from the user. It will send that information to createContact where it will be
// loaded and sent to createList there a list will created and stored. 

// `<fieldset>
// <label for=${name}>Contacts Name:</label>
// <input id="contact__Name" name="contact__Name" type="text" autofocus />
// <label for=${number}>Contacts Number:</label>
// <input id="contact__Number" name="contact__Number" type="text" autofocus />
// </fieldset>`

const formBuilder = {

    addInputForm()  {
        let inputForm =  `
        <fieldset>
        <label for="contact__Name__Label">Contacts Name:</label>
        <input id="contact__Name" name="contact__Name" type="text" attribute="required"  autofocus />
        <label for="contact__Number__Label">Contacts Number:</label>
        <input id="contact__Number" name="contact__Number" type="tel" attribute="required" autofocus />
        </fieldset>`

        let inputContainer = document.querySelector(".output");
        inputContainer.innerHTML = inputForm;
    },

    displayAllContacts(contactsObject) {
        let currentContacts =  `
        <fieldset>
        <p> ${contactsObject.contactName}</p>
        <p> ${contactsObject.contactNumber}</p>
        </fieldset>`

        let contactsContainer = document.querySelector(".currentContacts");
        contactsContainer.innerHTML += currentContacts;
    },

    clearIT(){
        let nukeIT = ` `
        let clearedContainer = document.querySelector(".currentContacts");
        clearedContainer.innerHTML = nukeIT;
    }

}


export default formBuilder