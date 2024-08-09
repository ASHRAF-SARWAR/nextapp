import React from "react";
import styles from "../../../ui/dashbord/products/addProduct/addProduct.module.css";
import { addProduct } from "@/app/libs/actions";

function AddProduct() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Title" name="title"></input>
        <select name="cat" id="cat">
          <option value="general">Choose a categoury</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea placeholder="Description" rows="17" name="desc"></textarea>
        <button className={styles.button}>Add </button>
      </form>
    </div>
  );
}

export default AddProduct;
