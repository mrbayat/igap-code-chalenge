// myDb.test.ts
import { v7 as uuidv7 } from 'uuid';
import { Users } from '@infra/orm/my-db/models/Users';
import { UserDto } from '@infra/orm/dto/UserDto';

describe('Database CRUD operations', () => {
  let userId: string;

  it('should create a new user', () => {
    const data: UserDto = { id: uuidv7(), firstName: 'mr', lastName: 'bayat', age: 1 };
    const createdUser = Users.save(data);

    expect(createdUser).toHaveProperty('id');
    expect(createdUser.firstName).toBe('mr');
    expect(createdUser.lastName).toBe('bayat');
    expect(createdUser.age).toBe(1);

    userId = createdUser.id;
  });

  it('should get a user by id', () => {
    const user = Users.findOne(userId);
    expect(user).toBeDefined();
    expect(user?.firstName).toBe('mr');
  });

  it('should update a user', () => {
    const updatedData = { firstName: 'mr', lastName: 'bayat', age: 2 };
    const updatedUser = Users.updateOne(userId, updatedData);
    expect(updatedUser).toBeDefined();
    expect(updatedUser?.age).toBe(2);
  });

  it('should get all users', () => {
    const users = Users.find({});
    expect(users[0]).toHaveProperty('firstName');
    expect(users[0]).toHaveProperty('lastName');
    expect(users[0]).toHaveProperty('age');
    expect(users[0]).toHaveProperty('id');
  });

  it('should delete a user', () => {
    const deletedUser = Users.deleteOne(userId);
    expect(deletedUser).toBe(true);
  });
});
