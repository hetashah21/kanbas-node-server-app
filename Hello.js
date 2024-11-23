export default function Hello(app){
// const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')});
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')})
}