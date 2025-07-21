// src/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import YAML from 'yamljs';
import path from 'path';

const placaSchemaPath = path.resolve(__dirname, 'placa.schema.yaml');
const placaSchema = YAML.load(placaSchemaPath);

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Nome da sua API',
    version: '1.0.0',
    description: 'Descrição da API',
  },
  servers: [
    {
      url: 'http://localhost:3000', // troque pela URL do seu backend
    },
  ],
  ...placaSchema,
};

const options = {
  swaggerDefinition,
  apis: ['src/routes/*.ts'], // onde estão seus comentários JSDoc
};

export const swaggerSpec = swaggerJSDoc(options);
