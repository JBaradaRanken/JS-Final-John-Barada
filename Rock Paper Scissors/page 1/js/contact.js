function validateForm(event) {
    event.preventDefault(); // Page kept reloading instead of going to thanks.html
  
    const errorBox = document.getElementById('errorBox');
    errorBox.style.display = 'none';
    errorBox.innerHTML = '';
  
    const firstName = document.getElementById('firstName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const state = document.getElementById('state').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
  
    if (firstName === '' || email === '' || phone === '' || state === '' || !gender || hobbies.length === 0) {
      displayError('All fields are required.');
      return false;
    }
    // validate the forms were filled
    window.location.href = 'thanks.html';
    // Opens Thanks.html if true

  
    return true;
  }
  
  function displayError(errorMessage) {
    const errorBox = document.getElementById('errorBox');
    errorBox.innerHTML = errorMessage;
    errorBox.style.display = 'block';
  }
  
  function clearForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('errorBox').style.display = 'none';
  }
  