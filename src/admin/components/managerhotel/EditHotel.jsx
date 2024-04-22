import React, { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./css/editHotel.css";
import { AiOutlineDelete } from "react-icons/ai";

const EditHotel = () => {
  // State to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  // State to store the array of selected images
  const [images, setImages] = useState([]);


  // Function to handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Create a URL for the selected file
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  // Function to handle image selection
  const handleImageChangeCategory = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // Append new images to the existing array
      setImages((prevImages) => prevImages.concat(filesArray));
      // It's important to revoke the object URLs to avoid memory leaks
      e.target.value = null;
    }
  };
  // Function to remove an image from the array
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <form className="edit-product-forms">
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
                  {images.map((image, index) => (
                    <div className="gallery-box-view" key={index}>
                      <img src={image} alt="" />
                      <div className="button" onClick={() => removeImage(index)}>
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
                    onChange={handleImageChangeCategory}
                    multiple // Allow multiple file selection
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <div className="input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name..." />
              </div>

              <div className="input">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" placeholder="Price..." />
              </div>
              <div className="input">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="Address..." />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  rows="10"
                  name="description"
                  placeholder="Description..."
                ></textarea>
              </div>
            </div>

            <div className="submit1">
              <button type="submit">Edit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditHotel;
