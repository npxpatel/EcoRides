import express, { json } from 'express';
import cors from 'cors';

const PORT = process.env.PORT;
dotenv.config();
const app = express();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

app.use(json());

app.get('/', (req, res) =>{
    res.send('Server is up and running');
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})