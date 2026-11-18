import "@/app/style.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

// fail the build if anything in the app stops being fully prerendered
export const ensureStatic = "navigation";

export const metadata: Metadata = {
	title: "Ross Robino",
	description: "Ross Robino's personal website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			<body className="prose">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
