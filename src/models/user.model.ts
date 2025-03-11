import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: Schema.Types.ObjectId;
  isVerified: boolean;
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: ["user", "admin"],
    orderedFoods: { type: Schema.Types.ObjectId, rel: "", required: true }, //add rel
    isVerified: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemaType>("User", UserSchema);
