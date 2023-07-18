

const fibo = (limite) => {
  let contador = 1;
  let numeroSiguiente = 0, numeroAnterior = 0, numeroInicial = 0;

  while (contador < (limite + 1)) { // Bucle mientras el contador sea menor que el límite más 1
    if (numeroInicial === 0) { // Si es el primer número de la secuencia
      console.log(contador + '.', numeroInicial + numeroAnterior) // Imprimir el número actual junto con el contador
      contador++
      console.log(contador + '.', 1) // Imprimir el segundo número de la secuencia (siempre será 1)
      contador++
      numeroInicial = 1 // Actualizar el número inicial a 1
    } else { // Para los demás números de la secuencia
      numeroSiguiente = numeroInicial + numeroAnterior // Calcular el siguiente número sumando el número inicial y el anterior
      console.log(contador + '.', numeroSiguiente) // Imprimir el número actual junto con el contador
      contador++
      numeroAnterior = numeroInicial // Actualizar el número anterior al número inicial actual
      numeroInicial = numeroSiguiente // Actualizar el número inicial al siguiente número calculado
    }
  }
}

fibo(30) // Llamar a la función fibo con un límite de 30
