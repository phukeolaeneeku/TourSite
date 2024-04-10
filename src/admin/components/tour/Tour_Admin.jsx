import "./css/tour_Admin.css";
import productImage from "../../../img/productImage.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import imageicon from "../../../img/imageicon.jpg";
import banner_no from "../../../img/banner_no.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Tour_Admin = () => {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "Snaekers",
      price: 18.5,
      category: "Snaekers",
      desc: "High-top leather snaeker",
      size: ["L ", "ML ", "L "],
      color: ["black ", "black "],
      images: [{ src: productImage }],
    },
    {
      productID: 1,
      productName: "Snaekers",
      price: 18.5,
      category: "Snaekers",
      desc: "High-top leather snaeker",
      size: ["L ", "ML ", "L "],
      color: ["black ", "black "],
      images: [{ src: productImage }],
    },
    {
      productID: 1,
      productName: "Snaekers",
      price: 18.5,
      category: "Snaekers",
      desc: "High-top leather snaeker",
      size: ["L ", "ML ", "L "],
      color: ["black ", "black "],
      images: [{ src: productImage }],
    },
    {
      productID: 1,
      productName: "Snaekers",
      price: 18.5,
      category: "Snaekers",
      desc: "High-top leather snaeker",
      size: ["L ", "ML ", "L "],
      color: ["black ", "black "],
      images: [{ src: productImage }],
    },
  ]);

  const [selectedImages, setSelectedImages] = useState(
    Array(products.length).fill(null)
  );
  const [updateProductId, setUpdateProductId] = useState(null);
  const [isConfirmationPopupOpenName, setConfirmationPopupOpenName] =
    useState(false);
  const [isConfirmationPopupOpenPrice, setConfirmationPopupOpenPrice] =
    useState(false);
  const [isConfirmationDesc, setConfirmationDesc] = useState(false);
  const [isConfirmationPopupOpenImage, setConfirmationPopupOpenImage] =
    useState(false);
  const [mainImageBanner, setMainImageBanner] = useState(null);
  const [mainImageCategory, setMainImagCategory] = useState(null);

  const handleImage = (event, index) => {
    const selectedImage = event.target.files[0];
    const updatedImages = [...selectedImages];
    updatedImages[index] = selectedImage;
    setSelectedImages(updatedImages);
  };

  ///Choose image handleImageBanner
  const handleImageBanner = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setMainImageBanner([file]);
      };

      reader.readAsDataURL(file);
    }
  };

  //// onClick icon edit product name
  const openConfirmationPopup = (productID) => {
    setUpdateProductId(productID.productName);
    setConfirmationPopupOpenName(true);
  };

  const closeConfirmationPopup = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenName(false);
  };

  //// onClick icon camera product image
  const openConfirmationPopupImage = (productID) => {
    setUpdateProductId(productID.images);
    setConfirmationPopupOpenImage(true);
  };

  const closeConfirmationPopupImage = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenImage(false);
  };

  ///// onClick icon edit product price

  const openConfirmationPopupPrice = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationPopupOpenPrice(true);
  };

  const closeConfirmationPopupPrice = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenPrice(false);
  };

  ///// onClick icon edit product Desc

  const openConfirmationDesc = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationDesc(true);
  };

  const closeConfirmationDesc = () => {
    setUpdateProductId(null);
    setConfirmationDesc(false);
  };

  // Choose choose image
  const [isPopupimage, setPopupimage] = useState(false);

  const togglePopupimage = () => {
    setPopupimage(!isPopupimage);
  };

  /////////////////////handleDelete
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          <div className="productHead_content">
            <h1 className="htxthead">
              <span className="spennofStyleadmin"></span>TOUR
            </h1>
            <div className="categoryBoxfiler">
              <Link to="/addtour-admin" className="box_add_product">
                <BiPlus id="icon_add_product" />
                <p>Add</p>
              </Link>
            </div>
          </div>
          {/* <div className="banner_no_box">
            <div className="banner_no_box_image">
              <div className="img">
                {mainImageBanner && mainImageBanner.length > 0 ? (
                  <img
                    src={URL.createObjectURL(mainImageBanner[0])}
                    alt="Banner"
                  />
                ) : (
                  <img src={banner_no} alt="Banner" />
                )}
              </div>
            </div>
            <div className="edit_image_banner" onClick={togglePopupimage}>
              <CiCamera id="box_icon_camera" />
            </div>
            {isPopupimage && (
              <form className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box_image">
                  <div className="box_input_image">
                    <p>Edit banner image</p>
                    <label className="popup_Border_Boximagae">
                      {mainImageBanner && mainImageBanner.length > 0 ? (
                        <img
                          src={URL.createObjectURL(mainImageBanner[0])}
                          alt="Banner"
                        />
                      ) : (
                        <img src={imageicon} alt="Banner" />
                      )}
                      <input
                        type="file"
                        id="img"
                        onChange={handleImageBanner}
                        required
                      />
                      <p className="box_choose_image">이미지 선택</p>
                    </label>
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={togglePopupimage}
                    >
                      Cancel
                    </button>
                    <button className="btn_confirm btn_addproducttxt_popup">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div> */}

          <div id="container_product_admin">
            <div className="productHead_content">
              <h1 className="htxthead">
                <span className="span_Styles"></span>One day tour
              </h1>
            </div>
            <div className="contentImageProducts">
              {products.map((product, index) => (
                <div className="box_product" key={index}>
                  <div className="box_input-img">
                    <div className="box_image">
                      {selectedImages[index] ? (
                        <img
                          src={URL.createObjectURL(selectedImages[index])}
                          alt="Product"
                        />
                      ) : (
                        <img src={product.images[0].src} alt="Product" />
                      )}
                      <input
                        type="file"
                        id={`image-${index}`}
                        onChange={(e) => handleImage(e, index)}
                        required
                      />
                    </div>

                    <div
                      className="Box_delete_product"
                      onClick={() => handleDelete(product.id)}
                    >
                      <AiOutlineDelete />
                    </div>

                    <div
                      className="edit_image_product"
                      onClick={() =>
                        openConfirmationPopupImage(product.productID)
                      }
                    >
                      <CiCamera id="box_icon_camera_product" />
                    </div>

                    {isConfirmationPopupOpenImage && (
                      <form className="box_formUpdate">
                        <div className="formUpdate">
                          <div className="imageBox">
                            <p>Edit product image</p>
                            <label>
                              {selectedImages[index] ? (
                                <img
                                  src={URL.createObjectURL(
                                    selectedImages[index]
                                  )}
                                  alt="product"
                                />
                              ) : (
                                <img src={imageicon} alt="product" />
                              )}
                              <input
                                type="file"
                                id={`image-${index}`}
                                onChange={(e) => handleImage(e, index)}
                                required
                              />
                              <div className="choose">
                                <p>이미지 선택</p>
                              </div>
                            </label>
                          </div>
                          <div className="btn-update-del">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopupImage}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                            {/* </div> */}
                          </div>
                        </div>
                      </form>
                    )}
                  </div>

                  <div className="txtOFproduct">
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationPopup(product.productID)}
                    >
                      <li>Name: {product.productName}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                    
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() =>
                        openConfirmationPopupPrice(product.productID)
                      }
                    >
                      <li>Price: ￦{product.price}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>

                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationDesc(product.productID)}
                    >
                      <li>Desc: {product.desc}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>

                    {isConfirmationPopupOpenName && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit product name</p>
                            <input
                              type="text"
                              placeholder="Name..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopup}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {isConfirmationPopupOpenPrice && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit product price</p>
                            <input
                              type="text"
                              placeholder="Price..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopupPrice}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {isConfirmationDesc && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit Description</p>
                            <input
                              type="text"
                              placeholder="Description..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationDesc}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour_Admin;
