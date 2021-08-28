const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault(); //Impedindo o formulário de enviar
    if(eInput.value == ""){ //Se o imail for inserido
        eField.classList.add("shake", "erro");
    }else{
        checkEmail(); //Chama a função checkEmail
    }
    if(pInput.value == ""){ //Se o password for inserido
        pField.classList.add("shake", "erro");
    }

    setTimeout(()=>{ //Remove a classe shake após 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    //vamos trabalhar nos dados de entrada
    eInput.onkeyup = ()=>{
        checkEmail(); //Chama a função checkEmail
    }


    //Criando as funções
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //padrão para validar e-mail
        if(!eInput.value.match(pattern)){ //se o padrão não corresponder, então adicione o erro e remova a classe válida
        eField.classList.add("erro");
        let erroTxt = eField.querySelector(".erro-txt");
        //se o e-mail não estiver correto, mostre, insira um e-mail válido, senão mostre o e-mail não pode ficar em branco
        (eInput.value != "") ? erroTxt.innerText = "Digite um email válido" : erroTxt.innerText = "Email não pode ficar em branco";
    }else{
        eField.classList.remove("erro");
        }
    }

    pInput.onkeyup = ()=>{
        if(pInput.value == ""){ //se o password for adicionado
        pField.classList.add("erro");
    }else{
        pField.classList.remove("erro");
        }
    }

    // se eField e pField não contiverem erro na classe, isso significa que os detalhes foram preenchidos corretamente
    if(!eField.classList.contains("erro") && !pField.classList.contains("erro")){
        window.location.href = "#";
        console.log("Formulário enviado");

        //ou podemos aplicar a linha abaxo
        //window.location.href = form.getAttribute("action"); // redirecionando o usuário para o url especificado que está dentro do atributo de ação da tag do formulário
    }
}