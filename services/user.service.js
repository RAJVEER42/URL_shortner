import { db } from '../db/index.js';
import { eq } from 'drizzle-orm';
import { usersTable } from '../models/index.js';

// This function retrieves a user by their email from the database.
// It uses array destructuring to get the first element from the returned array.
export async function getUserByEmail(email) {
    const [existingUser] = await db // why the array??
        .select({
             id: usersTable.id,
             firstName: usersTable.firstName,
             lastName: usersTable.lastName,
             email: usersTable.email,
             salt: usersTable.salt,
             password: usersTable.password,
        })
        .from(usersTable)
        .where(eq(usersTable.email, email));

    return existingUser
};



// This function creates a new user and returns the created user's ID.
// using array destructuring.
export async function createUser(email, firstName, lastName, hashedPassword, salt) {
    const [user] = await db // will return an array...
        .insert(usersTable)
        .values({ 
            email, 
            firstName, 
            lastName,
            password: hashedPassword,
            salt,
        })
        .returning({
            id: usersTable.id,
        });

    return user;
};