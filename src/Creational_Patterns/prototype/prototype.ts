import { ComponentWithBackReference } from "./reference";

// ================ Default Prototype ===============
class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  // ============= init and create clone ================
  public clone(): this {
    const clone = Object.create(this);
    clone.component = Object.create(this.component);

    // ============== Clone from reference to prototype ========
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this }
    };

    return clone;
  }
}
export { Prototype };
