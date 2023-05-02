// funciones y exportas

const strictEquals = (valueA, valueB) => {

    if(Object.is(1, 1)) {
        return true;
    }

    if (Object.is(NaN, NaN)) {
        return false;
    }

    

    return Object.is(valueA, valueB);
};

export default strictEquals;





/*
Escribe una función llamada strictEquals(valueA, valueB) que devuelva el mismo valor que valueA === valueB.
 Tu implementación no puede usar los operadores === ni !==, tampoco == ni !=.

Testea la función con este set de pruebas:

Dada la función strictEquals
Cuando se comparan <valueA> y <valueB>
Entonces el resultado será <Result>
*/