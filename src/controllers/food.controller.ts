import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create(foodData);
    res.status(201).json({ message: "Successfully created food", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error in createFood", error });
  }
};

export const getFoodById = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  console.log(foodId);
  try {
    const getFoodById = await foodModel.findOne({ _id: foodId });
    res.status(200).json({
      message: "get food by Id",
      getFoodById,
    });
  } catch (error) {
    res.status(500).json({ message: "Error  getting Food", error });
  }
};
export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const getFoods = await foodModel.find();
    res.status(200).json({
      message: "All foods",
      length: getFoods.length,
      getFoods,
    });
  } catch (error) {
    res.status(500).json({ message: "Error  createFood", error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const updateData = req.body;

  try {
    const updateFood = await foodModel.updateOne(
      {
        _id: foodId,
      },
      updateData
    );
    res
      .status(200)
      .json({ message: "Successfully updated food", data: updateFood });
  } catch (error) {
    res.status(500).json({ message: "Error in  updateFood", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const deleteReq = req.body;
  try {
    const deleteFood = await foodModel.deleteOne({ _id: foodId }, deleteReq);
    res
      .status(200)
      .json({ message: "Successfully deleted food", data: deleteFood });
  } catch (error) {
    res.status(500).json({ message: "Error in  deleteFood", error });
  }
};
