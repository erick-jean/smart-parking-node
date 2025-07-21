import { Placa, PlacaModel } from '../models/Placa';

export const createPlaca = async (data: Partial<Placa>): Promise<Placa> => {
    const checkPlaca = await PlacaModel.findOne({ placa: data.placa });
    if(checkPlaca){
        throw new Error('Placa já cadastrada');
    }
    const placa = await PlacaModel.create(data);
    return placa;
};