const express = require("express")
const port = 3001
const app = express()

app.get('/', (req, res)=>{
    res.send(`thanks for calling me, nice to meet you ${port}`)
})
app.listen(port,()=> console.log(`listenting to port ${port}`))