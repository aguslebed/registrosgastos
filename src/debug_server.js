
import express from 'express';

const app = express();
const PORT = 3001; // Usar otro puerto por las dudas

app.get('/', (req, res) => res.send('Hello'));

console.log('Intentando iniciar servidor...');

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    // Mantener vivo explicitamente con un intervalo (hack de debug)
    setInterval(() => {
        console.log('Server still alive...');
    }, 5000);
});

server.on('error', (e) => {
    console.error('SERVER ERROR:', e);
});

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});
