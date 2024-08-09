import { Product, User } from "./models.js";
import { connectDB } from "./utils.js";
const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 4;
  await connectDB();
  try {
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log("Error", error);
  }
};
const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 4;
  await connectDB();
  try {
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log("Error", error);
  }
};

const fetchUser = async (id) => {
  await connectDB();
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("Error", error);
  }
};

const fetchProduct = async (id) => {
  await connectDB();
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log("Error", error);
  }
};

export { fetchUsers, fetchProducts, fetchUser, fetchProduct };
