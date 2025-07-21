import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || '';

    console.log('Mongo URL:', mongoUrl);

    await mongoose.connect(mongoUrl);

    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    process.exit(1);
  }
};
