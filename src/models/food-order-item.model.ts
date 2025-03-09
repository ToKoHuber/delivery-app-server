import mongoose, { Schema } from "mongoose";

type FoodOrderItemSchemaType = {
  quantity: number;
};

const FoodOrderItemSchema: Schema = new Schema(
  {
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderItemSchemaType>(
  "FoodOrderItem",
  FoodOrderItemSchema
);
