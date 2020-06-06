$(function(){
    $('#submit').click(function(){
        const donnees = ['input', 'textarea'];
        var textToShow;

        var infoForm = readForm(donnees);
        var message = checkForm(infoForm);

        //if messageError is not empty add all input name with text
        var messageError = message.messageError ? `<p style="color:red;" >veuillez remplir le(s) champ(s) manquante</p>`: '' ;
        //if messageError is empty and validEmail is empty
        //then messageError must confirm message or messageError and validEmail must be show
        textToShow = !messageError && !message.validEmail ? true : false ;

        if(!textToShow){
            $('#message-error').html(`${messageError}  ${message.validEmail}`);
            return false;
        }
        else{
            $('#message-error').html('<p style="color:green;"><i class="fas fa-spinner fa spinner"></i> Envoi en cours</p>');
        }
    })
})