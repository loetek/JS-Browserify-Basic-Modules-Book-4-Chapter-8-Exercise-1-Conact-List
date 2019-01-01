//Need to add afunction that will post this list the database. 

 
const contactMoverandShaker = {
    //This function takes the user input and adds organizes into an object.
      createContact (name,number) {
    
        const contactObjList = {

            contactName: name,
            contactNumber: number

        }
            console.log (contactObjList);
            return contactObjList;
        },
//This method will post the data to the database. 
    contactPost (inputToPost){
        fetch("http://localhost:8088/contacts", { // Replace "url" with your API's URL
         method: "POST",
         headers: {
            "Content-Type": "application/json"
                },
            body: JSON.stringify(inputToPost)
        
         })
    
    }
}
  export default contactMoverandShaker