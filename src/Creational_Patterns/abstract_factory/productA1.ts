import { IAbstractButton } from "./interface";

class ClickableButton implements IAbstractButton {
	public createButton(): object {
		return {
			name: "button",
			value: "clickable",
		};
	}
}

export { ClickableButton };
