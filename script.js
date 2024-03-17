function openPopup() {
    document.getElementById("popupForm").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
  }
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var otp = document.getElementById("otp").value;

    // Validation logic goes here
    var nameRegex = /^[A-Za-z ]+$/;
    var phoneRegex = /^[0-9]{10}$/;
    var otpRegex = /^[0-9]+$/;

    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (only letters allowed)");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number (10 digits only)");
        return false;
    }

    if (!otpRegex.test(otp)) {
        alert("Please enter a valid OTP (only integer value)");
        return false;
    }

    // Redirect to success.html upon successful form submission
    window.location.href = "index.html";

    return true;
}

// Function to initialize Firebase and send OTP
function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Create a reCAPTCHA verifier
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    // Send OTP to the provided phone number
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // OTP sent successfully
            // You can handle OTP confirmation here
            console.log('OTP sent successfully:', confirmationResult);
        })
        .catch((error) => {
            // Error occurred while sending OTP
            console.error('Error sending OTP:', error);
        });
}

// Attach click event listener to the "Generate OTP" button
document.getElementById('generateOtpButton').addEventListener('click', sendOTP);
  
