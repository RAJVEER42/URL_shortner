import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { usersTable } from './user.models.js';

export const urlsTable = pgTable('urls', {
  id: uuid().primaryKey().defaultRandom(),

  shortCode: varchar('code', { length: 155 }).notNull().unique(), // learn about it more
  targetURL: text('target_url').notNull(), // learn about it more

  userId: uuid('user_id') // who owners it
    .references(() => usersTable.id)
    .notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});
