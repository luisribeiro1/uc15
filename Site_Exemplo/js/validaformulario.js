/*adicionar um ouvinte*/
document.getElementById("form1").addEventListener(
    "submit", function (event) {


        let valido = true
        let mensagem = []



        /*valida nome com pelo menos duas palavras*/
        const nome = document.getElementById("nome").value
        if (nome.split(" ").length < 2) {
            valido = false
            mensagem.push("O nome deve conter pelo menos duas palavras.")
        }

        /* validar o campo Sexo*/

        const sexoM = document.getElementById("masculino").checked
        const sexoF = document.getElementById("feminino").checked

        if (!sexoF && !sexoM)
            valido = false
        mensagem.push("Selecione o campo sexo.")



        /*validar campo estado*/

        const estado = document.querySelector("select[ name='estado']")
        if (!estado.value){
            valido = false
            mensagem.push("Selecione o campo de estado.")
        }

        /* validar o campo comentario*/

        const comentario = document.getElementById("comentario").value
         if   (comentario.length < 50){
            valido = false
            mensagem.push(" O comentário deve ter pelo menos 50 caracteres.")
         }




        if (!valido) {     /*! = falso ou oposto */
            event.preventDefault()            /* impede o envio de formularios */
            alert(mensagem.join("\n"))
        }
    }
)