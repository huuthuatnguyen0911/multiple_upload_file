const multipleUploadMiddleware = require('../middleware/multipleUploadMiddleware');

let debug = console.log.bind(console);

let multipleUpload = async (req, res) =>{
    try {
        // Thuc hien upload
        await multipleUploadMiddleware(req, res);
        debug(req.files);
        if (req.files.length <= 0){
            return res.send("You must upload 1 file or more");
        }

        return res.send("You file have been uploaded.");

    } catch (error) {
        debug(error);

        if(error.code === "LIMIT_UNEXPECTED_FILE"){
            return res.send("Exceeds the number of files allowed to upload.");
        }

        return res.send(`Error when trying upload many files: ${error}`);
    }
};

module.exports = {
    multipleUpload:multipleUpload
};