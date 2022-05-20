import * as express from "express"
import * as p from "path";
import Data from "./data";
import { log } from "./utils";

let app = express();
let d = new Date();

app.listen(Data.PORT, (req, res)=>{
    log("---------------------------------------------------------------------------------------------------")
    log("Server Started AT " + d.toLocaleString() + "at url 127.0.0.1:" + Data.PORT);
    log("---------------------------------------------------------------------------------------------------")
})