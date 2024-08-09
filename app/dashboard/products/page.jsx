import React from "react";
import styles from "../../ui/dashbord/products/products.module.css";
import Search from "@/app/ui/dashbord/search/search";
import Image from "next/image";
import Link from "next/link";
import { searchParams } from "next/navigation";
import Pagination from "@/app/ui/dashbord/pagination/pagination";
import { fetchProducts } from "@/app/libs/data";
import { deleteProduct } from "@/app/libs/actions";

async function Products({ searchParams }) {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search products here..."} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New </button>{" "}
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td className={styles.ImageName}>
                  <Image
                    src={product.image || "/noproduct.jpg"}
                    alt="img"
                    width="30"
                    height="30"
                    className={styles.img}
                  />
                  <span> {product.title}</span>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input name="id" type="hidden" value={product.id}></input>
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default Products;
