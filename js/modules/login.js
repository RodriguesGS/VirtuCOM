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

    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const fields = [document.getElementById('usernameLogin'), document.getElementById('passwordLogin')];

    if (!username || !password) {
        information.style.color = "#f01010";
        information.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
        validateFields(fields);
        return;
    }


    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        information.style.color = "#f01010";
        information.innerHTML = "Usuário não encontrado!";
        return;
    }

    if (storedPassword !== password) {
        information.style.color = "#f01010";
        information.innerHTML = "Senha incorreta";
        return;
    }

    // Limpe os campos após o login bem-sucedido
    document.getElementById('usernameLogin').value = '';
    document.getElementById('passwordLogin').value = '';

    // Redirecione para a interface apropriada com base no tipo de usuário
    if (username === "admin") {
        showAdminInterface();
    } else {
        showUserInterface();
    }
}
