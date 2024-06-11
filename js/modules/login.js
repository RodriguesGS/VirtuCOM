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

function showAdminInterface() {
    window.location.href = '../../pages/admin.html';
}

function showUserInterface() {
    window.location.href = '../../pages/user.html';
}

export default function login(e) {
    e.preventDefault();

    const usernameField = document.getElementById('usernameLogin');
    const passwordField = document.getElementById('passwordLogin');
    const username = usernameField.value;
    const password = passwordField.value;
    const fields = [usernameField, passwordField];

    if (fields.some(field => field.value === "")) {
        information.style.color = "#f01010";
        information.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
        validateFields(fields);
        return;
    }

    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        information.style.color = "#f01010";
        information.innerHTML = "Usuário não encontrado!";
        validateFields(fields);
        return;
    }

    if (storedPassword !== password) {
        information.style.color = "#f01010";
        information.innerHTML = "Senha incorreta";
        validateFields(fields);
        return;
    }

    fields.forEach(field => field.value = '');

    if (username === "admin") {
        showAdminInterface();
    } else {
        showUserInterface();
    }
}
