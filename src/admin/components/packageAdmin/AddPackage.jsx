import React, { useEffect, useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";

const AddPackage = () => {
  const [addPacketData, setAddPacketData] = useState({
    category: "",
    name: "",
    price: "",
    address: "",
    description: "",
    image: null,
    images: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddPacketData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setAddPacketData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  // Function to handle image selection
  const handleMultipleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const previewsArray = filesArray.map((file) => URL.createObjectURL(file));

      setImagePreviews((prevPreviews) => prevPreviews.concat(previewsArray));
      setAddPacketData((prevState) => ({
        ...prevState,
        images: prevState.images.concat(filesArray),
      }));

      e.target.value = null;
    }
  };

  // Function to remove an image from the array
  const removeImage = (index) => {
    const newImages = addPacketData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setAddPacketData((prevState) => ({
      ...prevState,
      images: newImages,
    }));
    setImagePreviews(newPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("category", addPacketData.category);
    formData.append("name", addPacketData.name);
    formData.append("price", addPacketData.price);
    formData.append("address", addPacketData.address);
    formData.append("description", addPacketData.description);
    formData.append("image", addPacketData.image);
    addPacketData.images.forEach((img, i) => {
      formData.append(`images[${i}]`, img);
    });
  
    const config = {
      method: "post",
      url: import.meta.env.VITE_API + `/tourapi/packet/create/`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };
  
    axios
      .request(config)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Packet created successfully.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setAddPacketData({
            category: "",
            name: "",
            price: "",
            address: "",
            description: "",
            image: null,
            images: [],
          });
          setSelectedImage(null);
          setImagePreviews([]);
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "There was an error creating the packet.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error(error);
      });
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <h2>Add package</h2>
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
                      <img src={image} alt="Preview" />
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
                  value={addPacketData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="3days">3 days </option>
                  <option value="4days">4 days</option>
                  <option value="5days">5 days</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={addPacketData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price..."
                  value={addPacketData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="address">Address</label>
                <input 
                  type="text"
                  name="address"
                  placeholder="Address..."
                  value={addPacketData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  rows="10"
                  placeholder="Description..."
                  value={addPacketData.description}
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

export default AddPackage;
