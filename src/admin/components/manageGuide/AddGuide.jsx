import React, { useEffect, useState } from "react";
import "./css/addguide.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

const AddGuide = () => {
  const [datas, setDatas] = useState({
    category: "",
    name: "",
    description: "",
    image: null,
    images: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setDatas((prevState) => ({
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
      setDatas((prevState) => ({
        ...prevState,
        images: prevState.images.concat(filesArray),
      }));

      e.target.value = null;
    }
  };

  const removeImage = (index) => {
    const newImages = datas.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setDatas((prevState) => ({
      ...prevState,
      images: newImages,
    }));
    setImagePreviews(newPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (datas.name === "") {
      alert("Please enter guide name!");
      return;
    }

    if (datas.category === "") {
      alert("Please choice guide nationality!");
      return;
    }

    if (datas.description === "") {
      alert("Please enter the description!");
      return;
    }

    if (datas.image === null) {
      alert("Please choice guide image!");
      return;
    }

    if (datas.images.length === 0) {
      alert("Please choice more images!");
      return;
    }

    const formData = new FormData();
    formData.append("category", datas.category);
    formData.append("name", datas.name);
    formData.append("description", datas.description);
    formData.append("image", datas.image);
    datas.images.forEach((img, i) => {
      formData.append(`images[${i}]`, img);
    });

    const config = {
      method: "post",
      url: import.meta.env.VITE_API + `/tourapi/guide/create/`,

      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setDatas({
          category: "",
          name: "",
          description: "",
          image: null,
          images: [],
        });

        setSelectedImage(null);
        setImagePreviews([]);
        alert("Success!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_addguide">
          <h2>Guide</h2>
          <form className="edit-guide-forms" onSubmit={handleSubmit}>
            <div className="input-img">
              <div className="box_description_guide">
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
                <label htmlFor="name">Name Guide</label>
                <input
                  type="text"
                  name="name"
                  value={datas.name}
                  placeholder="Name..."
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <label htmlFor="category">Guide's Nationality</label>
                <select
                  name="category"
                  value={datas.category}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="Lao">Lao</option>
                  <option value="Korea">Korea</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  rows="10"
                  name="description"
                  placeholder="Description..."
                  value={datas.description}
                  onChange={handleChange}
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

export default AddGuide;
