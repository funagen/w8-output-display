localStorage.setItem('userAddress','address');
localStorage.setItem('usePassword','password');

const localStorageAddress = localStorage.getItem('useAddress');
const localStoragePassword = localStorage.getItem('usePassword');

const address = document.getElementById('email');
const password = document.getElementById('password');
address.innerText = localStorageAddress;
password.innerText = localStoragePassword;