import type { Endpoints } from "@octokit/types";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type Repos = Endpoints["GET /users/{username}/repos"]["response"]["data"];
}

export {};
