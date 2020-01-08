import { ConcreteImplementationA } from "./ConcreteImplementationA";
import { ConcreteImplementationB } from "./ConcreteImplementationB";
import { ExtendedAbstraction } from "./ExtendedAbstraction";
import { Abstraction } from "./abstraction";

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);

/*
1) Простой и бесполезный паттерн
2) Необходим для использования 1 имплементации с модификацией второй.
*/
