const getemail = document.getElementById("emails");
const gettextarea = document.querySelector("textarea");
const getbtn = document.querySelector(".btn");
const getemcontainer = document.querySelector(".email-container");

getemail.focus();

getemail.addEventListener("keyup", function (e) {
  createemaillist(e.target.value);
});

function createemaillist(inputtext) {
  console.log(inputtext);
}
