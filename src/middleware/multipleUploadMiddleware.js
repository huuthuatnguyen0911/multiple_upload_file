const util = require('util');
const path = require('path');
const multer = require('multer');

// Khoi tao bien cau hinh
let storage = multer.diskStorage({
    // dinh nghia noi file upload se dc luu
    destination: (req, file, callback) => {
        callback(null,
            path.join(`${__dirname}/../../src/uploadResults`)
            )
    },
    filename: (req, file, callback) => {
        let math = ["image/png","image/jpeg"];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `The file <strong>${file.originalname}</strong> is invalid.`;
            return callback(errorMess, null);
        }

       let filename = `${Date.now()}-huuthuat-${file.originalname}`;
       callback(null, filename);
    }
});
let uploadManyFiles = multer({storage: storage}).array("many-files", 17);
let multipleUploadMiddleware = util.promisify(uploadManyFiles);


module.exports = multipleUploadMiddleware;