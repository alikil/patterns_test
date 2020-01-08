import { IAbstractInfo, IAbstractButton } from "./interface";

class Info2 implements IAbstractInfo {
	public createInfo(): string {
		return "AnyCreatedInformation 2";
	}
	// ============ + Product A2 (receve additional product info) =================
	public createInfoToButton(collaborator: IAbstractButton): object {
		return collaborator.createButton();
	}
}

export { Info2 };
