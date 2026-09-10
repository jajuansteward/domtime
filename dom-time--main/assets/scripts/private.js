console.log('in private dot js');

const signedIn = sessionStorage.get('signedIn');

if(signedIn == true) {
    console.log('yes signed in');
}
else{ 
    console.log('No, not signed in');
    window.location.href = "signin.html";
}
