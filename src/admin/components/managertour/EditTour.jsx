import React, { useEffect, useState, useRef } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./css/addTour.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Input = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="input">
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <input
      type={type}
      name={label.toLowerCase()}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const Textarea = ({ label, value, onChange, placeholder, rows = 10 }) => (
  <div className="input">
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <textarea
      rows={rows}
      name={label.toLowerCase()}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

const EditTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const multipleFileInputRef = useRef(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/tourapi/tour/detail/${id}/`)
      .then((response) => {
        const data = response.data;
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setAddress(data.address);
        setSelectedImage(data.image);
        setImage(data.image);
        setImages(data.images || []);
        setImagePreviews(data.images ? data.images.map((img) => img.url) : []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImage(file);
    }
  };

  const handleMultipleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const previewsArray = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...previewsArray]);
      setImages((prevImages) => [...prevImages, ...filesArray]);
      e.target.value = null; // Clear the file input
    }
  };

  const removeImage = (index) => {
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("address", address);
    if (image instanceof File) {
      data.append("image", image);
    }
    images.forEach((img, i) => {
      data.append(`images[${i}]`, img);
    });

    axios
      .patch(`${import.meta.env.VITE_API}/tourapi/tour/update/${id}/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
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
          <h2>Edit tour</h2>
          <form className="edit-product-forms" onSubmit={handleSubmit}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  {selectedImage && <img src={selectedImage} alt="Selected" />}
                  <div
                    className="box_chooses_image"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Choose image
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="gallery">
                <h3>View More Images</h3>
                <div className="gallery-box">
                  {imagePreviews.map((preview, index) => (
                    <div className="gallery-box-view" key={index}>
                      <img src={preview} alt={`Preview ${index}`} />
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
                    onClick={() => multipleFileInputRef.current.click()}
                  >
                    +
                  </div>
                  <input
                    type="file"
                    ref={multipleFileInputRef}
                    style={{ display: "none" }}
                    onChange={handleMultipleImageChange}
                    multiple
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name..."
              />
              <Input
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price..."
              />
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address..."
              />
              <Textarea
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description..."
              />
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

export default EditTour;
