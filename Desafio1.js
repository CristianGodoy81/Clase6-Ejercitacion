/*
Micro desafío 1:

Instrucciones
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
diferentes a los esperados.
2. Define un array que contenga un conjunto de seis (6) productos de
electrodomésticos.
3. Ejecutar sobre el array creado las siguientes acciones:
● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.
● Extraer el primer elemento del array y agregarlo al final del mismo.
● Agregar al final del array dos (2) nuevos productos.
● Mostrar por la consola la cantidad de elementos que contiene el array.
● Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.
● Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.
● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.
*/

let electrodomesticos = ["heladera","cocina","lavarropas","microondas","licuadora","tostadora"];
let electrodomesticosString = " ";
let electrodomesticos2 = [];

console.log("El array tiene los siguientes elementos: ",electrodomesticos);
console.log("\nColoco el primer elemento en el ultimo lugar");
electrodomesticos.push(electrodomesticos.shift());
console.log("El array tiene los siguientes elementos: ",electrodomesticos);

console.log("\nAgrego dos elementos al array");
electrodomesticos.push("TV", "PC");
console.log("El array tiene los siguientes electrodomesticos: ",electrodomesticos);

console.log("\n¿Cuantos elementos tiene el array?\nEl array tiene",electrodomesticos.length,"elementos.");

console.log("\nBusco un elemento llamado cocina...");
if (electrodomesticos.includes("cocina") === true)
    {
        console.log("Producto encontrado");
    }
else
    {
        console.log("El producto buscado no existe");
    }

console.log("\nBusco un elemento llamado ventana...");
if (electrodomesticos.includes("ventana") === true)
    {
        console.log("Producto encontrado");
    }
else
    {
        console.log("El producto buscado no existe");
    }

console.log("\nCreando un string con los elementos del array:\n"+electrodomesticos.join(" "));

console.log("\nLa cantidad de caracteres (y espacios) del string creado, es: "+electrodomesticos.join(" ").length);

console.log("\nReemplazo el elemento lavarropas, por secarropas:\n"
+electrodomesticos.join(" ").replace("lavarropas","secarropas")); //.replace() es un metodo de string, no de array.

console.log("\nAhora separado por coma:");
electrodomesticosString = electrodomesticos.join().replace("lavarropas","secarropas");
console.log(electrodomesticosString);

console.log("\nArmando un array desde un string:");
electrodomesticos2 = electrodomesticosString.split(",");
console.log(electrodomesticos2);