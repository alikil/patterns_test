// ======== интерфейс абстрактной фабрики ==========
interface IAbstractFactory {
	createButton(): IAbstractButton;
	createInfo(): IAbstractInfo;
}

// ======== интерфейс функций Button ==========
interface IAbstractButton {
	createButton(): object;
}

// ======== интерфейс функций Info ==========
interface IAbstractInfo {
	createInfo(): string;
	createInfoToButton(collaborator: IAbstractButton): object;
}

export { IAbstractFactory, IAbstractButton, IAbstractInfo };
