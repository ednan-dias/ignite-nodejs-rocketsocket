import "reflect-metadata";
import express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { Server } from "socket.io";
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://root:root@localhost:27017/", {
    authMechanism: "DEFAULT",
    dbName: "rocketsocket",
  })
  .then(() => console.log("Mongo conectado!"))
  .catch((err) => console.log(`Erro ao conectar: ${err}`));

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

export { server, io };
