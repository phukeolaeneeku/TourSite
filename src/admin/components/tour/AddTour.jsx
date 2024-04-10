import React, { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./css/addTour.css";
import imageicon from "../../../img/imageicon.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";
import {
  HiOutlineShoppingBag as HiMiniShoppingBag,
  HiPlus,
} from "react-icons/hi";

const AddTour = () => {
  const [products, setProducts] = useState([
    {
      mainImage: null,
      productName: "",
      price: "",
      category: "",
      description: "",
      sizes: [],
      colors: [],
    },
  ]);

  const handleProductName = (e, index) => {
    const value = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index].productName = value;
    setProducts(updatedProducts);
  };

  const handleProductPrice = (e, index) => {
    const value = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index].price = value;
    setProducts(updatedProducts);
  };

  const handleProductDescription = (e, index) => {
    const value = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index].description = value;
    setProducts(updatedProducts);
  };

  const handleImage = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProducts = [...products];
        updatedProducts[index].mainImage = reader.result;
        setProducts(updatedProducts);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    setProducts([
      ...products,
      {
        mainImage: null,
        productName: "",
        price: "",
        category: "",
        description: "",
        sizes: [],
        colors: [],
      },
    ]);
  };
  ////////////////// handleDelete
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  /////////////// handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    products.forEach((product, index) => {
      formData.append(`name${index}`, product.productName);
      formData.append(`price${index}`, product.price);
      formData.append(`description${index}`, product.description);
      formData.append(`popular${index}`, product.popular ? "Yes" : "No");
      if (product.mainImage) {
        formData.append(`image${index}`, product.mainImage);
      }
    });
    console.log("FormData:", formData);
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="boxcontainerSpan_Box"></div>
        <div className="box_container_product">
          <div className="Box_btn_haed">
            <h3>Add</h3>
            <div className="btn_submit">
              <button type="submit" onClick={handleSubmit}>
                Post
              </button>
            </div>
          </div>

          <div className="group_container_product">
            {products.map((product, index) => (
              <div key={index}>
                <div className="addProduct_box_content_afterThat">
                  <div
                    className="deleteBox_productconotent"
                    onClick={() => handleDelete(index)}
                  >
                    <AiOutlineDelete />
                  </div>

                  <div className="box_input-img">
                    {product.mainImage ? (
                      <img src={product.mainImage} alt="product" />
                    ) : (
                      <img src={imageicon} alt="default" />
                    )}
                    <input
                      type="file"
                      id={`img-${index}`}
                      onChange={(e) => handleImage(e, index)}
                      required
                    />
                  </div>

                  <div className="edit_images">
                    <label
                      htmlFor={`img-${index}`}
                      className="trigger_popup_fricc"
                    >
                      <CiCamera id="icon_ci_camera" />
                    </label>
                  </div>
                  <div className="box_container_image">
                    <div className="input-box">
                      <div className="box">
                        <input
                          type="text"
                          placeholder="Product Name"
                          value={product.productName}
                          onChange={(e) => handleProductName(e, index)}
                          required
                        />
                      </div>
                      <div className="box">
                        <input
                          type="text"
                          placeholder="Description"
                          value={product.description}
                          onChange={(e) => handleProductDescription(e, index)}
                          required
                        />
                      </div>
                      <div className="box">
                        <input
                          type="text"
                          placeholder="Product Price"
                          value={product.price}
                          onChange={(e) => handleProductPrice(e, index)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div onClick={handleAdd}>
              <div className="iconimage">
                <HiMiniShoppingBag id="icon_shoppingbag" />
                <HiPlus id="icon_goplus" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTour;
