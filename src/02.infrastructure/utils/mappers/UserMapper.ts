import { UserProps } from '@core/domain/types/user.types';
import { UserDto } from '@infra/orm/dto/UserDto';
import { UserId } from '@core/domain/entities/UserId';

export class UserMapper {
  static mapEntityToDto(props: UserProps): UserDto {
    return {
      id: props.id.getValue(),
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age,
    };
  }

  static mapDtoToEntity(props: UserDto): UserProps {
    return {
      id: UserId.from(props.id),
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age,
    };
  }
}
