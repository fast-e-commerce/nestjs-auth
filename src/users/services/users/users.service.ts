import { Injectable } from '@nestjs/common';

export type IUser = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changesoon',
    },
    {
      userId: 2,
      username: 'alex',
      password: 'changelater',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
