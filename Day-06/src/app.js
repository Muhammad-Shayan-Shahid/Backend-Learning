/*
 -- 1. Server create krna 
 -- 2. Server config krna
*/

const express = require('express')
const noteModel = require('./models/notes.models')

const app = express()

app.use(express.json())
/*
POST notes  :
*/

app.post("/notes" ,async (req , res)=>{
    const {title , desc , age } = req.body

    const notes = await noteModel.create({
        title , desc , age
    })

    res.status(201).json({
        message : "Notes created Successfully.",
        notes
    })
})

/*
GET notes (fetch) :
*/
app.get("/notes" ,async (req , res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message : "Notes fetched Successfully.",
        notes
    })
})

module.exports = app;
