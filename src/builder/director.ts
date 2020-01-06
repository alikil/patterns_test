import { IBuilder } from "./interface";

// ============= Директор необязателен / нужен для ручной модификации ========
class Director {
	private builder: IBuilder;

	// ============== init builder ==============
	public setBuilder(builder: IBuilder): void {
		this.builder = builder;
	}

	// ============= Модульный конструктор =================
	// ===== Чтобы не создавать напрямую через билдер ======
	// ===== Уменьшает обьем кода на клиенте ===============
	public buildMinimalViableProduct(): void {
		this.builder.producePartA();
	}

	public buildFullFeaturedProduct(): void {
		this.builder.producePartA();
		this.builder.producePartB();
		this.builder.producePartC();
	}
}

export { Director };
