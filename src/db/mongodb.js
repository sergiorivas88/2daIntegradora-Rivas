import mongoose from 'mongoose';

export const init = async () => {
    try {
        const URI = 'mongodb+srv://sergiorivas88:simon2023@cluster0.fmyboqn.mongodb.net/ecommerce';
        await mongoose.connect(URI);
        console.log('Conectado a la Base de Datos ');
    } catch (error) {
        console.error('Error al conectar a la base', error.message);
    }
};
