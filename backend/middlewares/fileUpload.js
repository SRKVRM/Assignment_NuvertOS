const multer = require("multer");

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes("csv")) {
    cb(null, true);
  } else {
    cb("Only csv file upload is allowed!", false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "data";
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileUpload = multer({ storage: storage, fileFilter: csvFilter });
module.exports = fileUpload;