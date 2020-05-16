let createButton = document.getElementById("sign-up-button");

createButton.addEventListener("click", function () {
    let inputFields = document.querySelectorAll(".inputs");

    let fName = inputFields[0].value;
    let lName = inputFields[1].value;
    let uName = inputFields[2].value;
    let email = inputFields[3].value;
    let birthday = inputFields[4].value;
    let gender = inputFields[5].value;
    let password = inputFields[6].value;

    let digiconUserAsJavascript = {
        "firstName" : fName,
        "lastName" : lName,
        "userName" : uName,
        "emailAddress" : email, 
        "birthday" : birthday,
        "gender" : gender,
        "password" : password
    };

    let digiconUserAsJson = JSON.stringify(digiconUserAsJavascript);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', "http://localhost:8080/api/digicon-user", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(digiconUserAsJson);
});
