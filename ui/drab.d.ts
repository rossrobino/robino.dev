// drab.d.ts
import type { Elements } from "drab/types";
import type { HTMLAttributes } from "react";

declare module "react" {
	namespace JSX {
		interface IntrinsicElements extends Elements<HTMLAttributes<HTMLElement>> {}
	}
}
