$(function(){
    var messageError;
    var infoForm = [];

    $('#submit').click(function(){
        readForm();
        messageError = '';

        for(element of infoForm){
            if(element.result.length <= 0){
                messageError += `${element.name} `;
            }
        }
        $('#message-error').html(`<p>veuillez remplir le(s) champ(s) suivant: ${messageError}</p>`);

        return false;
    })

    function readForm(){
        let donnees = ['input', 'textarea'];
        for(element of donnees){
            $(element).each(function(){
                var name = $(this).attr("class");
                var obj = {name: name, result: $(`.${name}`).val()};
                infoForm.push(obj);
            })
        }
    }
})