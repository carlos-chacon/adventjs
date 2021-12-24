/**
 * Problem description:
 ¡Es hora de poner el árbol de navidad en casa! 🎄

 Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo,
 100.

 Si le pasamos el argumento 5, se pintaría esto:

 ____*____
 ___***___
 __*****__
 _*******_
 *********
 ____#____
 ____#____
 Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los
 espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
 Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

 Otro ejemplo con un árbol de altura 3:

 __*__
 _***_
 *****
 __#__
 __#__
 Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el
 árbol.
 */

/**
 * Title: Building the tree iteratively concatenating text.
 * Comment:
 * 1. Formulas are not cleaned as in the second implementation so people can understand where do they come from.
 * 2. This is a readable solution, but a very boring one.
 */
// export default function createXmasTree(height) {
//     function fillRow(start, end, width, character = '*') {
//         let text = '';
//         for (let i = 0; i < start; i++) text += '_';
//         for (let i = start; i < end; i++) text += character;
//         for (let i = end; i < width; i++) text += '_';
//         return text;
//     }
//
//     let tree = '';
//     const width = height * 2 - 1;
//     for (let h = 1; h < height + 1; h++) {
//         let rowWidth = h * 2 - 1;
//         let rowSpaces = (width - rowWidth) / 2;
//         tree += fillRow(rowSpaces, width - rowSpaces, width);
//         tree += '\n';
//     }
//     let rowWidth = 1;
//     let rowSpaces = (width - rowWidth) / 2;
//     return `${tree}${fillRow(rowSpaces, width - rowSpaces, width, '#')}\n${fillRow(rowSpaces, width - rowSpaces, width, '#')}`;
// }


export default function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    const base = height - 1 + height;
    let arbol = "";
    const tronco = (base - 1) / 2;

    for (let index = 1; index <= height; index++) {
        const impar = index - 1 + index;
        const repeat = (base - impar) / 2;
        arbol += "_".repeat(repeat);
        arbol += "*".repeat(impar);
        arbol += "_".repeat(repeat);
        arbol += "\n";
    }

    arbol += "_".repeat(tronco);
    arbol += "#".repeat(1);
    arbol += "_".repeat(tronco);
    arbol += "\n";
    arbol += "_".repeat(tronco);
    arbol += "#".repeat(1);
    arbol += "_".repeat(tronco);

    return arbol;
}