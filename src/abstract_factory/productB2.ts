import { AbstractInfo, AbstractButton } from "./interface";

class Info2 implements AbstractInfo {
	public createInfo(): string {
		return "AnyCreatedInformation 2";
	}
	// ============ + Product A2 (receve additional product info) =================
	public createInfoToButton(collaborator: AbstractButton): object {
		return collaborator.createButton();
	}
}

export { Info2 };
