//verify if all input you put in array
//if they are empty
//if input is not empty push the information we need in an array 
function readForm(array){
    var infoForm = [];
    for(element of array){
        $(element).each(function(){
            var name = $(this).attr("class");
            var obj = {name: name, result: $(`.${name}`).val()};
            infoForm.push(obj);
        })
    }
    return infoForm;
}

//verify if email is a real email
function validateEmail(email)
{
    var regexEmail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    var exe = regexEmail.test(email);
    exe = !exe ? '<p style="color: red;">Votre email est invalide</p>': ' ';
    return exe;
}