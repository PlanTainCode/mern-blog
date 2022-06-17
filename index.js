import express from "express";
import  jwt  from "jsonwebtoken";
import mongoose from "mongoose";



mongoose
    .connect('mongodb+srv://root:1234@cluster0.1o3we.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('База Данных подключена'))
    .catch((err) => console.log('Ошибка базы', err));

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Здарова пидрила');
})

app.post('/auth/login', (req, res) => {
    console.log(req.body)

    const token = jwt.sign(
        {
            email: req.body.email,
            fullName: 'Вася Пупкин',
        }, 
        'secret123',
    );

    res.json({
        success: true,
        token,
        
    })
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    } 

    console.log(`Сервер запущен`)
});