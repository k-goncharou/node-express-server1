const express = require('express')
const app = express()
const  PORT = 3003;

app.get('/', home );

app.get('/info', info );
function home (req, res) {
    res.send('PASV!')
}
    function info (req, res) {
        res.send('INFO here')
}


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
