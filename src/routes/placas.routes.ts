import express from 'express';
import { createPlacaController } from '../controllers/placa.controller';

const router = express.Router();

/**
 * @swagger
 * /placa:
 *   post:
 *     summary: Cria uma nova placa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Placa'
 *     responses:
 *       201:
 *         description: Placa criada com sucesso
 *       500:
 *         description: Erro ao criar placa
 */

router.post('/placa', createPlacaController);

export default router;
