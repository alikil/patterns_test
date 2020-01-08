import { IAbstractButton } from "./interface";

class HiddenButton implements IAbstractButton {
	public createButton(): object {
		return {
			name: "button",
			value: "hidden",
		};
	}
}

export { HiddenButton };
