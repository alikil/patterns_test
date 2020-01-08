import { IImplementation } from "./interface";

// ============== Second class =============
class ConcreteImplementationB implements IImplementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}
export { ConcreteImplementationB };
