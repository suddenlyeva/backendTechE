const express    = require('express');
const cors       = require('cors');
const morgan     = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/' , (req, res) => {
    res.json({
        message: 'hello world'
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
