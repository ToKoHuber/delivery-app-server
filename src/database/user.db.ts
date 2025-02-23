type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRoleEnum;
  orderedFoods: ObjectId[];
  ttl: Date;
  isVerified: Boolean;
  createdAt: Date;
  updatedAt: Date;
};
