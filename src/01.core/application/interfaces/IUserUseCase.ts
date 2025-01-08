import { UserProps } from '@core/domain/types/user.types';
import { User } from '@core/domain/entities/User';

export interface IUserUseCase {
  createUser(userProps: UserProps): Promise<User>;
  getAllUser(limit?: number, page?: number): Promise<UserProps[]>;
  deleteUser(userId: string): Promise<void>;
  userById(userId: string): Promise<UserProps>;
}
