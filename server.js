const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//routers

const router = require('./routes/productRoute');
const routerReview = require('./routes/reviewRoute');

//middlewares
app.use('/api/v1/product', router);
app.use('/api/v1/review', routerReview);


//testing API
app.get('/', (req, res) => {
    res.json({message: 'Hello from API'})
});

//PORT

const PORT = process.env.PORT || 8080;

//Server

app.listen(PORT, "192.168.88.164", () => {
    console.log(`Server is running on port: ${PORT}`);
})