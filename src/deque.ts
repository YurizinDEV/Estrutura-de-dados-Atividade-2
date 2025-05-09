// Yuri Ribeiro Zetoles
// ADS 2024/3

export class ArrayDeque<T> {
    inicio: number;
    fim: number;
    arr: (T | undefined)[];

    constructor(capacidade = 15) {
        this.inicio = 0;
        this.fim = 0;
        this.arr = new Array(capacidade + 1).fill(undefined);
    }

    private incrementar(cont: number): number {
        return (cont + 1) % this.arr.length;
    }

    private decrementar(cont: number): number {
        return (cont - 1 + this.arr.length) % this.arr.length;
    }

    estaCheio(): boolean {
        return this.incrementar(this.fim) === this.inicio;
    }

    adicionarPrimeiro(item: T): void {
        if (this.estaCheio()) throw new Error("Deque cheio!");

        this.inicio = this.decrementar(this.inicio);
        this.arr[this.inicio] = item;
    }

    adicionarUltimo(item: T): void {
        if (this.estaCheio()) throw new Error("Deque cheio!");

        this.arr[this.fim] = item;
        this.fim = this.incrementar(this.fim);
    }

    removerPrimeiro(): T | undefined {
        if (this.estaVazio()) throw new Error("Deque Vazio!");

        const val = this.arr[this.inicio];
        this.arr[this.inicio] = undefined;
        this.inicio = this.incrementar(this.inicio);
        return val;
    }

    removerUltimo(): T | undefined {
        if (this.estaVazio()) throw new Error("Deque cheio!");

        this.fim = this.decrementar(this.fim);
        const val = this.arr[this.fim];
        this.arr[this.fim] = undefined;
        return val;
    }

    visualizarPrimeiro(): T | undefined {
        return this.estaVazio() ? undefined : this.arr[this.inicio];
    }

    visualizarUltimo(): T | undefined {
        return this.estaVazio() ? undefined : this.arr[this.decrementar(this.fim)];
    }

    estaVazio(): boolean {
        return this.inicio === this.fim;
    }

    tamanho(): number {
        return (this.arr.length - this.inicio + this.fim) % this.arr.length;
    }

    capacidade(): number {
        return this.arr.length - 1;
    }

}