<p align="center">
  <img src="https://raw.githubusercontent.com/NilavPatel/dotnet-onion-architecture/main/docs/ddd-banner.png" width="400" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">IGAP Code Challenge</h1>
</p>

<hr>

### Introduction

A **TypeScript**-based web application using **Onion Architecture** and **Express.js**. This project is designed to maintain a clean separation of concerns, making it easy to manage and scale. It also includes automated tests written with **Jest**, interactive command-line support via **Inquirer**, and API documentation generated with **Swagger**.

<hr>

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer) (for interactive commands)
- [Jest](https://jestjs.io/) (for testing)
- [Swagger](https://www.npmjs.com/package/swagger-ui-express) (for API documentation)
- [Express](https://www.npmjs.com/package/express) (for web framework)


<hr>

### Features
- TypeScript for type safety across the application.
- Express.js as the web framework.
- Onion Architecture for clean separation of concerns.
- Automated Testing using Jest.
- API Documentation generated with Swagger.
- Command-line Interface (CLI) powered by Inquirer for easy interaction.

<hr>

## Installation

Clone the project

```bash
  git clone https://github.com/mrbayat/igap-code-chalenge
```

Go to the project directory

```bash
  cd igap-code-chalenge
  
  mkdir database
```

Install dependencies

```bash
  npm install
```

<hr>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
SERVER_PORT=4000

SDD_STORE_TYPE example=json # json | yaml 

DB_PATH=database
```
<hr>

## Running the Project
After installation and configuration, you can run the application:

### Run in Development Mode

```bash
npm run dev
```
This command will start the server with hot-reloading on http://localhost:4000.

<hr>

## API Documentation

The API documentation is generated using **Swagger** and is accessible once the application is running. Visit the following URL to view the API documentation:

**http://localhost:4000/api-docs/**

The documentation is automatically updated whenever you modify or add new API routes.

<hr>

## Commands

You can interact with the application via the command line using **Inquirer**. To run the CLI, execute:

```bash
npm run build:dev

node dist/cli.js 
```
<hr>

## Testing

This project uses **Jest** for unit and integration testing. To run the tests, use the following command:

```bash
npm run test
```
<hr>

## Folder Structure

The project follows **Onion Architecture**, and the folder structure is designed to ensure the separation of concerns. Here's a breakdown of the folder structure:


```sh
└── project/
    ├── src
    │   ├── 00.framework # This folder is related to the frameworks and tools that the application depends on.
    │   ├── 01.core # This layer is the core or "Domain Layer" of the application, where the business logic resides
    │   └── 02.infrastructure # This folder contains code responsible for implementing infrastructural functionalities.
    |   └── 02.endpoints # This folder is designed for managing the entry points (End Points) of the application.
    |   └── config # Project config
    └── test # Project unit test
    └── webpack # webpack configs
    

```
<hr>

## 🚀 About Me
I'm a full stack developer...

