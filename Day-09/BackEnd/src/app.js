// craete server

const express = require("express")
const noteModel = require("./module/note.module")
const cors = require("cors")
const path = require("path")


const app = express()

app.use(express.json())
app.use(cors())   // allow access of api to front end CORS Policy.....
app.use(express.static(path.join(__dirname,"..","/public")))  // ji folder ka path dy gy is ki sb files ka sccess mil jata hy hmy..
/*
POST -- create a post...
*/

app.post('/api/notes' , async (req , res)=>{
    const {title, desc} = req.body

    const note = await noteModel.create({
        title, desc
    })

    res.status(201).json({
        message : "Notes Craeted Successfully.." , 
        note
    })
})

/*
GET -- fetch a post...
*/

app.get('/api/notes' , async (req , res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message : "Notes Fetched Successfully.." , 
        notes
    })
})

/*
DEL -- delete note with specific id : req.params...
*/

app.delete('/api/notes/:id' , async (req , res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Notes Deleted Successfully.." 
    })
})

/*
PATCH -- upadate notes with id .....
*/

app.patch('/api/notes/:id' , async (req , res)=>{
    const id = req.params.id;
    const {desc} = req.body;

    await noteModel.findByIdAndUpdate(id ,{desc })

    res.status(200).json({
        message : "Notes updated Successfully.." 
    })
})

console.log(__dirname)
// jb user us api ko request kry jo hm ny craete ni ki hy...
app.use('*name',(req , res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app