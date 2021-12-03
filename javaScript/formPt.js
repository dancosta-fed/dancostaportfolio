/* ========== CONTACT FORM ========== */
 

// Validating


function contactValidation() {
    const userNamePt = document.querySelector('.user-name-pt');
    const userEmailPt = document.querySelector('.user-email-pt');
    const userMessagePt = document.querySelector('.user-msg-pt');
    const sendBtnPt = document.querySelector('.sendBtn-pt');

   

    sendBtnPt.addEventListener( 'click', (e) => {

        e.preventDefault()

       if (userNamePt.value === '' || userEmailPt.value === '' || userMessagePt.value === '' ){

            invalidPt();
       } else {
            sendEmail(userNamePt.value, userEmailPt.value, userMessagePt.value);
            successPt();
            document.querySelector('form').reset(); // Refresh the form after email is sent and Ok button is clicked.
       }

    }) 
}

contactValidation()


// Send Email

    function sendEmail(userNamePt, userEmailPt, userMessagePt) {

        const contactParams = { 
            from_name: document.querySelector('.user-name-pt').value,
            to_name: 'Dan',
            message: document.querySelector('.user-msg-pt').value,
            user_email: document.querySelector('.user-email-pt').value,
    };
        

        emailjs.send("service_ro1eo97","contact-form", contactParams)
        .then(function(res){
        })
        
        
    }

// Alert Messages

function successPt () {
    swal({
        title: "Muito Obrigado!",
        text: "Sua Mensagem foi enviada com sucesso!",
        icon: "success",
      });
}

function errorPt () {
    swal({
        title: "Desculpa",
        text: "Não conseguimos enviar sua mensagem! Tente novamente, por favor.",
        icon: "error",
      });
}

function invalidPt () {

    swal({
        title: "Eita!",
        text: "Parece que você esqueceu de preencher seus dados!",
        icon: "error",
      });
    
}
