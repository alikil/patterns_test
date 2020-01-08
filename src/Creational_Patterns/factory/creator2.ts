import { Creator } from "./creator";
import { IProduct } from "./interface";
import { ConcreteProduct2 } from "./product2";

class ConcreteCreator2 extends Creator {
  public factoryMethod(): IProduct {
    return new ConcreteProduct2();
  }
}
export { ConcreteCreator2 };
