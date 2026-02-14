const express = require("express")
const app = express()
app.use(express.json())
const notes = [
  {
    title: "title 1",
    description: "desc of 1"
  },
  {
    title: "title 2",
    description: "desc of 2"
  }
]

// POST API
app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.send("API created successfully")
})

app.get('/notes', (req, res) => {
  res.send(notes)
})

// Server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})