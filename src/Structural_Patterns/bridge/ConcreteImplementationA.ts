import { IImplementation } from "./interface";

// =================== Default class ======================
class ConcreteImplementationA implements IImplementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}
export { ConcreteImplementationA };
