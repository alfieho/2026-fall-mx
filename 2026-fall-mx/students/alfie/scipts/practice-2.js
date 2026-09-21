const button = document.getElementById("my-button");
console.log(button);

const title = document.getElementById("title");
console.log(title);


function testMybutton(event) {
    console.log("Listen to my button!", event);
}
testMybutton("NOW");
button.addEventListener("click", testMybutton);

function testBody(event) {
    console.log("Listen to body!", event);
}
testBody("NOW");
document.body.addEventListener("click", testBody);