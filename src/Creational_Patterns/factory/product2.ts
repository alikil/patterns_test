import { IProduct } from "./interface";

class ConcreteProduct2 implements IProduct {
  public operation(): string {
    return "{Result of the ConcreteProduct2}";
  }
}
export { ConcreteProduct2 };
