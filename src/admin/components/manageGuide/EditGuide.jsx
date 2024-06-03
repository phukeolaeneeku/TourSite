import React, { useState, useEffect } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditGuide = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // URL for the existing main image
  const [newImageFile, setNewImageFile] = useState(null); // File for the new main image
  const [images, setImages] = useState([]); // URLs for the existing images
  const [newImageFiles, setNewImageFiles] = useState([]); // Files for the new images

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/tourapi/guide/detail/${id}/`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setName(response.data.name);
        setCategory(response.data.category);
        setDescription(response.data.description);
        setImage(response.data.image);
        setImages(response.data.images);
        setNewImageFiles(response.data.images);
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

  const updateGuide = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
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
        import.meta.env.VITE_API + `/tourapi/guide/update/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      Swal.fire({
        title: "Success!",
        text: "Guide updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        console.log("Guide updated successfully");
        // Optionally, you can clear form data or perform other actions here
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error updating the guide.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("There was an error updating the guide:", error.response.data);
    }
  };

  console.log("images:", images);
  console.log("newImageFiles:", newImageFiles);
  // console.log("images:", images);

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_addguide">
          <h2>Edit Guide</h2>
          <form className="edit-guide-forms" onSubmit={updateGuide}>
            <div className="input-img">
              <div className="box_description_guide">
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
                  <input
                    type="file"
                    id="fileInputMultiple"
                    style={{ display: "none" }}
                    multiple
                    onChange={handleMultipleImagesChange}
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <div className="input">
                <label htmlFor="name">Name Guide</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="category">Guide's Nationality</label>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={category}>{category}</option>
                  <option value="Lao">Lao</option>
                  <option value="Korea">Korea</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
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

export default EditGuide;
