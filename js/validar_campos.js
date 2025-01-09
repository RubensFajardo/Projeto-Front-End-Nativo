//Validações de campos obrigatórios utilizando Javascript Nativo

//Validação para o Formulário de Login
function ValidarCamposLogin() {
    if (document.formLogin.email.value == "") {
        alert("Preencher o campo obrigatório E-MAIL!");
        document.formLogin.email.focus();
        return false;
    }
    if (document.formLogin.senha.value == "") {
        alert("Preencher o campo obrigatório SENHA");
        document.formLogin.senha.focus();
        return false;
    }
}

//Validação para o Formulário de Cadastro
function ValidarCamposCadastro() {
    if (document.formCadastro.nome.value == "") {
        alert("Preencher o campo obrigatório NOME!");
        document.formCadastro.nome.focus();
        return false;
    }
    if (document.formCadastro.email.value == "") {
        alert("Preencher o campo obrigatório E-MAIL!");
        document.formCadastro.email.focus();
        return false;
    }
    if (document.formCadastro.data.value == "") {
        alert("Preencher o campo obrigatório DATA!");
        document.formCadastro.data.focus();
        return false;
    }
    if (document.formCadastro.cpf.value == "") {
        alert("Preencher o campo obrigatório CPF!");
        document.formCadastro.cpf.focus();
        return false;
    }
    if (document.formCadastro.bairro.value == "") {
        alert("Preencher o campo obrigatório BAIRRO!");
        document.formCadastro.bairro.focus();
        return false;
    }
    if (document.formCadastro.rua.value == "") {
        alert("Preencher o campo obrigatório RUA!");
        document.formCadastro.rua.focus();
        return false;
    }
    if (document.formCadastro.numero.value == "") {
        alert("Preencher o campo obrigatório NUMERO!");
        document.formCadastro.numero.focus();
        return false;
    }
    if (document.formCadastro.cep.value == "") {
        alert("Preencher o campo obrigatório CEP!");
        document.formCadastro.cep.focus();
        return false;
    }
    if (document.formCadastro.complemento.value == "") {
        alert("Preencher o campo obrigatório COMPLEMENTO!");
        document.formCadastro.complemento.focus();
        return false;
    }
    if (document.formCadastro.senha.value == "") {
        alert("Preencher o campo obrigatório SENHA!");
        document.formCadastro.senha.focus();
        return false;
    }
    if (document.formCadastro.repSenha.value == "") {
        alert("Preencher o campo obrigatório REPETIR SENHA!")
        document.formCadastro.repSenha.focus();
        return false;
    }
}