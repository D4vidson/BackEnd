const { request, response } = require("express")

const corinthians = require('express')
const pretoApp = corinthians()
const port = 3051

pretoApp.get('/paulistao',(req,res)=>{
    res.send("corinthians")
})

pretoApp.listen(port,()=>{
    console.log("Curintia")
})
