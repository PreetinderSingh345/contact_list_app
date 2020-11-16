let displaySelectedContact=document.getElementById("display-selected-contact");//obtaining the display selected contact element

let contacts=document.getElementsByClassName("contact");//obtaining all the contacts with class name as contact

for(let i=0;i<contacts.length;i++){//iterating on all the contacts obtained above

    let contact=contacts[i];//getting a particular contact

    contact.addEventListener("click", function(){//handling the event when a particular contact is clicked

        let name=contact.getAttribute("data-name");//getting the name and the phone number of the contact which is clicked
        let phNo=contact.getAttribute("data-phNo");
        
        displaySelectedContact.style.display="block"//showing the display selected contact element with the name and the phone number of the selected contact
        displaySelectedContact.querySelector("#div1").innerText=name;
        displaySelectedContact.querySelector("#div2").innerText=phNo;

    });

}

let closeButton=document.getElementById("close");//obtaining the close button to hide the display selected contact container

closeButton.addEventListener("click", function(){//handlign the event when the close button is clicked

    displaySelectedContact.setAttribute("style", "");//hiding the display selected contact element

});