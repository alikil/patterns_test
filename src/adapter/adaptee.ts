// =============== if receved request in urlencode (default) =========
class Adaptee {
	public data: string;
	public specificRequest(): { status: string; data: string } {
		return {
			status: "urlencoded",
			data: "https%3A%2F%2Fwww.google.com%2F",
		};
	}
}
export { Adaptee };
