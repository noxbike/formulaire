$(function(){
    $('#submit').click(function(){
        const donnees = ['input', 'textarea'];
        var valemail = '';
        var messageError="";
        
        var infoForm = readForm(donnees);

        for(element of infoForm){
            //if result is empty add input class in error message
            if(!element.result){
                messageError += ` ${element.name}` ;
            }
            //if result is not empty and input class is email
            //then check if email is correct
            else if(element.name == 'email' && element.result){
                valemail = validateEmail(element.result);
            }
        }
        //if messageError is not empty add all input name with text
        messageError = messageError ? `<p style='color: red;'>veuillez remplir le(s) champ(s) suivant: ${messageError}</p>`: '' ;
        //if messageError is empty and valemail is empty
        //then messageError must confirm message
        //or messageError and valemail must be show 
        messageError = !messageError && !valemail ? `<p style='color: green;'>Votre message a bien été envoyé</p>`: `${messageError}  ${valemail}`;
        
        $('#message-error').html(messageError);
        return false; 
    })
})