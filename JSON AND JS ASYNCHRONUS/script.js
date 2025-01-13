const student = {
    name: "Akeel",
    grade:9
};

//Convert JS Object into JSON
const student_json = JSON.stringify(student);
document.write(student_json+"<br>");

//Convert JSON into JS Object
const student_new = JSON.parse(student_json);
document.write(student_new.name + "<br>");

function print(text) {
    document.write(text+"<br>");
}

function add(a, b, callback) {
    const result = a + b;
    callback(result);
}
add(3,5,print);

//Async/Await and Promise
function bringPizza() {
    return new Promise ((resolve,reject) => {
        const friendBringsPizza = true;
        setTimeout(() => {
            if (friendBringsPizza){
                resolve("Your friend has bought pizza.");
            } else {
                reject("Your friend has failed to bring pizza.");
            }
        }, 5000);

    });
}
async function hangout() {
    document.write("You call your friend to bring pizza.");
    try {
        const message = await bringPizza();
        document.write("Message Received: " +message);
        document.write("<br>");
        document.write("Let's hangout");
    } catch(error) {
        document.write(error);
    }
}
hangout();