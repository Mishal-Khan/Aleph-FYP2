const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./simplepage')

app.use(bodyParser.json())


const simplepage = mongoose.model("recordingchecks")



const mongoUri = "mongodb+srv://cgp:t4uDPBmKOBoMXvav@cluster0.2w6dq.mongodb.net/<dbname>?retryWrites=true&w=majority" 

mongoose.connect(mongoUri,{
useNewUrlParser:true,
useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
	console.log("successfully connected")
})

mongoose.connection.on("error",(err)=>{
	console.log("error ....",err)
})



app.get('/', (req,res)=>{
	res.send("welcome to my ")
})

app.post('/send-data', (req,res)=>{
    const page = new simplepage({
    	name: req.body.name,
    	recording : req.body.recording,
    	id : req.body.id
    })

    page.save()
    .then(data=>{
    	console.log(data)
    res.send("success")
    }).catch(err=>{
    	console.log(err)
    })

	
})

app.listen(3000,()=>{
	console.log("server isssss running")
})