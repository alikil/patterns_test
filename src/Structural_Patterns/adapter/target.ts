// =============== if receved usual request (default) =============
class Target {
	public data: string;
	public request(): { status: string; data: string } {
		return { status: "default", data: "https://www.google.com/" };
	}
}

export { Target };
