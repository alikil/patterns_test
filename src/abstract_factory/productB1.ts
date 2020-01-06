import { IAbstractInfo, IAbstractButton } from "./interface";

class Info1 implements IAbstractInfo {
	public createInfo(): string {
		return "AnyCreatedInformation 1";
	}
	// ============ + Product A1 (receve additional product info) =================
	public createInfoToButton(collaborator: IAbstractButton): object {
		return collaborator.createButton();
	}
}

export { Info1 };
