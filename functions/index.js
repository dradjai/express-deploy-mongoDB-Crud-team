import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addCar, deleteCar, getCars, updateCar } from "./src/cars.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/hi', (req, res) => {
  res.send("Hi friends");
})

app.post('/cars', addCar);
app.get('/cars', getCars);
app.delete('/cars/:docId', deleteCar);
app.patch('/cars/:docId', updateCar);


export const api = functions.https.onRequest(app);


