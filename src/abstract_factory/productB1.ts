import { AbstractInfo, AbstractButton } from "./interface";

class Info1 implements AbstractInfo {
	public createInfo(): string {
		return "AnyCreatedInformation 1";
	}
	// ============ + Product A1 (receve additional product info) =================
	public createInfoToButton(collaborator: AbstractButton): object {
		return collaborator.createButton();
	}
}

export { Info1 };
