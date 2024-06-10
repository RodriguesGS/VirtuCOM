const information = document.querySelector(".infoLogin");

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

export default function login(e) {
    e.preventDefault();

    const username = document.getElementById('usernameLogin');
    const password = document.getElementById('passwordLogin');
    

    const fields = [username, password];

    if (fields.some(field => field.value === "")) {
        information.style.color = "#f01010";
        information.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
        validateFields(fields);
        return;
    }

    const storedPassword = localStorage.getItem(username.value);

    if (!storedPassword) {
        information.style.color = "#f01010";
        information.innerHTML = "Usuário não encontrado!";
        return;
    }

    if (storedPassword !== password.value) {
        information.style.color = "#f01010";
        information.innerHTML = "Senha incorreta";
        return;
    }

    fields.forEach(field => field.value = '');

    information.style.color = "#3cf010";
    information.innerHTML = "Usuário logado com sucesso!";
}
