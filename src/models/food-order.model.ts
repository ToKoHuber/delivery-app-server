import mongoose, { Schema } from "mongoose";

type FoodOrderSchemaType = {
  user: Schema.Types.ObjectId;
  totalPrice: number;
  //   foodOrderItems: ;
};

const FoodOrderSchema: Schema = new Schema(
  {
    user: Schema.Types.ObjectId,
    totalPrice: Number,
    //   foodOrderItems: ;
    status: ["PENDING", "CANCELED", "DELIVERED"],
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderSchemaType>(
  "FoodOrder",
  FoodOrderSchema
);
