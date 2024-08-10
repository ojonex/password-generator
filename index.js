import express from "express";
import ejs from "ejs";

console.log("sever side running");
const app = express();
const port = 3001;

app.listen(3001, () => {
    console.log('running on port 3000');
})


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index.ejs');
})
