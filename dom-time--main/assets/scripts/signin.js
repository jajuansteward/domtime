// $('#signinBtn').on('click', function () {

// });

console.log('in signin dot js');

const signinBtn = document.querySelector("#signin-btn");
const pwdBox = document.querySelector("#pwd - box");
const hardCodePwd = 'lasagna';
// todo remove for demo.
pwdBox.value = hardCodePwd;

signinBtn.addEventListener('click', function () {
console.log("pwd value: ", pwdBox.value);
const userPwd = pwdBox.value;


// //IF password is lasagna
//     signed in!
// ELSE
//     show an error

//pwdBox.value == lasagna

console.log('use pwd: ', userPwd);
console.log(hardCodePwd);


if(userPwd == hardCodePwd) {
    console.log('signed in');
    sessionStorage.setItem('signedIn', 'true');
    window.location.href = "private.html";
}
else{
    console.log('NOT signed in');
    document.QuerySelector('#message').textContent = "nope. try again."
    pwdBox.value = '';
}


});

// demo stuff















// gets an id, I dom element
    const inputBoxes = document.getElementById('pwd-box');

// gets an array of all the elementswith that class [ ]
const inputBoxes = document.getElementsByClassName('pwd-class');

//get an array of all the elements with that tag []
const inputBoxes = document.getElementsByTagName('input');




    console.log("hellobx valueu", helloBox.value);

};
