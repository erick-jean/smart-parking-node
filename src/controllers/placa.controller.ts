import { Request, Response } from 'express';
import { createPlaca } from '../services/placas.service';
import { placaSchema } from '../schemas/placa.schema';
import { z } from 'zod';


export const createPlacaController = async (req: Request, res: Response) => {
  console.log('Corpo recebido:', req.body);
    try {
    // Validação
    const parsedData = placaSchema.parse(req.body);

    // Se passar na validação, salva no banco
    const placa = await createPlaca(parsedData);

    return res.status(201).json(placa);
  } catch (error) {
    // Se for erro do Zod, retorna 400 com a mensagem
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        errors: error.issues.map(e => ({
          path: e.path.join('.'),
          message: e.message,
        })),
      });
    }

    console.error('Erro ao criar placa:', error);
    return res.status(500).json({ error: 'Erro ao criar placa' });
  }
};