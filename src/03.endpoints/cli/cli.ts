import inquirer from 'inquirer';
import { Users } from '@infra/orm/my-db/models/Users';
import { UserDto } from '@infra/orm/dto/UserDto';
import { v7 as uuidv7 } from 'uuid';

async function createUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is your firstName?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is your lastName?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'What is your age?',
    },
  ]);

  const firstName = answers.firstName;
  const lastName = answers.lastName;
  const age = answers.age;

  const data: UserDto = { id: uuidv7(), firstName, lastName, age };

  Users.save(data);
  console.log('user created : ', data);
}

async function deleteUser() {
  const { userId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'userId',
      message: 'Enter the userId of the user to delete:',
    },
  ]);
  Users.deleteOne(userId);
  console.log(`User ${userId} has been successfully deleted.`);
}

async function getAllUser() {
  const { limit, page } = await inquirer.prompt([
    {
      type: 'number',
      name: 'limit',
      message: 'Enter the limit default: 10',
    },
    {
      type: 'number',
      name: 'page',
      message: 'Enter the page default: 1',
    },
  ]);
  const users = Users.find({}, limit, page);
  console.log(users);
}

async function updateUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'userId',
      message: 'What is your userId?',
    },
    {
      type: 'input',
      name: 'firstName',
      message: 'What is your firstName?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is your lastName?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'What is your age?',
    },
  ]);

  const firstName = answers.firstName;
  const lastName = answers.lastName;
  const age = answers.age;

  const userId = answers.userId;

  Users.updateOne(userId, { firstName, lastName, age });

  console.log('user updated');
}

async function runApp() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Create User', 'Delete User', 'Update User', 'All User'],
    },
  ]);

  if (action === 'Create User') {
    createUser();
  } else if (action === 'Delete User') {
    deleteUser();
  } else if (action === 'All User') {
    getAllUser();
  } else if (action === 'Update User') {
    updateUser();
  } else {
    throw new Error('command not found');
  }
}

runApp().catch((error) => {
  console.error('Error:', error);
});
