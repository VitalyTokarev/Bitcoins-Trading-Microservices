
import { User } from '../models/user';
import { error } from '../utils/errors';

export async function createUser (user: User): Promise<User> {
  try {
    const createdUser: User = await global.usersRepository.CreateUser(user);

    return createdUser;
  } catch (err) {
    throw error(err);
  }
};
