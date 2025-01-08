const User = {
  CreateUserCommand: Symbol.for('CreateUserCommand'),
  DeleteUserCommand: Symbol.for('DeleteUserCommand'),
  IUserUseCase: Symbol.for('IUserUseCase'),
  IUserRepository: Symbol.for('IUserRepository'),
  UserController: Symbol.for('UserController'),
  GetAllUserQuery: Symbol.for('GetAllUserQuery'),
  GetUserByIdQuery: Symbol.for('GetUserByIdQuery'),
};

export const TYPES = {
  ...User,
};
