import { Types } from "mongoose";
import { IUser } from "../models/user.js";

// Helper function to convert file to Base64 (Assuming file is a Buffer)
export const getBase64 = (file: Buffer): string => {
  return `data:image/jpeg;base64,${file.toString("base64")}`;
};

// Function to get the other member in a chat who is not the current user
export const getOtherMember = (
  members: IUser[],
  userId: Types.ObjectId,
): IUser => {
  const otherUser = members.find(
    (member) => member._id.toString() !== userId.toString(),
  );

  if (!otherUser) {
    throw new Error("Other member not found in chat");
  }

  return otherUser;
};
