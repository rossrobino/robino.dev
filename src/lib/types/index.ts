import type { Endpoints } from "@octokit/types";

export type Repos =
	Endpoints["GET /users/{username}/repos"]["response"]["data"];
