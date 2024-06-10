const information = document.querySelector(".infoRegister");

function removeBorder(field) {
    field.addEventListener('input', () => {
        information.innerHTML = "";
        field.style.border = ""; 
    });
}

function validateFields(fields) {
    for (const field of fields) {
        if (field.value === "") {
            field.style.border = "2px solid #f01010";
            removeBorder(field);
        }
    }
}

export default function register(e) {
    e.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const fields = [username, password, confirmPassword];

    if (fields.some(field => field.value === "")) {
        information.style.color = "#f01010";
        information.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
        validateFields(fields);
        return;
    }

    if (password.value !== confirmPassword.value) {
        information.style.color = "#f01010";
        information.innerHTML = "As senhas não coincidem. Por favor, verifique e tente novamente.";
        return;
    }

    if (localStorage.getItem(username.value)) {
        information.style.color = "#f01010";
        information.innerHTML = "O Usuário digitado já existe.";
        return;
    }

    localStorage.setItem(username.value, password.value);

    fields.forEach(field => field.value = '');

    information.style.color = "#3cf010";
    information.innerHTML = "Usuário cadastrado com sucesso!";
}
