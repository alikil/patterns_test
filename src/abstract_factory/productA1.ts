import { AbstractButton } from "./interface";

class ClickableButton implements AbstractButton {
	public createButton(): object {
		return {
			name: "button",
			value: "clickable",
		};
	}
}

export { ClickableButton };
