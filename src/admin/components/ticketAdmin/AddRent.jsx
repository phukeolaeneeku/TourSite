import React, { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

const AddRent = () => {
  const [addRentcarData, setAddRentcarData] = useState({
    category: "",
    name: "",
    address: "",
    description: "",
    brand: "",
    carnumber: "",
    image: null,
    images: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddRentcarData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setAddRentcarData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  const handleMultipleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const previewsArray = filesArray.map((file) => URL.createObjectURL(file));

      setImagePreviews((prevPreviews) => prevPreviews.concat(previewsArray));
      setAddRentcarData((prevState) => ({
        ...prevState,
        images: prevState.images.concat(filesArray),
      }));

      e.target.value = null;
    }
  };

  const removeImage = (index) => {
    const newImages = addRestaurantData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setAddRentcarData((prevState) => ({
      ...prevState,
      images: newImages,
    }));
    setImagePreviews(newPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", addRentcarData.category);
    formData.append("name", addRentcarData.name);
    formData.append("address", addRentcarData.address);
    formData.append("description", addRentcarData.description);
    formData.append("brand", addRentcarData.brand);
    formData.append("carnumber", addRentcarData.carnumber);
    formData.append("image", addRentcarData.image);
    addRentcarData.images.forEach((img, i) => {
      formData.append(`images[${i}]`, img);
    });

    const config = {
      method: "post",
      url: import.meta.env.VITE_API + `/tourapi/ticket/create/`,

      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setAddRentcarData({
          category: "",
          name: "",
          address: "",
          description: "",
          brand: "",
          carnumber: "",
          image: null,
          images: [],
        });

        setSelectedImage(null);
        setImagePreviews([]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <h2>Rent car</h2>
          <form className="edit-product-forms" onSubmit={handleSubmit}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  {/* Display the selected image, or a placeholder if not selected */}
                  <img src={selectedImage} alt="img" />
                  <div
                    className="box_chooses_image"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Choose image
                  </div>
                  {/* Hidden file input for triggering the file selection dialog */}
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="gallery">
                <h3>View More Images</h3>
                <div className="gallery-box">
                  {imagePreviews.map((image, index) => (
                    <div className="gallery-box-view" key={index}>
                      <img src={image} alt="" />
                      <div
                        className="button"
                        onClick={() => removeImage(index)}
                      >
                        <AiOutlineDelete />
                      </div>
                    </div>
                  ))}
                  <div
                    className="add-more"
                    onClick={() =>
                      document.getElementById("fileInputMultiple").click()
                    }
                  >
                    +
                  </div>
                  {/* Hidden file input for triggering the file selection dialog */}
                  <input
                    type="file"
                    id="fileInputMultiple"
                    style={{ display: "none" }}
                    onChange={handleMultipleImageChange}
                    multiple // Allow multiple file selection
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <div className="input">
              <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={addRentcarData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="pakse">Rent</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={addRentcarData.name}
                  onChange={handleChange}
                  required
                />{" "}
              </div>

              <div className="input">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price..."
                  value={addRentcarData.price}
                  onChange={handleChange}
                  required
                />{" "}
              </div>
              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address..."
                  value={addRentcarData.address}
                  onChange={handleChange}
                  required
                />{" "}
              </div>
              <div className="input">
                <label htmlFor="brand">Brand:</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand..."
                  value={addRentcarData.brand}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="number">Car number:</label>
                <input
                  type="text"
                  name="carnumber"
                  placeholder="Car number..."
                  value={addRentcarData.carnumber}
                  onChange={handleChange}
                  required
                />{" "}
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  rows="10"
                  placeholder="Description..."
                  value={addRentcarData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="submit1">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddRent;
