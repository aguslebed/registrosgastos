
import express from 'express';
const app = express();
const router = express.Router();

router.get('/', (req, res) => res.send('Router works'));

app.use('/api', router);

app.listen(3003, () => {
    console.log('Server running with Router on 3003');
});
