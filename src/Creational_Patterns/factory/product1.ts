import { IProduct } from "./interface";

class ConcreteProduct1 implements IProduct {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}
export { ConcreteProduct1 };
