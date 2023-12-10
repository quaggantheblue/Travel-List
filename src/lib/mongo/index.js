"use server";

import mongoose from "mongoose";
import "dotenv/config";
import City from "@/models/city";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return await mongoose.connect(process.env.MONGODB_URI);
}

export const addToDatabase = async (data) => {
  try {
      await connectMongoDB();
      City.create(data)
      .then( (thing) => {
        console.log("city created");
      });
  } catch (err) {
      console.log(err);
  }
}

export const findById = async (id) => {
  await connectMongoDB();
  return await City.find({id: id});
}

export const findAndDelete = async (id) => {
  await connectMongoDB();
  return await City.findOneAndDelete({id: id});
}

export const findAll = async (id) => {
  await connectMongoDB();
  return await City.find();
}