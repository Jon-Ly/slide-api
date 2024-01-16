import dotenv from 'dotenv';
import express from 'express';

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/messages', (req, res) => {
  res.json({ message: 'Hello Messages' });
});