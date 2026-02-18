import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

/**
 * Establece conexión a MongoDB
 * @returns {Promise<void>}
 */
export const connectDB = async () => {
    const uri = process.env.DATABASE_URL;

    try {
        // Responsabilidad 1: Configurar y establecer conexión
        await mongoose.connect(uri, {
            // Opciones de conexión para mejor rendimiento
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        });

    } catch (err) {
        // Responsabilidad 3: Manejar errores de conexión
        console.error("❌ Error al conectar a MongoDB:", err);
        process.exit(1);
    }
};

/**
 * Cierra conexión a MongoDB (para testing y cleanup)
 * @returns {Promise<void>}
 */
export const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("✅ Desconectado de MongoDB");
    } catch (err) {
        console.error("❌ Error al desconectar de MongoDB:", err);
    }
};