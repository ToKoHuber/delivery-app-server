import { hashSync } from "bcryptjs";
import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(401).json({ message: "Write Email" });
      return;
    }
    console.log("raw password", password);
    const hashedPassword = hashSync(password, 10);

    const createdUser = await userModel.create({
      email,
      password: hashedPassword,
    });
    // console.log("Printing hashed password", hashedPassword);
    res
      .status(200)
      .json({ message: "user successfully signed up", data: createdUser });
  } catch (error) {
    res.status(500).json({ message: "algaa garlaa", error });
  }
};
