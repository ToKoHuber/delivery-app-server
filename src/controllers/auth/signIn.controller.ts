import { compareSync, hashSync } from "bcryptjs";
import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(401).json({ message: "Enter email" });
      return;
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "Burtgelgvi user baina" });
      return;
    }

    const isCorrect = compareSync(password, user.password);
    if (!isCorrect) {
      res.status(401).json({ message: "password is incorrect" });
      return;
    }
    res.status(200).json({ message: "amjilttai nevterlee", data: user });
  } catch (error) {
    res.status(500).json({ message: "algaa garlaa", error });
  }
};
