
import { User } from './user';
import { error } from '../utils/errors';

class UsersRepository {
    private _users: Array<User> = [];

    public async CreateUser (user: User) : Promise<User> {
      try {
        this._users.push(user);

        return user;
      } catch (err) {
        throw error(err);
      }
    }
}

global.usersRepository = new UsersRepository();
