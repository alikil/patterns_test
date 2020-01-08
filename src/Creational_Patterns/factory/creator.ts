import { IProduct } from "./interface";

// =============== Default Creator =============
abstract class Creator {
  public abstract factoryMethod(): IProduct;

  public someOperation(): string {
    const product = this.factoryMethod();
    const operation = product.operation();
    return `Creator: The same creator's code has just worked with ${operation}`;
  }
}
export { Creator };
