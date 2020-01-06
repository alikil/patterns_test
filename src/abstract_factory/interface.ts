// ======== интерфейс абстрактной фабрики ==========
interface AbstractFactory {
	createButton(): AbstractButton;
	createInfo(): AbstractInfo;
}

// ======== интерфейс функций Button ==========
interface AbstractButton {
	createButton(): object;
}

// ======== интерфейс функций Info ==========
interface AbstractInfo {
	createInfo(): string;
	createInfoToButton(collaborator: AbstractButton): object;
}

export { AbstractFactory, AbstractButton, AbstractInfo };
