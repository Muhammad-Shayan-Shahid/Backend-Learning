const upload = require("../middlewares/upload.middlewars")
const songModel = require("../models/song.models")
const id3 = require("node-id3")
const storageServices = require("../services/stoarage.services")

async function uploadSong(req , res) {
    
    const songBuffer = req.file.buffer
    const {mood} = req.body;

    const tags = id3.read(songBuffer)
    // console.log(req.file)

    const songFile =await storageServices.uploadFile({
        buffer : songBuffer ,
        filename : tags.title + ".mp3" ,
        folder : "/cohert2/moodify/songs"
    })

    const posterFile =await storageServices.uploadFile({
        buffer : tags.image.imageBuffer ,
        filename : tags.title + ".jpeg" ,
        folder : "/cohert2/moodify/posters"
    })

    const song = await songModel.create({
        title : tags.title ,
        url : songFile.url ,
        posterUrl : posterFile.url ,
        mood
    })

    res.status(200).json({
        message : "Song created successfully...",
        mood
    })
}

module.exports = {
    uploadSong
}