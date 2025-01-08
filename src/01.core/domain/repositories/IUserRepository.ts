import { UserProps } from '@core/domain/types/user.types';

export interface IUserRepository {
  createUser(user: UserProps): Promise<void>;
  userList(limit?: number, page?: number): Promise<UserProps[]>;
  deleteUser(userId: string): Promise<void>;
  userById(userId: string): Promise<UserProps>;
}
