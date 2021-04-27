import {writeFileSync} from "fs";
writeFileSync("./.env", `REACT_APP_APIKEY=${process.env.REACT_APP_APIKEY}`);
writeFileSync("./.env", `REACT_APP_AUTHDOMAIN=${process.env.REACT_APP_AUTHDOMAIN}`);
writeFileSync("./.env", `REACT_APP_PROJECTID=${process.env.REACT_APP_PROJECTID}`);
writeFileSync("./.env", `REACT_APP_STORAGEBUCKET=${process.env.REACT_APP_STORAGEBUCKET}`);
writeFileSync("./.env", `REACT_APP_MESSAGINGSENDERID=${process.env.REACT_APP_MESSAGINGSENDERID}`);
writeFileSync("./.env", `REACT_APP_APPID=${process.env.REACT_APP_APPID}`);


