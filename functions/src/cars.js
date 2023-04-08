import { db } from "./dbConnect.js";
import { ObjectId } from "mongodb";

const coll = db.collection('cars');


// ADD car

export async function addCar(req, res) {

  try {
    const carObj = req.body;
    
    await coll.insertOne(carObj);
    res.status(201).send({message: "car has been added"});
    
  } catch (error) {
      console.log(error); 
  }
}

// GET car

export async function getCars(req, res) {

  try {
    const carColl = await coll.find().toArray();
    res.status(201).send(carColl);
    
  } catch (error) {
      console.log(error);
  }

}

// DELETE car
export async function deleteCar(req, res) {
  try {
    const docId = { "_id": new ObjectId(req.params.docId)};
    await coll.deleteOne(docId);
  
    res.status(201).send({message: "car deleted"});
    
  } catch (error) {
      console.log(error)
}

}

// UPDATE car
export async function updateCar(req, res) {

  try {
    const id = { "_id": new ObjectId(req.params.docId)};
    const carObj = req.body;
    await coll.updateOne(id, {$set: carObj});
  
    res.status(201).send({message: "car updated"});
    
  } catch (error) {
      console.log(error);
  }
}

