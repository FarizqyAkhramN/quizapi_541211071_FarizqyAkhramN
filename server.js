const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models')
db.Sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressiJS API by Icimaru');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)

app.listen(port, () => console.log('App Listening on port http://localhost:${port}!'));