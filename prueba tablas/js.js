        function mostrarBotones(){
            document.getElementById("contenedorBotones").style.display = "grid";
        }


        function agregarFila() {

            let tabla = document.getElementById("tablaprueba");
            let fila = document.createElement("tr");
            let columna1 = document.createElement("th");
            let columna2 = document.createElement("th");
            let columna3 = document.createElement("th");

            let value1 = document.getElementById("texto1");
            let value2 = document.getElementById("texto2");
            let value3 = document.getElementById("texto3");

            columna1.append('| ' + value1.value + ' |');
            columna2.append(value2.value);
            columna3.append('| ' + value3.value + ' |');
            fila.append(columna1, columna2, columna3);
            tabla.append(fila);

            texto1.value = ' ';
            texto2.value = ' ';
            texto3.value = ' ';

            document.getElementById("contenedorBotones").style.display = "none";
        }  
