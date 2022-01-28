'use strict';
document.addEventListener('submit', function(){
  const email = document.querySelector('.email').value;
  console.log(email);

  if (!email) {
    alert('please enter mail!');
  }
});
