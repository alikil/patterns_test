import { AbstractFactory } from "./interface";
import { Factory1 } from "./factory1";
import { Factory2 } from "./factory2";

// ============== Принимает тип фабрики / нового нужного обьекта (1,2) ==========
function clientCode(factory: AbstractFactory) {
	const AbstractButton = factory.createButton();
	const AbstractInfo = factory.createInfo();
	return {
		button: AbstractInfo.createInfoToButton(AbstractButton),
		text: AbstractInfo.createInfo(),
	};
}

// ======================== START ==========================
const first = clientCode(new Factory1());
console.log(first);

const second = clientCode(new Factory2());
console.log(second);
