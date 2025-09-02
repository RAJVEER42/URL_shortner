import express from 'express';
// import {db} from '../db/index.js'; old
// import { usersTable } from '../models/index.js'; old
// import { eq } from 'drizzle-orm'; old
// import {randomBytes, createHmac} from 'node:crypto'; old
import {signupPostRequestBodySchema, loginPostRequestBodySchema} from '../validation/request.validation.js';
import {hashPasswordWithSalt} from '../utils/hash.js';
import {createUser, getUserByEmail} from '../services/user.service.js';
// import jwt from 'jsonwebtoken';
import { createUserToken } from "../utils/token.js";

const router = express.Router();

router.post('/signup', async(req, res) => {
    // const { firstName, lastName, email, password } = req.body; old before zod
    const validationResult = await signupPostRequestBodySchema.safeParseAsync(req.body); // learn more about it, after zod.

    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.format() });
    };

    const { firstName, lastName, email, password } = validationResult.data;

    // const [existingUser] = await db // why the array?? , old shifted to services folder
    //     .select({
    //          id: usersTable.id,
    //     })
    //     .from(usersTable)
    //     .where(eq(usersTable.email, email));

    const existingUser = await getUserByEmail(email); // new thing learn more...

    if (existingUser) {
        return res.status(400).json({ error: `User with email ${email} already exists!`});
    }

    // const salt = randomBytes(256).toString('hex'); // old, shifted to utils folder
    // const hashedPassword = createHmac('sha256', salt).update(password).digest('hex'); // old, shifted to utils folder

    const {salt, password: hashedPassword} = hashPasswordWithSalt(password) // new thing learn more...

    // const [user] = await db // will return an array...
    //     .insert(usersTable)
    //     .values({ 
    //         email, 
    //         firstName, 
    //         lastName,
    //         password: hashedPassword,
    //         salt,
    //     })
    //     .returning({
    //         id: usersTable.id,
    //}); // old, shifted to services folder

    const user = await createUser(email, firstName, lastName, hashedPassword, salt);

    return res.status(201).json({ data: { userId: user.id} });
});

router.post('/login', async (req, res) => {
  const validationResult = await loginPostRequestBodySchema.safeParseAsync(req.body);

  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error });
  }

  const { email, password } = validationResult.data;

  const user = await getUserByEmail(email); // reusing it from services folder.

  if (!user) {
    return res
      .status(404)
      .json({ error: `User with email ${email} does not exists` });
  }

  const { password: hashedPassword } = hashPasswordWithSalt(
    password,
    user.salt
  ); // reusing it from utils folder.

  if (user.password !== hashedPassword) {
    return res.status(400).json({ error: 'Invalid password' });
  };

  // const token = jwt.sign({ id: user.id}, process.env.JWT_SESSION); old
  const token = await createUserToken({ id: user.id });

  return res.json({ token });
});

export default router;
