"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectDB } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import credentials from "next-auth/providers/credentials";

export const addUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    await connectDB();

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const addNew = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      isAdmin,
      isActive,
      address,
    });
    await addNew.save();
  } catch (error) {
    console.log("Error ", error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);
  console.log(Object.fromEntries(formData));

  try {
    connectDB();

    const addNew = new Product({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });
    await addNew.save();
  } catch (error) {
    console.log("Error ", error);
  }
  revalidatePath("/dashboard/[products]");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);
  try {
    connectDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log("Error ", error);
  }
  revalidatePath("/dashboard/products");
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);
  try {
    connectDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log("Error ", error);
  }
  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  console.log(Object.fromEntries(formData));

  try {
    connectDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };

    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("Error ", error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);
  console.log(Object.fromEntries(formData));

  try {
    connectDB();

    const updateFields = {
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    };

    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("Error ", error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authentication = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(username, password);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};
