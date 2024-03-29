import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { UserController } from "./controllers/UserController";

const app = express();

const jsonBodyParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: true });
const userController = new UserController();

app.use(cors());
app.use(urlEncoded);
app.use(jsonBodyParser);

app.post("/users", userController.createUser);
app.get("/users", userController.getAllUsers);

app.listen(3333, () => {
  console.log("server rodando na porta 3333");
});
