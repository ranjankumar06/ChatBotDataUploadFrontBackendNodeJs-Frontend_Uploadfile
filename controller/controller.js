const data = require("../Model/model")

const publicDir = require('path').join(__dirname,'../uploads'); 



exports.photoVideoUplode = async (req, res) => {
    try {
        const photovideo = await data.create({

            photoVideo: publicDir + '/' + `${req.file.filename}`
        })
        return res.send({ reponseCode: 200, success: true, responseMessage: "photoVideo created successfully", Result: photovideo })

    }
    catch (error) {
        return res.send({ responseCode: 500, responseMessage: "Something went wrong", responseResult: error.message })
    }
}