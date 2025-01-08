import { CreateUserCommand } from '@core/application/commands/create-user/CreateUserCommand';
import { UserProps } from '@core/domain/types/user.types';
import { UserId } from '@core/domain/entities/UserId';

export class UserMapper {
  static mapperCommandToEntity(command: CreateUserCommand): UserProps {
    return {
      id: UserId.create(),
      firstName: command.firstName,
      lastName: command.lastName,
      age: command.age,
    };
  }
}
