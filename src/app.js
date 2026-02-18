import express from "express";
import expenseRoutes from "./routes/expensesRoutes.js";
import { connectDB } from "./db/db.js";
console.log("Iniciando app...");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();
console.log("Configurando rutas...");
app.use("/api/expenses", expenseRoutes);
console.log("Rutas configuradas.");

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Mantiene el proceso vivo (Hack para Node v25+ con ES Modules)
// Node v25 a veces cierra el proceso prematuramente si no hay actividad en el Event Loop.
setInterval(() => { }, 1000 * 60 * 60);

server.on('close', () => {
    console.log('Server closed!');
});

process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
});

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});

