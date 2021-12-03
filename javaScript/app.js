/* ==========  BACK TO TOP BUTTON ========== */

//Get the button:
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Got this code online. Credit to: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp //




/* ========== TRANSLATION BTN ========== */

console.log();

const switchBtn = document.getElementById('translate');

switchBtn.addEventListener('change', function () { 
    const enTrans = document.getElementById('enTranslation');
    const ptTrans = document.getElementById('ptTranslation');

    if (switchBtn.checked) { 
        enTrans.style.display = 'none';
        ptTrans.style.display = '';

    } else {
        enTrans.style.display = '';
        ptTrans.style.display = 'none';

    }

} );

/* ========== CONTACT FORM ========== */
 

// Validating


function contactValidation() {
    const userName = document.querySelector('.user-name');
    const userEmail = document.querySelector('.user-email');
    const userMessage = document.querySelector('.user-msg');
    const sendBtn = document.querySelector('.sendBtn');

   

    sendBtn.addEventListener( 'click', (e) => {

        e.preventDefault()

       if (userName.value === '' || userEmail.value === '' || userMessage.value === '' ){

            invalid();
       } else {
            sendEmail(userName.value, userEmail.value, userMessage.value);
            success();
            document.querySelector('form').reset(); // Refresh the form after email is sent and Ok button is clicked.
       }

    }) 
}

contactValidation()


// Send Email

    function sendEmail(userName, userEmail, userMessage) {

        const contactParams = { 
            from_name: document.querySelector('.user-name').value,
            to_name: 'Dan',
            message: document.querySelector('.user-msg').value,
            user_email: document.querySelector('.user-email').value,
    };
        

        emailjs.send("service_ro1eo97","contact-form", contactParams)
        .then(function(res){
        })
        
        
    }



// Alert Messages

function success () {
    swal({
        title: "Thank you!",
        text: "Your message has been sent!",
        icon: "success",
      });
}

function error () {
    swal({
        title: "Sorry",
        text: "We couldn't send your message! Please, try again.",
        icon: "error",
      });
}

function invalid() {

    swal({
        title: "Oops!",
        text: "Looks like you forgot to fill in your details.",
        icon: "error",
      });
    
}








