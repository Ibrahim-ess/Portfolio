const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/french", (req, res)=> {
    res.sendFile(__dirname + '/frenchCV.html')  
})

app.get("/english", (req, res)=> {
    res.sendFile(__dirname + '/englishCV.html')  
})

app.listen(port, () => {
    console.log('Server app listening on port ' + port)
})
