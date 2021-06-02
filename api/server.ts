import express from 'express';
const port = 3080

const app = express();
//app.use(express.json)

app.use('/',express.static('../static'))

app.get('/api', (req, res) => {
    res.send('get /api');
})
// app.get('/', (req, res) => {
//   res.send('get /  (try /test)');
// })

app.listen(port, '127.0.0.1', () => {
    console.log(`http://localhost:${port}`);
})
