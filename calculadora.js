function mostrar() {
        if (document.getElementById("selec").value == "1") {
                document.getElementById("selecLongitud").innerHTML = `
<select id="longitud1" class="longitud1">
<option selected class="mum1" value="log">Longitud</option>
            <option class="num" value="metros">Metros</option>
            <option class="num" value="pies">Pies</option>
            <option class="num" value="millas">Millas</option>
            <option class="num" value="pulgadas">Pulgadas</option>
            <option class="num" value="yardas">Yardas</option>
            <option class="num" value="leguas">Leguas</option>
        </select>
        <span>a</span>
<select id="longitud2" class="longitud1">
<option selected class="mum1" value="log">Longitud</option>
            <option class="num" value="metros">Metros</option>
            <option class="num" value="pies">Pies</option>
            <option class="num" value="millas">Millas</option>
            <option class="num" value="pulgadas">Pulgadas</option>
            <option class="num" value="yardas">Yardas</option>
            <option class="num" value="leguas">Leguas</option>
        </select>
        <input id="numero" type="text" placeholder="ingrese un número">
        <button id="convertir" onclick="convertir()">Convertir</button>
`
        }

        if (document.getElementById("selec").value == "2") {
                document.getElementById("selecLongitud").innerHTML = `
    <select id="masa1" class="masa1">
    <option selected class="mum1" value="mas">Masa</option>
            <option class="num" value="kg">Kilogramos</option>
            <option class="num" value="lb">Libras</option>
            <option class="num" value="ton">Tonelada</option>
            <option class="num" value="gr">Gramo</option>     
            </select>
            <span>a</span>
    <select id="masa2" class="masa1">
    <option selected class="mum1" value="mas">Masa</option>
            <option class="num" value="kg">Kilogramos</option>
            <option class="num" value="lb">Libras</option>
            <option class="num" value="ton">Tonelada</option>
            <option class="num" value="gr">Gramo</option>     
            </select>
            <input id="numero" type="text" placeholder="ingrese un número">
            <button id="convertir" onclick="convertir1()">Convertir</button>
    `
        }

        if (document.getElementById("selec").value == "3") {
                document.getElementById("selecLongitud").innerHTML = `
        
        <select id="temp1" class="temp1">
        <option selected class="mum1" value="tem">Temperatura</option>
                   <option class="num" value="cs">Celsius o Centigrados</option>
                   <option class="num" value="fh">Farenheit</option>
                   <option class="num" value="kelvin">Kelvin</option>     
                </select>
                <span>a</span>
        <select id="temp2" class="temp1">
        <option selected class="mum1" value="tem">Temperatura</option>
                   <option class="num" value="cs">Celsius o Centigrados</option>
                   <option class="num" value="fh">Farenheit</option>
                   <option class="num" value="kelvin">Kelvin</option>     
                </select>
                <input id="numero" type="text" placeholder="ingrese un número">
                <button id="convertir" onclick="convertir2()">Convertir</button>
        `
        }
        if (document.getElementById("selec").value == "4") {
                document.getElementById("selecLongitud").innerHTML = `
        <select id="ohms1" class="ohms1">
        <option selected class="mum1" value="ley">Ley de ohms</option>
                   <option class="num" value="am">Amperios</option>
                   <option class="num" value="res">Resistencia</option>
                   <option class="num" value="vol">Voltaje</option>     
                </select>
                <span>a</span>
        <select id="ohms2" class="ohms1">
        <option selected class="mum1" value="ley">ley de ohms</option>
                   <option class="num" value="am">Amperios</option>
                   <option class="num" value="res">Resistencia</option>
                   <option class="num" value="vol">Voltaje</option>
                   <input id="1" class="numero1" type="text" placeholder="ingrese un número">
                   <input id="2" class="numero2" type="text" placeholder="ingrese un número">      
                </select>
                <button id="convertir" onclick="convertir3()">Convertir</button>
        `
        }
}
// LONGITUD
function convertir() {
        // metros a pies y viceversa
        if (document.getElementById("longitud1").value == "metros" && document.getElementById("longitud2").value == "pies") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * (3.28 / 1)
        }

        if (document.getElementById("longitud1").value == "pies" && document.getElementById("longitud2").value == "metros") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /3,281
        }

        // metros a millas y viceversa       
        if (document.getElementById("longitud1").value == "metros" && document.getElementById("longitud2").value == "millas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /1609,344
        }
        if (document.getElementById("longitud1").value == "millas" && document.getElementById("longitud2").value == "metros") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 1609
        }

        // metros a pulgadas y viceversa
        if (document.getElementById("longitud1").value == "metros" && document.getElementById("longitud2").value == "pulgadas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 1 / 0.0254
        }
        if (document.getElementById("longitud1").value == "pulgadas" && document.getElementById("longitud2").value == "metros") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 39.37
        }

        //metros a yardas y viceversa
        if (document.getElementById("longitud1").value == "metros" && document.getElementById("longitud2").value == "yardas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 1 / 0.914
        }
        if (document.getElementById("longitud1").value == "yardas" && document.getElementById("longitud2").value == "metros") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a/1,094
        }

        //metros a leguas y viceversa
        if (document.getElementById("longitud1").value == "metros" && document.getElementById("longitud2").value == "leguas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /4828
        }
        if (document.getElementById("longitud1").value == "leguas" && document.getElementById("longitud2").value == "metros") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 4828
        }

        //pies a millas y viceversa
        if (document.getElementById("longitud1").value == "pies" && document.getElementById("longitud2").value == "millas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a/5280
        }
        if (document.getElementById("longitud1").value == "millas" && document.getElementById("longitud2").value == "pies") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 5280
        }
        //pies a pulgadas y viceversa
        if (document.getElementById("longitud1").value == "pies" && document.getElementById("longitud2").value == "pulgadas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 12
        }
        if (document.getElementById("longitud1").value == "pulgadas" && document.getElementById("longitud2").value == "pies") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 12
        }
        //pies a yardas y viceversa
        if (document.getElementById("longitud1").value == "pies" && document.getElementById("longitud2").value == "yardas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 3
        }
        if (document.getElementById("longitud1").value == "yardas" && document.getElementById("longitud2").value == "pies") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 3 
        }
        //pies a leguas y viceversa
        if (document.getElementById("longitud1").value == "pies" && document.getElementById("longitud2").value == "leguas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a/15840
        }
        if (document.getElementById("longitud1").value == "leguas" && document.getElementById("longitud2").value == "pies") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 15840 
        }
        //millas a pulgadas y viceversa
        if (document.getElementById("longitud1").value == "millas" && document.getElementById("longitud2").value == "pulgadas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a*63360
        }
        if (document.getElementById("longitud1").value == "pulgadas" && document.getElementById("longitud2").value == "millas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /63360
        }
        //millas a yardas y viceversa
        if (document.getElementById("longitud1").value == "millas" && document.getElementById("longitud2").value == "yardas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a *1760
        }
        if (document.getElementById("longitud1").value == "yardas" && document.getElementById("longitud2").value == "millas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /1760
        }
        //millas a leguas y viceversa
        if (document.getElementById("longitud1").value == "millas" && document.getElementById("longitud2").value == "leguas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 3
        }
        if (document.getElementById("longitud1").value == "leguas" && document.getElementById("longitud2").value == "millas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 3 
        }
        //pulgadas a yardas y viceversa
        if (document.getElementById("longitud1").value == "pulgadas" && document.getElementById("longitud2").value == "yardas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 36
        }
        if (document.getElementById("longitud1").value == "yardas" && document.getElementById("longitud2").value == "pulgadas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 36
        }
        //pulgadas a leguas y viceversa
        if (document.getElementById("longitud1").value == "pulgadas" && document.getElementById("longitud2").value == "leguas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 190100
        }
        if (document.getElementById("longitud1").value == "leguas" && document.getElementById("longitud2").value == "pulgadas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 190100
        }
        //yardas a leguas y viceversa
        if (document.getElementById("longitud1").value == "yardas" && document.getElementById("longitud2").value == "leguas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /5280
        }
        if (document.getElementById("longitud1").value == "leguas" && document.getElementById("longitud2").value == "yardas") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 5280
        }

        // VALIDACIONES
        if (document.getElementById("longitud1").value == "log" && document.getElementById("longitud2").value == "log") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("longitud1").value == "metros" && document.getElementById("longitud2").value == "metros") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("longitud1").value == "pies" && document.getElementById("longitud2").value == "pies") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("longitud1").value == "millas" && document.getElementById("longitud2").value == "millas") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("longitud1").value == "pulgadas" && document.getElementById("longitud2").value == "pulgadas") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("longitud1").value == "yardas" && document.getElementById("longitud2").value == "yardas") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("longitud1").value == "leguas" && document.getElementById("longitud2").value == "leguas") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
         document.getElementById("numero").value=`` 
}
//MASA 
function convertir1() {
        // kilogramo a libra y viceversa
        if (document.getElementById("masa1").value == "kg" && document.getElementById("masa2").value == "lb") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 2,205
        }
        if (document.getElementById("masa1").value == "lb" && document.getElementById("masa2").value == "kg") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /2,205
        }
        // kilogramo a tonelada y viceversa
        if (document.getElementById("masa1").value == "kg" && document.getElementById("masa2").value == "ton") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /1000
        }
        if (document.getElementById("masa1").value == "ton" && document.getElementById("masa2").value == "kg") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 1000
        }
        // kilogramo a gramos y viceversa
        if (document.getElementById("masa1").value == "kg" && document.getElementById("masa2").value == "gr") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 1000 
        }
        if (document.getElementById("masa1").value == "gr" && document.getElementById("masa2").value == "kg") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a  / 1000
        }
        // libra a tonelada y viceversa
        if (document.getElementById("masa1").value == "lb" && document.getElementById("masa2").value == "ton") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 2205
        }
        if (document.getElementById("masa1").value == "ton" && document.getElementById("masa2").value == "lb") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 2205
        }
        // libra a gramos y viceversa
        if (document.getElementById("masa1").value == "lb" && document.getElementById("masa2").value == "gr") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 453,6
        }
        if (document.getElementById("masa1").value == "gr" && document.getElementById("masa2").value == "lb") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a /453,6
        }
        // toneladas a gramos y viceversa
        if (document.getElementById("masa1").value == "ton" && document.getElementById("masa2").value == "gr") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a * 1e+6 
        }
        if (document.getElementById("masa1").value == "gr" && document.getElementById("masa2").value == "ton") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a / 1e-6 
        }

        // VALIDACIONES
        if (document.getElementById("masa1").value == "mas" && document.getElementById("masa2").value == "mas") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("masa1").value == "kg" && document.getElementById("masa2").value == "kg") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("masa1").value == "lb" && document.getElementById("masa2").value == "lb") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("masa1").value == "ton" && document.getElementById("masa2").value == "ton") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("masa1").value == "gr" && document.getElementById("masa2").value == "gr") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        document.getElementById("numero").value=``
}
// TEMPERATURA
function convertir2() {
        // celsius a fahrenheit y viceversa
        if (document.getElementById("temp1").value == "cs" && document.getElementById("temp2").value == "fh") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = (a * 9 / 5) + 32
        }
        if (document.getElementById("temp1").value == "fh" && document.getElementById("temp2").value == "cs") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = (a - 32) * 5 / 9
        }
        // celsius a kelvin y viceversa
        if (document.getElementById("temp1").value == "cs" && document.getElementById("temp2").value == "kelvin") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a + 273.15
        }
        if (document.getElementById("temp1").value == "kelvin" && document.getElementById("temp2").value == "cs") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = a - 273.15
        }
        // fahrenheit a kelvin y viceversa
        if (document.getElementById("temp1").value == "fh" && document.getElementById("temp2").value == "kelvin") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = (a - 32) * 5 / 9 + 273.15
        }
        if (document.getElementById("temp1").value == "kelvin" && document.getElementById("temp2").value == "fh") {
                let a = parseInt(document.getElementById(`numero`).value);
                document.getElementById(`rta`).innerHTML = (a - 273.15) * 9 / 5 + 32
        }
        // VALIDACIONES
        if (document.getElementById("temp1").value == "tem" && document.getElementById("temp2").value == "tem") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("temp1").value == "cs" && document.getElementById("temp2").value == "cs") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("temp1").value == "fh" && document.getElementById("temp2").value == "fh") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("temp1").value == "kelvin" && document.getElementById("temp2").value == "kelvin") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        document.getElementById("numero").value=``
}

// LEY DE OHMS
function convertir3() {
        // amperios a resistencia y viceversa
        if (document.getElementById("ohms1").value == "am" && document.getElementById("ohms2").value == "res") {
                let a = parseInt(document.getElementById(`1`).value);
                let b = parseInt(document.getElementById(`2`).value);
                document.getElementById(`rta`).innerHTML = a * b
        }
        if (document.getElementById("ohms1").value == "res" && document.getElementById("ohms2").value == "am") {
                let a = parseInt(document.getElementById(`1`).value);
                let b = parseInt(document.getElementById(`2`).value);
                document.getElementById(`rta`).innerHTML = b * a
        }
        // amperios a voltaje y viceversa
        if (document.getElementById("ohms1").value == "am" && document.getElementById("ohms2").value == "vol") {
                let a = parseInt(document.getElementById(`1`).value);
                let b = parseInt(document.getElementById(`2`).value);
                document.getElementById(`rta`).innerHTML = a / b
        }
        if (document.getElementById("ohms1").value == "vol" && document.getElementById("ohms2").value == "am") {
                let a = parseInt(document.getElementById(`1`).value);
                let b = parseInt(document.getElementById(`2`).value);
                document.getElementById(`rta`).innerHTML = b / a
        }
        // voltaje a resistencia y vicebersa
        if (document.getElementById("ohms1").value == "res" && document.getElementById("ohms2").value == "vol") {
                let a = parseInt(document.getElementById(`1`).value);
                let b = parseInt(document.getElementById(`2`).value);
                document.getElementById(`rta`).innerHTML = a / b
        }
        if (document.getElementById("ohms1").value == "vol" && document.getElementById("ohms2").value == "res") {
                let a = parseInt(document.getElementById(`1`).value);
                let b = parseInt(document.getElementById(`2`).value);
                document.getElementById(`rta`).innerHTML = b / a
        }

        // VALIDACIONES
        if (document.getElementById("ohms1").value == "ley" && document.getElementById("ohms2").value == "ley") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("ohms1").value == "am" && document.getElementById("ohms2").value == "am") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("ohms1").value == "res" && document.getElementById("ohms2").value == "res") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        if (document.getElementById("ohms1").value == "vol" && document.getElementById("ohms2").value == "vol") {
                document.getElementById("alertError").setAttribute("style", "display:block")
                document.getElementById("error").innerText = "❌ No se puede convertir"
                setTimeout(() => {
                        document.getElementById("alertError").setAttribute("style", "display:none")
                }, 2000);
        }
        document.getElementById("numero").value=``
}