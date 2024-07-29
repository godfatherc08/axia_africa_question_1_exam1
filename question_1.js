const express = require('express')

app = express()
app.use(express.json())

app.get('/get', (req,res) => {
    const string = req.body
    console.log(string)
    res.send("This is a get request")
})

app.post('/post', (req,res) => {
    const request = req.body
    console.log(request)
    res.send("Successful:")
})

app.put('/update', (req,res) => {
    res.send("Update Successful")
})

app.delete('/delete', (req, res) =>{
    res.send("This is a delete request")
})

app.listen(5000,() =>{
    console.log("app is running")
})