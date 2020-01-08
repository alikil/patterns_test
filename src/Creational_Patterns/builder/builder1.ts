import { IBuilder } from "./interface";
import { Product1 } from "./product1";

class ConcreteBuilder1 implements IBuilder {
	private product: Product1;

	// † refresh instance † \\
	constructor() {
		this.reset();
	}
	public reset(): void {
		this.product = new Product1();
	}
	// ‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ \\

	// ========= init each part ==========
	public producePartA(): void {
		this.product.parts.push("PartA1");
	}
	public producePartB(): void {
		this.product.parts.push("PartB1");
	}
	public producePartC(): void {
		this.product.parts.push("PartC1");
	}

	// ========= Combine parts ===========
	public getProduct(): Product1 {
		const result = this.product;
		this.reset();
		return result;
	}
}

export { ConcreteBuilder1 };
