import { Creator } from "./creator";
import { IProduct } from "./interface";
import { ConcreteProduct1 } from "./product1";

class ConcreteCreator1 extends Creator {
  public factoryMethod(): IProduct {
    return new ConcreteProduct1();
  }
}
export { ConcreteCreator1 };
