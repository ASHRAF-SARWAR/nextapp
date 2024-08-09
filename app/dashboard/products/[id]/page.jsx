import { updateProduct, updateUser } from "@/app/libs/actions";
import styles from "../../../ui/dashbord/products/viewProduct/viewProduct.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/libs/data";

async function ViewProduct({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Image
          src="/default.png"
          alt=""
          width="130"
          height="130"
          className={styles.Image}
        />
        <span className={styles.title}>{product.title}</span>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" placeholder={product.title} name="title"></input>
          <label>Price</label>
          <input type="number" placeholder={product.price} name="price" />
          <label>Stock</label>
          <input type="number" placeholder={product.stock} name="stock" />
          <label>Color</label>
          <input type="text" placeholder={product.color} name="color" />
          <label>Size</label>
          <input type="text" placeholder={product.size} name="size" />
          <label>Categoury</label>
          <select name="cat" id="cat">
            <option value="kitchen" selected={product.cat === "kitchen"}>
              Kitchen
            </option>
            <option value="phone" selected={product.cat === "phone"}>
              Phone
            </option>
            <option value="computer" selected={product.cat === "computer"}>
              Computer
            </option>
          </select>
          <label>Description</label>
          <textarea placeholder={product.desc} rows="7" name="desc"></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default ViewProduct;
