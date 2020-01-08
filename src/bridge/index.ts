import { ConcreteImplementationA } from "./ConcreteImplementationA";
import { ConcreteImplementationB } from "./ConcreteImplementationB";
import { ExtendedAbstraction } from "./ExtendedAbstraction";
import { Abstraction } from "./abstraction";

function clientCode(abstraction: Abstraction) {
	// ..

	console.log(abstraction.operation());

	// ..
}

/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log("");

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
