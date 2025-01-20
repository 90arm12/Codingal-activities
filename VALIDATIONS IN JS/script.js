function validate(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    //document.write("fullname");
    let message;
    if (fullname == "") {
        message = "Name is required";
        document.getElementById("validation_message").style.color="red";
    } else {
        message = "Form submitted";
        document.getElementById("validation_message").style.color = "green";
    }
    document.getElementById("validation_message").innerHTML = message;

}
function validateNumber() {
    const numberElement = document.getElementById("number");
    if (numberElement.checkValidity() == false) {
        message = numberElement.validationMessage;
    } else{
        message = "Okay";
    }
    document.getElementById("message").innerHTML = message
}