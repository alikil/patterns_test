import { IImplementation } from "./interface";

// ======== Reseve implementation to abstraction =======
class Abstraction {
  protected implementation: IImplementation;

  constructor(implementation: IImplementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

export { Abstraction };
