import React, { useState, useEffect } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null); // URL for the existing main image
  const [newImageFile, setNewImageFile] = useState(null); // File for the new main image
  const [images, setImages] = useState([]); // URLs for the existing images
  const [newImageFiles, setNewImageFiles] = useState([]); // Files for the new images

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/tourapi/restaurant/detail/${id}/`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setName(response.data.name);
        setAddress(response.data.address);
        setCategory(response.data.category);
        setDescription(response.data.description);
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

  const updateRestaurant = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("category", category);
    formData.append("description", description);

    if (newImageFile) {
      formData.append("image", newImageFile); // Append new main image if it exists
    }

    if (newImageFiles) {
      newImageFiles.forEach((file, i) => formData.append(`images`, file)); // Append new images
    }

    try {
      await axios.patch(
        import.meta.env.VITE_API + `/tourapi/restaurant/update/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.fire({
        title: "Success!",
        text: "Hotel updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Clear the form data
        setName("");
        setCategory("");
        setDescription("");
        setAddress("");
        setImage(null);
        setNewImageFile(null);
        setImages([]);
        setNewImageFiles([]);
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error updating the hotel.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(
        "There was an error updating the hotel:",
        error.response.data
      );
    }
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <h2>Edit restaurant</h2>
          <form className="edit-product-forms" onSubmit={updateRestaurant}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  <img src={image} alt="Selected" />

                  <div
                    className="box_chooses_image"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Choose image
                  </div>
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
                  {images.map((img, index) => (
                    <div className="gallery-box-view" key={index}>
                      <img src={img} alt="" />
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
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select category</option>
                  <option value="pakse">Pakse</option>
                  <option value="paksong">Paksong</option>
                  <option value="siphadone">Siphadone</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Name..."
                />
              </div>

              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  name="address"
                  placeholder="Address..."
                />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  rows="10"
                  name="description"
                  placeholder="Description..."
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

export default EditRestaurant;
