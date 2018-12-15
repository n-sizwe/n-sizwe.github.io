var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/syrian-civil-war.jpg') {
      myImage.setAttribute ('src','images/south-sudan-civil-war.jpg');
    } else {
      myImage.setAttribute ('src','images/syrian-civil-war.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to News Plug,' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to News Plug,' + storedName;
}
myButton.onclick = function() {
  setUserName();
}