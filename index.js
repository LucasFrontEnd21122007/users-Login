function registerUser(){
    const nickname = document.getElementById('users').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userData = {
        username: username,
        email: email,
        password:password,
        nickname:nickname
    };
    };
    fetch('URL_DA_SUA_API_DE_CADASTRO', {
        method:'POST',
        headers:{
            'content-type':'application-json',
        },
        body:JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data =>{
        console.log("cadastro bem sucedido", data);
        alert("cadastro feito com sucesso");
    })
    .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    });
    var idade = 18;

if (idade < 18) {
    console.log("You are underage.");
} else if (idade >= 18 && age < 60) {
    console.log("You Are Of legal age.");
} else {
    console.log("you are an elderly person.");
};