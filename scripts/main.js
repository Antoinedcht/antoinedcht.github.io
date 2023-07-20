const myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function SetUserName() {
    const myName = prompt('Please enter your name.');
    if(!myName) {
        SetUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Florianopolis is cool, ${myName}`;
    }
}

myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/brazil-florianopolis-sea-rocks.jpg') {
      myImage.setAttribute('src', 'images/florianopolisBridge.png');
    }
    else {
        myImage.setAttribute('src', 'images/brazil-florianopolis-sea-rocks.jpg');
        }
}

myButton.onclick = () => {
    SetUserName();
}

if(!localStorage.getItem('name')) {
    SetUserName();
}
else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Florianopolis is cool, ${storedName}`;
}
