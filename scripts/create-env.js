const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

fs.writeFileSync(
    "./.env",
    `REACT_APP_APIKEY=${process.env.REACT_APP_APIKEY}
REACT_APP_AUTHDOMAIN=${process.env.REACT_APP_AUTHDOMAIN}
REACT_APP_PROJECTID=${process.env.REACT_APP_PROJECTID}
REACT_APP_STORAGEBUCKET=${process.env.REACT_APP_STORAGEBUCKET}
REACT_APP_MESSAGINGSENDERID=${process.env.REACT_APP_MESSAGINGSENDERID}
REACT_APP_APPID=${process.env.REACT_APP_APPID}`
);
