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
   
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    const input3Value = document.getElementById("input3").value;
    const input4Value = document.getElementById("select1").value;
    const input5Value = document.getElementById("datepicker").value;
    const input6Value = document.getElementById("select2").value;
    const input7Value = document.getElementById("select3").value;
    const input8Value = document.getElementById("select4").value;
    const input9Value = document.getElementById("select5").value;
    const input10Value = document.getElementById("textarea1").value;
    const input11Value = document.getElementById("textarea2").value;
    const input12Value = document.getElementById("textarea3").value;
    const input13Value = document.getElementById("select6").value;
    const input14Value = document.getElementById("input4").value;
    const input15Value = document.getElementById("input5").value;
    const input16Value = document.getElementById("input6").value;
    const input17Value = document.getElementById("input7").value;
    const input18Value = document.getElementById("input8").value;
    const input19Value = document.getElementById("input9").value;
    const input20Value = document.getElementById("input10").value;
    const input21Value = document.getElementById("input11").value;
    const input22Value = document.getElementById("input12").value;
    const input23Value = document.getElementById("input13").value;
    const input24Value = document.getElementById("input14").value;
    const input25Value = document.getElementById("select7").value;
    const input26Value = document.getElementById("select8").value;
    const input27Value = document.getElementById("select9").value;
    const input28Value = document.getElementById("datepicker2").value;
    const input29Value = document.getElementById("input15").value;
    const input30Value = document.getElementById("input16").value;
    const input31Value = document.getElementById("textarea4").value;
    const input32Value = document.getElementById("textarea5").value;
    const input33Value = document.getElementById("textarea6").value;

    loadDocxTemplate("TSPE_CheckList.docx").then(function (content) {

        const zip = new JSZip(content);
        const doc = new docxtemplater().loadZip(zip);

        doc.setData({

            nombre_proyecto: input1Value,
            nombre_app: input2Value,
            automatizador: input3Value,
            cliente: input4Value,
            fecha: input5Value,
            tipo_prueba: input6Value,
            ambiente_prueba: input7Value,
            tipo_red: input8Value,
            entorno: input9Value,
            pregunta1: input10Value,
            pregunta2: input11Value,
            pregunta3: input12Value,
            tipo_operacion: input13Value,
            version: input14Value,
            capacidad: input15Value,
            t_respuesta: input16Value,
            n_maximo_usuarios: input17Value,
            cant_maxima_tx_seg: input18Value,
            cant_maxima_tx_segs: input19Value,
            carga_pico_usuarios: input20Value,
            tx_segundo: input21Value,
            carga_normal_tx: input22Value,
            carga_pico_tx: input23Value,
            tolencia_errores: input24Value,
            req_autenticacion: input25Value,
            req_sesion: input26Value,
            req_timeout: input27Value,
            fecha2: input28Value,
            hora_exe: input29Value,
            total_duracion: input30Value,
            datos_variables: input31Value,
            datos_restricciones: input32Value,
            datos_infra: input33Value,
            
        });

        try {
            doc.render();
        } catch (error) {
            console.error("Error en la generación del documento", error);
            return;
        }

        const output = doc.getZip().generate({ type: "blob" });
        saveAs(output, "TSPE_CheckList_Performance.docx");
    }).catch(function (error) {
        console.error("Error en la carga de la plantilla .docx", error);
    });
}