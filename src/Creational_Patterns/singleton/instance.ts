// ============== init instance ===========
class Singleton {
  private static instance: Singleton;
  private constructor() {}

  // ========= if instanse closed => open one / else => use existed =======
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // Logic and functions
  }
}
export { Singleton };
