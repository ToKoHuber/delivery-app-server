import { Request, Response } from "express";
import foodOrderModel from "../models/food-order.model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const createOrder = req.body;
    const newOrder = await foodCategoryModel.create(createOrder);
    res.status(201).json({ message: "Successfully created order", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in createOrder", error });
  }
};

export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const getOrder = await foodOrderModel.find();
    res.status(200).json({
      message: "All categories",
      length: getCategory.length,
      getCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "Error  createFoodCategory", error });
  }
};

export const updateFoodCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const updateData = req.body;

  try {
    const updateCategory = await foodCategoryModel.updateOne(
      {
        _id: foodCategoryId,
      },
      updateData
    );
    res
      .status(200)
      .json({ message: "Successfully updated category", data: updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in  updateFoodCategory", error });
  }
};

export const deleteFoodCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const deleteReq = req.body;
  try {
    const deleteCategory = await foodCategoryModel.deleteOne(
      { _id: foodCategoryId },
      deleteReq
    );
    res
      .status(200)
      .json({ message: "Successfully deleted category", data: deleteCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in  deleteFoodCategory", error });
  }
};
