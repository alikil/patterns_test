import { AbstractButton } from "./interface";

class HiddenButton implements AbstractButton {
	public createButton(): object {
		return {
			name: "button",
			value: "hidden",
		};
	}
}

export { HiddenButton };
