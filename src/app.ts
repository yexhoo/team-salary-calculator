import express, { Application, Request, Response } from "express";
import Codes from "./utils/codes"
import Salary from "./services/salary-service"

const app: Application = express();
app.use(express.json());

app.use(function (err: any, req: Request, res: Response, next: any) {
    if (err && err.status === Codes.BAD_REQUEST && "body" in err) {
        res.status(Codes.BAD_REQUEST).json(error(Codes.JSON_ERROR, err.toString()));
    } else next();
});

app.post('/salary', function (req, res) {
    try { res.send(Salary.update(req.body)); }
    catch (err) { res.status(Codes.BAD_REQUEST).json(error(Codes.JSON_ERROR, err.message)); }
});

app.listen(Codes.PORT, function () {
    console.log(Codes.RUNNING_SERVER);
});

const error = (msg: any, detail: any) => {
    return { error: msg, detail: detail || "" }
}