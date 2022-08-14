// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    var primero = array[0];
    return primero;
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    var ultimo = array[array.length - 1];
    return ultimo;
}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    var largo = array.length;
    return largo;
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var aumenta = [];
    for (i = 0; i < array.length; i++) {
        suma = array[i] + 1;
        aumenta.push(suma);
    }
    return aumenta;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(' ');
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true;
        }
    }
    return false;
}


function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for (i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    promedio = agregarNumeros(resultadosTest) / resultadosTest.length;
    return promedio;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var mayor = 0;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if (arguments.length < 1) {
        return 0;
    } else if (arguments.length === 1) {
        return (arguments[0]);
    } else if (arguments != 0) {
        multi = 1;
        producto = [];
        for (i = 0; i < arguments.length; i++) {
            multi = multi * arguments[i];
            producto.push(multi);
        }
        return (producto[producto.length - 1])
    }
}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    var mayores = 0;
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 18) {
            mayores += 1;
        }
    }
    return mayores;
}


function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí :
    if (numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6) {
        return "Es dia Laboral";
    } else {
        return "Es fin de semana";
    }

}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    var comienzo = 9;
    var numero = n.toString();
    var nueve = comienzo.toString();

    var resultado = numero.startsWith(nueve);

    if (resultado) {
        return true;
    } else {
        return false;
    }
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    var iguales = arreglo.every((val, i, arr) => val === arr[0]);
    return iguales;
}


function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    var contiene = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Enero") {
            contiene.push(array[i])
        } else if (array[i] === "Noviembre") {
            contiene.push(array[i])
        } else if (array[i] === "Marzo") {
            contiene.push(array[i])
        }
    }

    if (contiene.length === 3) {
        return contiene;
    } else {
        return "No se encontraron los meses pedidos";
    }
}

// contiene debe ser compaada con un metodo que revise el array, independientemente del orden, contenga los elementos 




function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    mayores = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            mayores.push(array[i]);
        }
    }
    return mayores;
}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    lista = [];
    suma = numero;

    for (i = 0; i < 10; i++) {
        suma += 2;
        if (suma === i) break;
        else {
            lista.push(suma);
        }
    }
    if (i < 10) {
        return "Se interrumpió la ejecución";
    } else {
        return lista;
    }
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var nuevo = []
    var sumado = numero;
    for (var i = 0; i < 10; i++) {
        if (i === 5) continue;
        else {
            sumado = sumado + 2;
            nuevo.push(sumado);
        }
    }
    return nuevo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};