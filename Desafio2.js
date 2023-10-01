/*
Micro desafío 2:

Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).

El Tech Leader de la empresa DH-Movies requiere conocer la estructura de datos del nuevo
proyecto, para ello debes tener presente lo siguiente:

2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de
día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
‘Elvis’,‘Thor: amor y trueno’.
3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
una función, la cual recibirá por parámetro la película indicada y deberá retornar la
misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
.toUpperCase(). Con ese valor recibido, deberás colocarla primera en la estructura
creada.
● Una vez terminada la actividad, nos indican que debemos crear una cadena de texto
para las siguientes películas próximas a estrenar:
○ Counter-Strike
○ NOP
○ Vértigo
○ Nick
○ Avatar.
Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
cuenta que cada elemento debe estar separado por una coma.
● Una vez creada la estructura, una de las programadoras del equipo indica que la
primera película incorporada a la estructura no es una película sino un video juego.
Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura.
4. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las
películas, para ello te recomendamos que investigues lo que hace el método
.concat().
*/

let peliculas = ["Turno de día","30 noches con mi ex","Bestia"
,"El monte","Top gun maverick","Elvis","Thor: amor y trueno"];
let estrenos = ["Counter-Strike","NOP","Vértigo","Nick","Avatar"];

function mayusculizador3000 (minusculizado)
    {
        return minusculizado.toUpperCase();
    }

console.log(peliculas);
peliculas.unshift(mayusculizador3000(peliculas.pop()));
console.log(peliculas);

console.log(estrenos.join());
estrenos.shift();
console.log(estrenos.join());

function concatenador3000 (operandoIzquierdo,operandoDerecho)
    {
        return operandoIzquierdo.concat(operandoDerecho); // .concat() concatena arrays, creando uno nuevo.
    }

console.log(concatenador3000(peliculas,estrenos));