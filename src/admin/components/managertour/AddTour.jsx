import React, { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./css/addTour.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

const AddTour = () => {
  const [addTourData, setAddTourData] = useState({
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
    setAddTourData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setAddTourData((prevState) => ({
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
      setAddTourData((prevState) => ({
        ...prevState,
        images: prevState.images.concat(filesArray),
      }));

      e.target.value = null;
    }
  };

  const removeImage = (index) => {
    const newImages = addTourData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setAddTourData((prevState) => ({
      ...prevState,
      images: newImages,
    }));
    setImagePreviews(newPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", addTourData.category);
    formData.append("name", addTourData.name);
    formData.append("price", addTourData.price);
    formData.append("address", addTourData.address);
    formData.append("description", addTourData.description);
    formData.append("image", addTourData.image);
    addTourData.images.forEach((img, i) => {
      formData.append(`images[${i}]`, img);
    });

    const config = {
      method: "post",
      url: import.meta.env.VITE_API + `/tourapi/tour/create/`,
      
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setAddTourData({
          category: "",
          name: "",
          price: "",
          address: "",
          description: "",
          image: null,
          images: [],
        });

        setSelectedImage(null)
        setImagePreviews([])
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
          <h2>Add Tour</h2>
          <form className="edit-product-forms" onSubmit={handleSubmit}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  <img src={selectedImage} alt="Selected" />
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
                  <input
                    type="file"
                    id="fileInputMultiple"
                    style={{ display: "none" }}
                    onChange={handleMultipleImageChange}
                    multiple
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <div className="input">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={addTourData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="one_day">One day</option>
                  <option value="half_day">Half day</option>
                  <option value="night_tour">Night tour</option>
                  <option value="golf">Golf</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={addTourData.name}
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
                  value={addTourData.price}
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
                  value={addTourData.address}
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
                  value={addTourData.description}
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

export default AddTour;
