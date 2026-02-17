
import express from 'express';

const app = express();
const PORT = 3002;

app.get('/', (req, res) => res.send('Hello'));

console.log('Starting debug server (no interval)...');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
