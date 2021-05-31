import { Request, Response } from 'express';
import { User } from '../models/user';
import * as userService from '../services';

export async function postUserAsync (req: Request, res: Response) : Promise<void> {
  const user: User = await userService.createUser(req.body);

  res.send(user);
};
