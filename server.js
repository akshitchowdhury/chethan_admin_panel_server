require('dotenv').config(); 
const express = require('express');
const Texts = require('./Model/model');

const connectDB = require('./Lib/lib')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3001;
app.use(cors())
connectDB()

app.use(express.json())
app.get('/', (req,res)=>{
    res.send("Welcome to my Server!")
})

app.get("/getText", async(req,res)=>{
    try {
        const texts = await Texts.find()
        res.json(texts) 
    } catch (error) {
        res.status(400).json('Error: ' + error);

    }
})

app.post("/postText", async(req,res)=>{
        try {
            const newText = new Texts({
                title: req.body.title,
                description: req.body.description,
                rating: req.body.rating
            })
            const text = await newText.save();
            res.json(text);
                
        } catch (error) {
            res.status(400).json('Error: ' + error);
        }
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})