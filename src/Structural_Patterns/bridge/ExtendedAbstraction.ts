import { Abstraction } from "./abstraction";

// ======= Second abstraction extend first =============
class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}
export { ExtendedAbstraction };
