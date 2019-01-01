(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//Need to add afunction that will post this list the database. 
const contactMoverandShaker = {
  //This function takes the user input and adds organizes into an object.
  createContact(name, number) {
    const contactObjList = {
      contactName: name,
      contactNumber: number
    };
    console.log(contactObjList);
    return contactObjList;
  },

  //This method will post the data to the database. 
  contactPost(inputToPost) {
    fetch("http://localhost:8088/contacts", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputToPost)
    });
  }

};
var _default = contactMoverandShaker;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//This application will take information gathered from the user. It will send that information to createContact where it will be
// loaded and sent to createList there a list will created and stored. 
// `<fieldset>
// <label for=${name}>Contacts Name:</label>
// <input id="contact__Name" name="contact__Name" type="text" autofocus />
// <label for=${number}>Contacts Number:</label>
// <input id="contact__Number" name="contact__Number" type="text" autofocus />
// </fieldset>`
const formBuilder = {
  addInputForm() {
    let inputForm = `
        <fieldset>
        <label for="contact__Name__Label">Contacts Name:</label>
        <input id="contact__Name" name="contact__Name" type="text" attribute="required"  autofocus />
        <label for="contact__Number__Label">Contacts Number:</label>
        <input id="contact__Number" name="contact__Number" type="tel" attribute="required" autofocus />
        </fieldset>`;
    let inputContainer = document.querySelector(".output");
    inputContainer.innerHTML = inputForm;
  },

  displayAllContacts(contactsObject) {
    let currentContacts = `
        <fieldset>
        <p> ${contactsObject.contactName}</p>
        <p> ${contactsObject.contactNumber}</p>
        </fieldset>`;
    let contactsContainer = document.querySelector(".currentContacts");
    contactsContainer.innerHTML += currentContacts;
  },

  clearIT() {
    let nukeIT = ` `;
    let clearedContainer = document.querySelector(".currentContacts");
    clearedContainer.innerHTML = nukeIT;
  }

};
var _default = formBuilder;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _contact = _interopRequireDefault(require("./contact"));

var _contactForm = _interopRequireDefault(require("./contactForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // From here we are testing storing the created contacts. 
_contactForm.default.addInputForm();

let saveButton = document.querySelector(".saveButton");
saveButton.addEventListener("click", event => {
  let nameInput = document.querySelector("#contact__Name").value;
  let numberInput = document.querySelector("#contact__Number").value;

  let newContact = _contact.default.createContact(nameInput, numberInput);

  _contact.default.contactPost(newContact);

  _contactForm.default.displayAllContacts(newContact);
});
let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", event => {
  _contactForm.default.clearIT();
});

},{"./contact":1,"./contactForm":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RGb3JtLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7QUFHQSxNQUFNLHFCQUFxQixHQUFHO0FBQzFCO0FBQ0UsRUFBQSxhQUFhLENBQUUsSUFBRixFQUFPLE1BQVAsRUFBZTtBQUUxQixVQUFNLGNBQWMsR0FBRztBQUVuQixNQUFBLFdBQVcsRUFBRSxJQUZNO0FBR25CLE1BQUEsYUFBYSxFQUFFO0FBSEksS0FBdkI7QUFNSSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQWEsY0FBYjtBQUNBLFdBQU8sY0FBUDtBQUNILEdBWnFCOztBQWE5QjtBQUNJLEVBQUEsV0FBVyxDQUFFLFdBQUYsRUFBYztBQUNyQixJQUFBLEtBQUssQ0FBQyxnQ0FBRCxFQUFtQztBQUFFO0FBQ3pDLE1BQUEsTUFBTSxFQUFFLE1BRCtCO0FBRXZDLE1BQUEsT0FBTyxFQUFFO0FBQ04sd0JBQWdCO0FBRFYsT0FGOEI7QUFLcEMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxXQUFmO0FBTDhCLEtBQW5DLENBQUw7QUFTSDs7QUF4QnlCLENBQTlCO2VBMEJpQixxQjs7Ozs7Ozs7OztBQzNCakI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sV0FBVyxHQUFHO0FBRWhCLEVBQUEsWUFBWSxHQUFJO0FBQ1osUUFBSSxTQUFTLEdBQUs7Ozs7OztvQkFBbEI7QUFRQSxRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUNBLElBQUEsY0FBYyxDQUFDLFNBQWYsR0FBMkIsU0FBM0I7QUFDSCxHQWJlOztBQWVoQixFQUFBLGtCQUFrQixDQUFDLGNBQUQsRUFBaUI7QUFDL0IsUUFBSSxlQUFlLEdBQUs7O2NBRWxCLGNBQWMsQ0FBQyxXQUFZO2NBQzNCLGNBQWMsQ0FBQyxhQUFjO29CQUhuQztBQU1BLFFBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXhCO0FBQ0EsSUFBQSxpQkFBaUIsQ0FBQyxTQUFsQixJQUErQixlQUEvQjtBQUNILEdBeEJlOztBQTBCaEIsRUFBQSxPQUFPLEdBQUU7QUFDTCxRQUFJLE1BQU0sR0FBSSxHQUFkO0FBQ0EsUUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLEdBQTZCLE1BQTdCO0FBQ0g7O0FBOUJlLENBQXBCO2VBbUNlLFc7Ozs7OztBQy9DZjs7QUFDQTs7OztBQUdBO0FBRUEscUJBQVksWUFBWjs7QUFFQSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFqQjtBQUVBLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxLQUFLLElBQUc7QUFFekMsTUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQXpEO0FBQ0EsTUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTdEOztBQUNBLE1BQUksVUFBVSxHQUFHLGlCQUFzQixhQUF0QixDQUFvQyxTQUFwQyxFQUErQyxXQUEvQyxDQUFqQjs7QUFDQSxtQkFBc0IsV0FBdEIsQ0FBa0MsVUFBbEM7O0FBQ0EsdUJBQVksa0JBQVosQ0FBK0IsVUFBL0I7QUFFSCxDQVJEO0FBVUEsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbEI7QUFFQSxXQUFXLENBQUMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsS0FBSyxJQUFHO0FBRTFDLHVCQUFZLE9BQVo7QUFFSCxDQUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9OZWVkIHRvIGFkZCBhZnVuY3Rpb24gdGhhdCB3aWxsIHBvc3QgdGhpcyBsaXN0IHRoZSBkYXRhYmFzZS4gXG5cbiBcbmNvbnN0IGNvbnRhY3RNb3ZlcmFuZFNoYWtlciA9IHtcbiAgICAvL1RoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIHVzZXIgaW5wdXQgYW5kIGFkZHMgb3JnYW5pemVzIGludG8gYW4gb2JqZWN0LlxuICAgICAgY3JlYXRlQ29udGFjdCAobmFtZSxudW1iZXIpIHtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFjdE9iakxpc3QgPSB7XG5cbiAgICAgICAgICAgIGNvbnRhY3ROYW1lOiBuYW1lLFxuICAgICAgICAgICAgY29udGFjdE51bWJlcjogbnVtYmVyXG5cbiAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cgKGNvbnRhY3RPYmpMaXN0KTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWN0T2JqTGlzdDtcbiAgICAgICAgfSxcbi8vVGhpcyBtZXRob2Qgd2lsbCBwb3N0IHRoZSBkYXRhIHRvIHRoZSBkYXRhYmFzZS4gXG4gICAgY29udGFjdFBvc3QgKGlucHV0VG9Qb3N0KXtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIiwgeyAvLyBSZXBsYWNlIFwidXJsXCIgd2l0aCB5b3VyIEFQSSdzIFVSTFxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0VG9Qb3N0KVxuICAgICAgICBcbiAgICAgICAgIH0pXG4gICAgXG4gICAgfVxufVxuICBleHBvcnQgZGVmYXVsdCBjb250YWN0TW92ZXJhbmRTaGFrZXIiLCJcblxuLy9UaGlzIGFwcGxpY2F0aW9uIHdpbGwgdGFrZSBpbmZvcm1hdGlvbiBnYXRoZXJlZCBmcm9tIHRoZSB1c2VyLiBJdCB3aWxsIHNlbmQgdGhhdCBpbmZvcm1hdGlvbiB0byBjcmVhdGVDb250YWN0IHdoZXJlIGl0IHdpbGwgYmVcbi8vIGxvYWRlZCBhbmQgc2VudCB0byBjcmVhdGVMaXN0IHRoZXJlIGEgbGlzdCB3aWxsIGNyZWF0ZWQgYW5kIHN0b3JlZC4gXG5cbi8vIGA8ZmllbGRzZXQ+XG4vLyA8bGFiZWwgZm9yPSR7bmFtZX0+Q29udGFjdHMgTmFtZTo8L2xhYmVsPlxuLy8gPGlucHV0IGlkPVwiY29udGFjdF9fTmFtZVwiIG5hbWU9XCJjb250YWN0X19OYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbi8vIDxsYWJlbCBmb3I9JHtudW1iZXJ9PkNvbnRhY3RzIE51bWJlcjo8L2xhYmVsPlxuLy8gPGlucHV0IGlkPVwiY29udGFjdF9fTnVtYmVyXCIgbmFtZT1cImNvbnRhY3RfX051bWJlclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4vLyA8L2ZpZWxkc2V0PmBcblxuY29uc3QgZm9ybUJ1aWxkZXIgPSB7XG5cbiAgICBhZGRJbnB1dEZvcm0oKSAge1xuICAgICAgICBsZXQgaW5wdXRGb3JtID0gIGBcbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fTmFtZV9fTGFiZWxcIj5Db250YWN0cyBOYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX05hbWVcIiBuYW1lPVwiY29udGFjdF9fTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgYXR0cmlidXRlPVwicmVxdWlyZWRcIiAgYXV0b2ZvY3VzIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb250YWN0X19OdW1iZXJfX0xhYmVsXCI+Q29udGFjdHMgTnVtYmVyOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX051bWJlclwiIG5hbWU9XCJjb250YWN0X19OdW1iZXJcIiB0eXBlPVwidGVsXCIgYXR0cmlidXRlPVwicmVxdWlyZWRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgPC9maWVsZHNldD5gXG5cbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGlucHV0Rm9ybTtcbiAgICB9LFxuXG4gICAgZGlzcGxheUFsbENvbnRhY3RzKGNvbnRhY3RzT2JqZWN0KSB7XG4gICAgICAgIGxldCBjdXJyZW50Q29udGFjdHMgPSAgYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxwPiAke2NvbnRhY3RzT2JqZWN0LmNvbnRhY3ROYW1lfTwvcD5cbiAgICAgICAgPHA+ICR7Y29udGFjdHNPYmplY3QuY29udGFjdE51bWJlcn08L3A+XG4gICAgICAgIDwvZmllbGRzZXQ+YFxuXG4gICAgICAgIGxldCBjb250YWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudENvbnRhY3RzXCIpO1xuICAgICAgICBjb250YWN0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY3VycmVudENvbnRhY3RzO1xuICAgIH0sXG5cbiAgICBjbGVhcklUKCl7XG4gICAgICAgIGxldCBudWtlSVQgPSBgIGBcbiAgICAgICAgbGV0IGNsZWFyZWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRDb250YWN0c1wiKTtcbiAgICAgICAgY2xlYXJlZENvbnRhaW5lci5pbm5lckhUTUwgPSBudWtlSVQ7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZm9ybUJ1aWxkZXIiLCJpbXBvcnQgY29udGFjdE1vdmVyYW5kU2hha2VyIGZyb20gXCIuL2NvbnRhY3RcIlxuaW1wb3J0IGZvcm1CdWlsZGVyIGZyb20gXCIuL2NvbnRhY3RGb3JtXCI7XG5cblxuLy8gLy8gRnJvbSBoZXJlIHdlIGFyZSB0ZXN0aW5nIHN0b3JpbmcgdGhlIGNyZWF0ZWQgY29udGFjdHMuIFxuXG5mb3JtQnVpbGRlci5hZGRJbnB1dEZvcm0oKTtcblxubGV0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVCdXR0b25cIik7XG5cbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+e1xuICAgIFxuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RfX05hbWVcIikudmFsdWU7XG4gICAgbGV0IG51bWJlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0X19OdW1iZXJcIikudmFsdWU7XG4gICAgbGV0IG5ld0NvbnRhY3QgPSBjb250YWN0TW92ZXJhbmRTaGFrZXIuY3JlYXRlQ29udGFjdChuYW1lSW5wdXQsIG51bWJlcklucHV0KTtcbiAgICBjb250YWN0TW92ZXJhbmRTaGFrZXIuY29udGFjdFBvc3QobmV3Q29udGFjdCk7XG4gICAgZm9ybUJ1aWxkZXIuZGlzcGxheUFsbENvbnRhY3RzKG5ld0NvbnRhY3QpO1xuIFxufSk7XG5cbmxldCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJCdXR0b25cIik7XG5cbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PntcblxuICAgIGZvcm1CdWlsZGVyLmNsZWFySVQoKTtcbiBcbn0pO1xuXG4iXX0=
