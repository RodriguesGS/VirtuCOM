export default function initModal() {
    const openLoginButton = document.querySelector('[data-modal="sign-in"]');
    const openRegisterButton = document.querySelector('[data-modal="sign-out"]');
    const closeModalButtons = document.querySelectorAll('[data-modal="closeModal"]');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');


    // Esconder modal
    function toggleModal(modal) {
        return function(event) {
            event.preventDefault();
            modal.classList.toggle("ativo");
        };
    }

    // Fechar modal ao clicar fora dele
    function closeModal(modal) {
        return function(event) {
            if (event.target === modal) {
                modal.classList.remove("ativo");
            }
        };
    }

    // Add listener para abrir e fechar modal
    function addModalListener(openButton, modal) {
        if (openButton && modal) {
            openButton.addEventListener("click", toggleModal(modal));
            modal.addEventListener("click", closeModal(modal));
        }
    }
    
    function addCloseModal() {
        closeModalButtons.forEach(button => {
            button.addEventListener("click", () => {
                loginModal.classList.remove("ativo");
                registerModal.classList.remove("ativo");
            });
        });
    }

    addModalListener(openLoginButton, loginModal);
    addModalListener(openRegisterButton, registerModal);
    addCloseModal();
}
