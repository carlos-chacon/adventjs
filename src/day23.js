/**
 * Problem description:
 Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana

 Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al
 máximo la creación de regalos. 🎁

 La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos
 cambiar cada carácter por otro.

 Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter
 a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

 Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar
 otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

 const from = 'BAL'
 const to   = 'LIB'
 const canReconfigure(from, to) // true

 la transformación sería así:
 B -> L
 A -> I
 L -> B


 const from = 'CON'
 const to   = 'JUU'
 const canReconfigure(from, to) // false

 no se puede hacer la transformación:
 C -> J
 O -> U
 N -> FALLO


 const from = 'MMM'
 const to   = 'MID'
 cons canReconfigure(from, to) // false
 no se puede hacer la transformación:
 M -> M (BIEN, asigna el mismo carácter a si mismo)
 M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
 M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


 const from = 'AA'
 const to   = 'MID'
 cons canReconfigure(from, to) // false -> no tiene la misma longitud
 */


export default function canReconfigure(from, to) {
    if (from.length !== to.length) {
        return false;
    }

    const getPos = (element, array) => {
        let indices = [];
        let idx = array.indexOf(element);
        while (idx != -1) {
            indices.push(idx);
            idx = array.indexOf(element, idx + 1);
        }
        return indices;
    };

    const arrayFrom = from.split("");
    const arrayTo = to.split("");

    for (let i = 0; i < arrayFrom.length; i++) {
        const idxFrom = getPos(arrayFrom[i], arrayFrom);
        const idxTo = getPos(arrayTo[i], arrayTo);
        if (idxFrom.join() != idxTo.join()) {
            return false;
        }
    }
    return true;
}