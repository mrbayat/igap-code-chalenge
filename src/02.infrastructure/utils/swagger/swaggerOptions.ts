import { userRoutesDoc } from '@infra/utils/swagger/swagger-definitions/user';
import { Options } from 'swagger-jsdoc';

const swaggerTags = [
  {
    name: 'User',
    description: 'Operations related to user',
  },
];

const swaggerServer = [
  {
    url: 'http://localhost:4000/api',
  },
];

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'igap-code-challange-DDD-Project',
      version: '1.0.0',
      description: 'This is a simple API documentation',
    },
    tags: swaggerTags,
    paths: {
      ...userRoutesDoc,
    },
    servers: swaggerServer,
  },
  apis: ['./src/03.endpoints/routes/*/*.ts'],
};

export default swaggerOptions;
