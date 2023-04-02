document.addEventListener("DOMContentLoaded", function () {
    const botonCaptura = document.getElementById("boton-captura");

    botonCaptura.addEventListener("click", function () {
        const contenido = document.querySelector(".contenido");

        html2canvas(contenido).then(function (canvas) {
            const enlace = document.createElement("a");
            enlace.href = canvas.toDataURL("image/png");
            enlace.download = "captura.png";
            enlace.click();
            enlace.remove();
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (e) {
            if (e.target.checked) {
                checkboxes.forEach(function (otherCheckbox) {
                    if (otherCheckbox !== e.target) {
                        otherCheckbox.checked = false;
                    }
                });
            }
            mostrarOcultarFormularios();
        });
    });
});

function mostrarOcultarFormularios() {
    const checkbox1 = document.getElementById("mostrar_formulario1");
    const checkbox2 = document.getElementById("mostrar_formulario2");
    const checkbox3 = document.getElementById("mostrar_formulario3");
    const checkbox4 = document.getElementById("mostrar_formulario4");
    const checkbox5 = document.getElementById("mostrar_formulario5");

    const formulario1 = document.getElementById("formulario1");
    const formulario2 = document.getElementById("formulario2");
    const formulario3 = document.getElementById("formulario3");
    const formulario4 = document.getElementById("formulario4");
    const formulario5 = document.getElementById("formulario5");

    formulario1.style.display = checkbox1.checked ? "block" : "none";
    formulario2.style.display = checkbox2.checked ? "block" : "none";
    formulario3.style.display = checkbox3.checked ? "block" : "none";
    formulario4.style.display = checkbox4.checked ? "block" : "none";
    formulario5.style.display = checkbox5.checked ? "block" : "none";

}