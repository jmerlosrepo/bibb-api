import express from 'express';
import cors from 'cors';
import { createLog } from './services/logging/logging';
import register from './routes/register';
import { encryptAESText } from './helpers/encrypt';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/register', register);

app.get('/', (req, res) => {
    createLog(res.statusCode, 'Server reached');
    let enc = encryptAESText('TEXTO');
    console.log(enc);
    res.send('Server reached!');
});

app.listen(PORT, () => {
    console.log('Listening PORT', PORT);
})