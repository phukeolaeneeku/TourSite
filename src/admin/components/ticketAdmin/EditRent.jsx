import React, { useEffect, useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditRent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [carnumber, setCarnumber] = useState("");
  const [image, setImage] = useState(null); // URL for the existing main image
  const [newImageFile, setNewImageFile] = useState(null); // File for the new main image
  const [images, setImages] = useState([]); // URLs for the existing images
  const [newImageFiles, setNewImageFiles] = useState([]); // Files for the new images

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/tourapi/ticket/detail/${id}/`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setName(response.data.name);
        setAddress(response.data.address);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setBrand(response.data.brand);
        setCarnumber(response.data.carnumber);
        setImage(response.data.image);
        setImages(response.data.images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImageFile(file); // Set the file for new image
      setImage(URL.createObjectURL(file)); // Set the preview for the new image
    }
  };

  const handleMultipleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setNewImageFiles((prevFiles) => [...prevFiles, ...files]); // Add files of new images
    setImages((prevImages) => [...prevImages, ...newImages]); // Add previews of new images
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setNewImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove the file from the list
  };

  const updateTicket = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("carnumber", carnumber);

    if (newImageFile) {
      formData.append("image", newImageFile); // Append new main image if it exists
    }

    if (newImageFiles) {
      newImageFiles.forEach((file, i) => formData.append(`images`, file)); // Append new images
    }

    try {
      await axios.patch(
        import.meta.env.VITE_API + `/tourapi/ticket/update/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log("Guide updated successfully");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Update  successfully!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete tour. Please try again later.",
      });
    }
  };

  console.log("images:", images);
  console.log("newImageFiles:", newImageFiles);
  // console.log("images:", images);

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <h2> Edit rent car</h2>
          <form className="edit-product-forms" onSubmit={updateTicket}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  {/* Display the selected image, or a placeholder if not selected */}
                  <img src={image} alt="Selected" />
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
                    onChange={handleMultipleImagesChange}
                    multiple // Allow multiple file selection
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="brand">Brand:</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand..."
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="number">Car number:</label>
                <input
                  type="text"
                  name="carnumber"
                  placeholder="Car number..."
                  value={carnumber}
                  onChange={(e) => setCarnumber(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  rows="10"
                  name="description"
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="submit1">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditRent;
