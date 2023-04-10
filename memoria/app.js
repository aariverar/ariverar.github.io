document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");

    generateButton.addEventListener("click", function () {
        generateDocument();
    });
});

function loadDocxTemplate(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.statusText));
            }
        };

        xhr.onerror = function () {
            reject(new Error("Error en la solicitud de la plantilla .docx"));
        };

        xhr.send();
    });
}

function generateDocument() {
    const select1Value = document.getElementById("select1").value;
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    const select2Value = document.getElementById("select2").value;
    const input3Value = document.getElementById("input3").value;
    const datepickerValue = document.getElementById("datepicker").value;

    const inputsElements = document.getElementsByClassName("inputs-group");
    const inputs = Array.from(inputsElements).map(function (group) {
        const campoInput = group.querySelector("[id^='CampoInput']");
        const descripcionInput = group.querySelector("[id^='DescripcionInput']");
        const ejemploInput = group.querySelector("[id^='EjemploInput']");
        
        return {
            CampoInput: campoInput ? campoInput.value : "",
            DescripcionInput: descripcionInput ? descripcionInput.value : "",
            EjemploInput: ejemploInput ? ejemploInput.value : "",
        };
    });

      // Agrega este código para obtener los valores de los campos de salida
      const outputsElements = document.getElementsByClassName("inputs-group2");
      const outputs = Array.from(outputsElements).map(function (group) {
          const campoOutput = group.querySelector("[id^='CampoOutput']");
          const descripcionOutput = group.querySelector("[id^='DescripcionOutput']");
          
          return {
              CampoOutput: campoOutput ? campoOutput.value : "",
              DescripcionOutput: descripcionOutput ? descripcionOutput.value : "",
          };
      });

           // Agrega este código para obtener los valores de los campos de salida
           const alcancesElements = document.getElementsByClassName("inputs-group3");
           const alcances = Array.from(alcancesElements).map(function (group) {
               const campoAlcance = group.querySelector("[id^='CampoAlcance']");
                          
               return {
                    CampoAlcance: campoAlcance ? campoAlcance.value : "",
               };
           }); 

               // Agrega este código para obtener los valores de los campos de salida
               const precondicionesElements = document.getElementsByClassName("inputs-group4");
               const precondiciones = Array.from(precondicionesElements).map(function (group) { 
                   const campoPrecondiciones = group.querySelector("[id^='CampoPrecondiciones']");                              
                   return {
                        CampoPrecondiciones: campoPrecondiciones ? campoPrecondiciones.value : "",
                   };
               }); 
 

    loadDocxTemplate("TSPE_Memoria.docx").then(function (content) {
        const zip = new JSZip(content);
        const doc = new docxtemplater().loadZip(zip);

        doc.setData({
            cliente: select1Value,
            nombre_script: input1Value,
            nombre_proyecto: input2Value,
            framework: select2Value,
            automatizador: input3Value,
            fecha: datepickerValue,
            inputs: inputs,
            outputs: outputs,
            alcances: alcances,
            precondiciones: precondiciones,
        });

        try {
            doc.render();
        } catch (error) {
            console.error("Error en la generación del documento", error);
            return;

        }


        const output = doc.getZip().generate({ type: "blob" });
        saveAs(output, "Memoria_Tecnica_"+input1Value+".docx");
    }).catch(function (error) {
        console.error("Error en la carga de la plantilla .docx", error);
    });
}
