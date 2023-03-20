document.addEventListener('DOMContentLoaded', function() {

  // Función para actualizar el tiempo total
  function updateTotal() {
    const hoursDesign = parseFloat(document.getElementById('test-case-hours-desing').value) || 0;
    const hoursDev = parseFloat(document.getElementById('test-case-hours-dev').value) || 0;
    const hoursRefactor = parseFloat(document.getElementById('test-case-hours-refactor').value) || 0;
    const hoursMant = parseFloat(document.getElementById('test-case-hours-mant').value) || 0;
    const hoursDoc = parseFloat(document.getElementById('test-case-hours-doc').value) || 0;

    const hoursTotal = hoursDesign + hoursDev + hoursRefactor + hoursMant + hoursDoc;
    document.getElementById('test-case-hours-total').value = hoursTotal;
  }

  document.getElementById('test-case-complexity').addEventListener('change', function () {
    const complexity = this.value;
    let hoursDesign, hoursDev, hoursRefactor, hoursMant, hoursDoc;

    switch (complexity) {
      case 'Muy bajo':
        hoursDesign = 0.5;
        hoursDev = 1.5;
        hoursRefactor = 0.25;
        hoursMant = 0.5;
        hoursDoc = 0.25;
        break;
      case 'Bajo':
        hoursDesign = 1;
        hoursDev = 4;
        hoursRefactor = 0.5;
        hoursMant = 2;
        hoursDoc = 0.5;
        break;
      case 'Medio':
        hoursDesign = 2;
        hoursDev = 10;
        hoursRefactor = 1;
        hoursMant = 2;
        hoursDoc = 1;
        break;
      case 'Alto':
        hoursDesign = 4;
        hoursDev = 16;
        hoursRefactor = 2;
        hoursMant = 4;
        hoursDoc = 2;
        break;
      case 'Muy alto':
        hoursDesign = 8;
        hoursDev = 24;
        hoursRefactor = 8;
        hoursMant = 8;
        hoursDoc = 4;
        break;
    }

    if (hoursDesign !== undefined) document.getElementById('test-case-hours-desing').value = hoursDesign;
    if (hoursDev !== undefined) document.getElementById('test-case-hours-dev').value = hoursDev;
    if (hoursRefactor !== undefined) document.getElementById('test-case-hours-refactor').value = hoursRefactor;
    if (hoursMant !== undefined) document.getElementById('test-case-hours-mant').value = hoursMant;
    if (hoursDoc !== undefined) document.getElementById('test-case-hours-doc').value = hoursDoc;

    // Calcular el tiempo total y asignarlo al campo correspondiente
    const hoursTotal = hoursDesign + hoursDev + hoursRefactor + hoursMant + hoursDoc;
    document.getElementById('test-case-hours-total').value = hoursTotal;

      // Actualizar el tiempo total después de asignar valores a los campos de horas
  updateTotal();
  });
 // Controladores de eventos para los campos de horas
 const hourInputs = document.querySelectorAll('#test-case-hours-desing, #test-case-hours-dev, #test-case-hours-refactor, #test-case-hours-mant, #test-case-hours-doc');
 hourInputs.forEach(input => {
   input.addEventListener('input', updateTotal);

});
});


function updateTotalHours() {
  const rows = document.querySelectorAll('#test-case-table tbody tr');
  let totalHours = 0;

  rows.forEach(row => {
    const rowHours = parseFloat(row.cells[6].innerText) || 0;
    totalHours += rowHours;
  });

  // Actualiza el total en el contenido del PDF
  document.getElementById('pdf-total').innerText = `Total de horas: ${totalHours.toFixed(2)}`;
}
