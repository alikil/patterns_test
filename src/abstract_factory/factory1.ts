import { AbstractFactory, AbstractButton, AbstractInfo } from "./interface";
import { ClickableButton } from "./productA1";
import { Info1 } from "./productB1";

// ================ Может создавать N продуктов (now 2) ==============
class Factory1 implements AbstractFactory {
	public createButton(): AbstractButton {
		console.log("Creating Button => Object");
		return new ClickableButton();
	}
	public createInfo(): AbstractInfo {
		console.log("Creating ButtonInfo => string");
		return new Info1();
	}
}

export { Factory1 };
