import { UserProps, UserJson } from '@core/domain/types/user.types';
import { BaseEntity } from '@framework/domain/entities/BaseEntity';
import { UserId } from '@core/domain/entities/UserId';

export class User extends BaseEntity<UserProps> {
  private constructor(props: UserProps) {
    super(props);
    this.validateInvariants();
  }

  get id(): UserId {
    return this.props.id;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }

  get age(): number {
    return this.props.age;
  }

  public static createUser(props: UserProps): User {
    props.id = UserId.create();
    return new User(props);
  }

  private validateInvariants(): void {}

  toJSON(): UserJson {
    return {
      id: this.id.getValue(),
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }
}
