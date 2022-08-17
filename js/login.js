// step number 01.....Add eventhandler in the button
document.getElementById('btn-submit').addEventListener('click', function(){
  // step--02...get the email value from email input field
  const userEmail = document.getElementById('user-email');
  const email = userEmail.value;
  // step---3--get password from password input feild..
  const userPassword = document.getElementById('user-password');
  const password = userPassword.value;
  // step--4 check the password ---DENGER we can not use this way---
  if(email === 'sontan@baap.com' && password === 'bapkabeta'){
    window.location.href = 'bank.html'
  }
  else{
    alert('Tui password bhule gecos!!!! Toke ami taijjo putro goshona korlam')
  }
})