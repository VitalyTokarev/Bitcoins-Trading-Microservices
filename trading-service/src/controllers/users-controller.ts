import { Request, Response } from 'express';
import axios from 'axios';
import { User } from '../models/user';
import * as userService from '../services/users';
import { IDENTITY_SERVICE } from '../consts';

export async function getUserAsync (req: Request, res: Response) : Promise<void> {
  const user: User = await userService.getUser(req.params.id);

  res.status(200).send(user);
};

export async function postUserAsync (req: Request, res: Response) : Promise<void> {
  const user: User = await userService.createUser(req.body);
  axios.post(IDENTITY_SERVICE, user);

  res.status(201).send(user);
};

export async function putUserAsync (req: Request, res: Response) : Promise<void> {
  const user: User = await userService.putUser(req.body, req.params.id);

  res.status(200).send(user);
};

export async function getBalanceAsync (req: Request, res: Response) : Promise<void> {
  const balance = await userService.getBalance(req.params.id);

  res.status(200).send(balance);
};

export async function postUserUsdAsync (req: Request, res: Response) : Promise<void> {
  const user: User = await userService.changeUsdBalance(req.params.id, req.body);

  res.status(200).send(user);
};

export async function postUserBitcoinsAsync (req: Request, res: Response) : Promise<void> {
  const user: User = await userService.changeBitcoinsBalance(req.params.id, req.body);

  res.status(200).send(user);
};
