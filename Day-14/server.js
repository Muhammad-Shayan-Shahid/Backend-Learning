require("dotenv").config()
const app = require("./src/app")
const connectedDb = require("./src/config/database")
connectedDb ()

app.listen(3000 , ()=>{
    console.log("Serer is running on port : 3000")
})