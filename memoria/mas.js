document.addEventListener("DOMContentLoaded", function () {
  const agregarFilaButton = document.getElementById("agregarFilaInput");

  agregarFilaButton.addEventListener("click", function (event) {
    event.preventDefault();

    const camposAdicionales = document.getElementById("camposAdicionales");
    const inputsGroup = document.createElement("div");
    inputsGroup.className = "inputs-group";

    const inputIds = ["CampoInput", "DescripcionInput", "EjemploInput"];
    const currentInputs = document.getElementsByClassName("inputs-group").length;

    inputIds.forEach(function (id) {
      const label = document.createElement("label");
      label.htmlFor = id + (currentInputs * 1);
      label.textContent = id.charAt(0).toUpperCase() + id.slice(1) + ":";

      const input = document.createElement("input");
      input.type = "text";
      input.id = id + (currentInputs * 1);

      inputsGroup.appendChild(label);
      inputsGroup.appendChild(input);
    });

    camposAdicionales.parentNode.insertBefore(inputsGroup, camposAdicionales);
  });
});
