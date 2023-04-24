const firebaseConfig = {
  apiKey: "AIzaSyCTiglNtRo5kPkC1NDoYk6MBVszT28Pros",
  authDomain: "portfolio-website-40c9d.firebaseapp.com",
  databaseURL: "https://portfolio-website-40c9d-default-rtdb.firebaseio.com",
  projectId: "portfolio-website-40c9d",
  storageBucket: "portfolio-website-40c9d.appspot.com",
  messagingSenderId: "121132994295",
  appId: "1:121132994295:web:fd81368d6a067405d24df2",
  measurementId: "G-7DEKBXQWNJ"
};
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}