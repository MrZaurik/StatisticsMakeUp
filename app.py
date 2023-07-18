# This is my Python Index

def fibo (a):
    print(1, 1)
    numeroInicial = 1
    numeroAnterior = 0;
    numeroSiguiente = None
    pasos = 1
    while pasos < a:
        numeroSiguiente = numeroInicial + numeroAnterior
        print(pasos + 1, numeroSiguiente)
        numeroAnterior = numeroInicial
        numeroInicial = numeroSiguiente
        pasos = pasos + 1


fibo(30)
