const tags: [string] = ['User'];

export const userRoutesDoc = {
  '/v1/users': {
    post: {
      tags: tags,
      summary: 'Create a new user json',
      description: 'Add a new user json to the database',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string',
                },
                lastName: {
                  type: 'string',
                },
                age: {
                  type: 'number',
                },
              },
              required: ['firstName', 'lastName', 'age'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'user created successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Invalid input',
        },
      },
    },
    get: {
      tags: tags,
      summary: 'Get all a user json',
      description: 'Get all a user json',
      parameters: [
        {
          in: 'query',
          name: 'limit',
          required: false,
          schema: {
            type: 'integer',
            example: 10,
          },
        },
        {
          in: 'query',
          name: 'page',
          required: false,
          schema: {
            type: 'integer',
            example: 1,
          },
        },
      ],
      responses: {
        200: {},
      },
    },
  },
  '/v1/users/{id}': {
    delete: {
      tags: tags,
      summary: 'remove user by id',
      description: 'remove user by id',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'user id ',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        '200': {},
        '404': {},
        '500': {},
      },
    },
    get: {
      tags: tags,
      summary: 'get user by id',
      description: 'get user by id',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'user id ',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        '200': {},
        '404': {},
        '500': {},
      },
    },
  },
};
