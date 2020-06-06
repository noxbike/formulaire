//verify if all input you put in array
//if they are empty
//if input is not empty push the information we need in an array 
function readForm(array){
    var infoForm = [];
    for(element of array){
        $(element).each(function(){
            var name = $(this).attr("class");
            infoForm.push({name: name, result: $(`.${name}`).val()});
        })
    }
    return infoForm;
}

function checkForm(array){
    var resultat = { messageError: '', validEmail: '' };

    for(element of array){
        //if result is empty add input class in error message
        if(!element.result){
            resultat.messageError += ` ${element.name}` ;
            dangerBorder(element.name, element.result);
        }
        //if result is not empty and input class is email
        //then check if email is correct
        else if(element.name == 'email' && element.result){
            resultat.validEmail = validateEmail(element.result);
            dangerBorder(element.name, !resultat.validEmail);
        }

        else{
            dangerBorder(element.name, true);
        }
    }

    return resultat;
}

function dangerBorder(element, boolean){
   var resultat = boolean ? 'rgba(71, 71, 71, 0.493)' : 'rgba(255 ,0 , 0, 0.393)';
   $(`.${element}`).css('border-bottom', `1px solid ${resultat}`)
}

//verify if email is a real email
function validateEmail(email)
{
    var regexEmail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    var resultat = !regexEmail.test(email) ? '<p style="color:red;">Votre email est invalide</p>': '';
    return resultat;
}