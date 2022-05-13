const express = require('express');
const app = express();
app.use(express.json());


app.post('/test', (req, res) => {
    const input = req.body;
    const string = input.string_to_cut;
    let result = [];


    for (let i = 2; i < string.length; i = i + 3) {
        const letter = string[i];
        result.push(letter)
    }
    return res.json({
        'return_string': result.join('')

    })

})

const port = 5000;
app.listen(port, () => {
    console.log('Server is listening on port', port)
});
