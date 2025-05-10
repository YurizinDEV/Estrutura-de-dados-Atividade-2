import { log } from "console";
import { ArrayDeque } from "./deque";

const deque = new ArrayDeque<string>(7);

console.log("Capacidade:", deque.capacidade());

console.log("------------------------------------")

deque.adicionarPrimeiro("A");
deque.adicionarPrimeiro("B");
deque.adicionarUltimo("C");
deque.adicionarUltimo("D");
deque.adicionarPrimeiro("E");
deque.adicionarUltimo("F");
deque.adicionarPrimeiro("G");

console.log("Estado do Deque após adições:");
console.log("Deque:", deque);
console.log("Tamanho:", deque.tamanho());

console.log("------------------------------------")

deque.removerPrimeiro();
deque.removerUltimo();

console.log("\nEstado do Deque após remoções:");
console.log("Deque:", deque);
console.log("Tamanho:", deque.tamanho());

console.log("------------------------------------")

console.log("\nElementos no Deque:");
console.log("Visualizar Primeiro:", deque.visualizarPrimeiro());
console.log("Visualizar Último:", deque.visualizarUltimo());

console.log("------------------------------------")

console.log("\nVerificando se o Deque está vazio:", deque.estaVazio());