/**
 * Problem description:
 ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

 Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han
 sido envueltos con asteriscos tanto por arriba como por los lados.

 Sólo tienes que tener en cuenta unas cosillas ✌️:

 - Si el array está vacío, devuelve un array vacío
 - Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
 - Por suerte, cada posición del array siempre tiene la misma longitud...
 */

export default function wrapGifts(gifts) {
    if (gifts.length === 0) {
        return [];
    } else {
        const lonRegalo = gifts[0].length;
        const cantAsteriscos = lonRegalo + 2;
        const asteriscos = "*".repeat(cantAsteriscos);

        const newArray = gifts.map(gift => {
            return `*${gift}*`;
        });

        return [asteriscos, ...newArray, asteriscos];
    }
}