import { Target } from "./target";
import { Adaptee } from "./adaptee";

// =================== Adapter class =====================
class Adapter extends Target {
	private adaptee: Adaptee;

	// ††† extend target and receve adaptee in constructor †††
	constructor(adaptee: Adaptee) {
		super();
		this.adaptee = adaptee;
	}

	// ‡‡‡ rewrite request at target to recreate function ‡‡‡
	public request(): { status: string; data: string } {
		const result = decodeURIComponent(this.adaptee.specificRequest().data);
		return { status: "adapted", data: result };
	}
}

export { Adapter };
