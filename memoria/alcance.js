document.addEventListener("DOMContentLoaded", function () {
  const agregarFilaButton = document.getElementById("agregarFilaAlcance");

  agregarFilaButton.addEventListener("click", function (event) {
    event.preventDefault();

    const camposAdicionales = document.getElementById("camposAdicionales3");
    const inputsGroup = document.createElement("div");
    inputsGroup.className = "inputs-group3";

    const inputIds = ["CampoAlcance"];
    const currentInputs = document.getElementsByClassName("inputs-group3").length;

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
