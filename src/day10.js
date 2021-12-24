/**
 * Problem description:
 Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el
 mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

 Las monedas para cambio que puedes usar son estas:

 coins[0] = 1 céntimo
 coins[1] = 2 céntimos
 coins[2] = 5 céntimos
 coins[3] = 10 céntimos
 coins[4] = 20 céntimos
 coins[5] = 50 céntimos
 Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un
 array con la combinación de monedas mínimas que debemos usar para conseguirlo.

 getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
 getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
 getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
 getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
 getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
 La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que
 tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible.
 ¡Suerte 👩‍💻👨‍💻!.
 */

export default function getCoins(change) {
    let changes = [0, 0, 0, 0, 0, 0];
    const coins = [1, 2, 5, 10, 20, 50];
    const masCerca = (coins, change) => {
        if (!coins.length) {
            return 0;
        }

        let coin = change;
        let position;

        for (let i = 0; i < coins.length; i++) {
            if (coins[i] === change) {
                coin = coins[i];
                position = i;
            } else if (coins[i] > change && coins[i] <= Math.abs(coin)) {
                coin = coins[i];
                position = i;
            } else if (coins[i] < change && -coins[i] < Math.abs(coin)) {
                coin = coins[i];
                position = i;
            }
        }

        return [position, coin];
    };

    let salir = true;
    let residuo;
    let diferencia;

    while (salir) {
        const _masCerca = masCerca(coins, change);
        let position = _masCerca[0];
        let coin = _masCerca[1];

        diferencia = change - coin;
        residuo = change % coin;
        if (isNaN(residuo)) {
            break
            salir = false;
        }
        changes[position] = changes[position] + 1;
        change = diferencia;
    }

    return changes;
}