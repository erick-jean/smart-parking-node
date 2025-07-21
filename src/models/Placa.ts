import { Schema, model, Document } from 'mongoose';

export interface Placa extends Document {
  placa: string;
  placaImagem: string;
  modelo: string;
  marca: string;
  cor: string;
  tipoVeiculo: string;
  dono: string;
  cpf: string;
  telefoneCelular: string;
  email: string;
}

const PlacaSchema = new Schema<Placa>({
  placa: { type: String, required: true, unique: true },
  placaImagem: { type: String, required: true },
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  cor: { type: String, required: true },
  tipoVeiculo: { type: String, required: true },
  dono: { type: String, required: true },
  cpf: { type: String, required: true },
  telefoneCelular: { type: String, required: true },
  email: { type: String, required: true },
});

export const PlacaModel = model<Placa>('Placa', PlacaSchema);

