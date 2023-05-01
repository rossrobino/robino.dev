import { integer, pgTable, serial } from "drizzle-orm/pg-core";

export const PageInsights = pgTable("page_insights", {
	id: serial("id").notNull(),
	views: integer("views").notNull(),
});
