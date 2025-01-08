import { Container } from 'inversify';

import { userModule } from './user.config';

const container = new Container();

container.load(userModule);

export default container;
