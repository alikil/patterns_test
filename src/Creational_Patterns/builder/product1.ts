class Product1 {
	public parts: string[] = [];

	public listParts(): string {
		return `Product parts: ${this.parts.join(", ")}\n`;
	}
}
export { Product1 };
