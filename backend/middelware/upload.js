import multer from 'multer';
import multerS3 from 'multer-s3';
import s3 from "../utils/awsConfig.js"

// Configure multer and multer-s3
export const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        key: function (req, file, cb) {
            cb(null, req.folderName + Date.now().toString() + '-' + file.originalname);
        }
    })
});

export const withFolderName = (folderName) => (req, res, next) => {
    req.folderName = folderName;
    next();
}