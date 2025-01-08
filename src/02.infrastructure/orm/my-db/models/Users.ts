import { Schema } from '@infra/orm/my-db/schema/Schema';
import { Collection } from '@infra/orm/my-db/schema/Collection';
import { UserDto } from '@infra/orm/dto/UserDto';

const userSchema = new Schema<UserDto>({
  id: 'string',
  firstName: 'string',
  lastName: 'string',
  age: 'number',
});

export const Users = new Collection('users', userSchema);
