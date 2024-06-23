import { useEffect, useState } from "react";
import "./inventory.css";
import { AvatarSection, InventorySearchBar } from "components";

export const Inventory = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const URL = "http://localhost:8000/api/products";
    const configurationGet = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const reponse = await fetch(URL, configurationGet);
    const data = await reponse.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const formatPrice = (price) => {
    return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="inventoryContainer">
      <div className="leftPanel">
        <InventorySearchBar />
        <div className="productList">
          <table>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Brand</th>
            </tr>
            {products.map((product) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{product.name}</td>
                <td>{product.productID}</td>
                <td>{formatPrice(product.price)}Gs</td>
                <td>{product.quantity}</td>
                <td>{product.size}</td>
                <td>{product.brand}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="rightPanel">
        <div className="admin">
          <AvatarSection />
        </div>
        <div className="quickActions">
          <h2>Quick Actions</h2>
          <ul>
            <li>Create Order</li>
            <li>Add Product</li>
            <li>Add Supplier</li>
            <li>Export</li>
          </ul>
        </div>
        <div className="recentActivity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Product 1 added</li>
            <li>Product 2 added</li>
            <li>Product 3 added</li>
            <li>Product 4 added</li>
            <li>Product 5 added</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
