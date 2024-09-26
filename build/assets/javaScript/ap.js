document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Sua lógica aqui
            alert("Botão clicado!");
        });
    });
});
