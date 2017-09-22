//Regular Expressions

//Searching for what you want
//store a string in a variable
var text = "Java script is not Java or Script. Javascript is a language in its own right.";
//store a regular expression in a variable
var regex = /java\s*script/ig;
//update the text to have the proper spelling of Javasccript
text = text.replace(regex, "JavaScript");
//console the update variable
console.log(text);

//validating email
//create function
function validateEmail(){
  //store an element
  var useremail = document.getElementById('useremail');
  //store the regular Expressions
  var regex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
  //store the result of the test
  var test = regex.test(useremail.value);
  //display the result of the test
  console.log(test);
};

//store an element
var submitBtn = document.getElementById('submitBtn');
//add an event to the element with the id of "submitBtn"
submitBtn.addEventListener("click",validateEmail, false);
