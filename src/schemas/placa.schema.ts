import { z } from 'zod';

export const placaSchema = z.object({
  placa: z.string().nonempty('Placa é obrigatória'),
  placaImagem: z.string().nonempty('Imagem da placa é obrigatória'),
  modelo: z.string().nonempty('Modelo é obrigatório'),
  marca: z.string().nonempty('Marca é obrigatória'),
  cor: z.string().nonempty('Cor é obrigatória'),
  tipoVeiculo: z.string().nonempty('Tipo do veículo é obrigatório'),
  dono: z.string().nonempty('Dono do veículo é obrigatório'),
  cpf: z.string().nonempty('CPF é obrigatório'),
  telefoneCelular: z.string().nonempty('Telefone celular é obrigatório'),
  email: z.string().email('Email inválido'),
});