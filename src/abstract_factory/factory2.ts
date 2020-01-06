import { IAbstractFactory, IAbstractButton, IAbstractInfo } from "./interface";
import { HiddenButton } from "./productA2";
import { Info2 } from "./productB2";

// ================ Может создавать N продуктов (now 2)==============
class Factory2 implements IAbstractFactory {
	public createButton(): IAbstractButton {
		console.log("Creating BlockedButton => Object");
		return new HiddenButton();
	}
	public createInfo(): IAbstractInfo {
		console.log("Creating BlockedButtonInfo => string");
		return new Info2();
	}
}

export { Factory2 };
