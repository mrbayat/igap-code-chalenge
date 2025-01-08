import { IUserRepository } from '@core/domain/repositories/IUserRepository';
import { UserMapper } from '@infra/utils/mappers/UserMapper';
import { UserProps } from '@core/domain/types/user.types';
import { injectable } from 'inversify';
import { Users } from '@infra/orm/my-db/models/Users';

@injectable()
export class MyDbUserRepository implements IUserRepository {
  async createUser(userData: UserProps): Promise<void> {
    const userPersistence = UserMapper.mapEntityToDto(userData);
    Users.save(userPersistence);
  }

  async userList(limit?: number, page?: number): Promise<UserProps[]> {
    const result = Users.find({}, limit, page);
    return result.map((item) => UserMapper.mapDtoToEntity(item));
  }

  async deleteUser(userId: string): Promise<void> {
    Users.deleteOne(userId);
  }

  async userById(userId: string): Promise<UserProps> {
    const user = Users.findOne(userId);

    return UserMapper.mapDtoToEntity(user);
  }
}
