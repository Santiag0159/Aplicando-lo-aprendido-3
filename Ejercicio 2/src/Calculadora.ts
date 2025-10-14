export class Calculadora {
    sumar (a: number, b: number): number {
        return a + b;
    }
    restar (a: number, b: number): number {
        return a - b;
    }
    multiplicar (a: number, b: number): number {
        return a * b;
    }
    dividir (a: number, b: number): number {
        if (b === 0) {
            console.log("No se puede dividir por cero");
        }
        return a / b;
    }
}
