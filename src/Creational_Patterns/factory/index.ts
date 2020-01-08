import { Creator } from "./creator";
import { ConcreteCreator1 } from "./creator1";
import { ConcreteCreator2 } from "./creator2";

function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}

console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator1());

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new ConcreteCreator2());

/*
1) Простой и ненужый паттерн.
2) Много файлов на каждый обьект
3) посволяет упростить клиентский код.
*/
