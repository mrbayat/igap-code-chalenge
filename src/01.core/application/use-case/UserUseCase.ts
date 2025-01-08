import { IUserRepository } from '@core/domain/repositories/IUserRepository';
import { IUserUseCase } from '@core/application/interfaces/IUserUseCase';
import { UserProps } from '@core/domain/types/user.types';
import { TYPES } from '@infra/ioc/types';
import { User } from '@core/domain/entities/User';
import { injectable, inject } from 'inversify';

@injectable()
export class UserUseCase implements IUserUseCase {
  constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {}

  async createUser(userProps: UserProps): Promise<User> {
    const user = User.createUser(userProps);

    await this.userRepository.createUser(user);

    return user;
  }

  async getAllUser(limit?: number, page?: number): Promise<UserProps[]> {
    const result = await this.userRepository.userList(limit, page);
    return result;
  }

  async deleteUser(userId: string): Promise<void> {
    await this.userRepository.deleteUser(userId);
  }

  async userById(userId: string): Promise<UserProps> {
    return await this.userRepository.userById(userId);
  }
}
