import { IAbstractFactory, IAbstractButton, IAbstractInfo } from "./interface";
import { ClickableButton } from "./productA1";
import { Info1 } from "./productB1";

// ================ Может создавать N продуктов (now 2) ==============
class Factory1 implements IAbstractFactory {
	public createButton(): IAbstractButton {
		console.log("Creating Button => Object");
		return new ClickableButton();
	}
	public createInfo(): IAbstractInfo {
		console.log("Creating ButtonInfo => string");
		return new Info1();
	}
}

export { Factory1 };
