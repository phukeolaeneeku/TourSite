import React, { useState, useEffect } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditRestaurant = () => {
  const { id } = useParams();
  const [hotelData, setHotelData] = useState({
    category: "",
    name: "",
    image: null,
    images: [],
    description: "",

    address: "",
  });
  const fetchHotelData = async () => {
    try {
      const response = await axios.get(
        `http://43.202.102.25:8000/tourapi/restaurant/detail/${id}/`
      );
      const { data } = response;
      // Update state with fetched data
      setHotelData({
        category: data.category,
        name: data.name,
        imageUrl: data.image,
        images: data.images.map((img) => ({ file: null, url: img })), // Assuming images array contains URLs
        description: data.description,
        address: data.address,
      });
    } catch (error) {
      console.error("Error fetching hotel data:", error);
      // Handle error (e.g., show error message)
    }
  };

  // Call fetchHotelData when component mounts or ID changes
  useEffect(() => {
    fetchHotelData();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setHotelData((prevData) => ({
      ...prevData,
      image: imageFile,
      imageUrl: imageUrl, // Add imageUrl to state
    }));
  };

  const handleImageChangeMultiple = (e) => {
    const newImages = Array.from(e.target.files).map((file) => ({
      file: file,
      url: URL.createObjectURL(file),
    }));
    setHotelData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const handleImageDelete = (index) => {
    const newImages = [...hotelData.images];
    newImages.splice(index, 1);
    setHotelData((prevData) => ({
      ...prevData,
      images: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for incomplete data
    if (
      !hotelData.category ||
      !hotelData.name ||
      !hotelData.image ||
      hotelData.images.length === 0 ||
      !hotelData.description ||
      !hotelData.address
    ) {
      // Display alert for incomplete data
      alert("Please complete all fields before submitting.");
      return; // Exit early if data is incomplete
    }

    try {
      const formData = new FormData();
      formData.append("category", hotelData.category);
      formData.append("name", hotelData.name);
      formData.append("description", hotelData.description);
      formData.append("address", hotelData.address);
      formData.append("image", hotelData.image);
      hotelData.images.forEach((image) => {
        formData.append("images", image.file); // Sending only file object, not URL
      });

      const response = await axios.patch(
        `http://43.202.102.25:8000/tourapi/restaurant/update/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Clear form data upon success
      setHotelData({
        category: "",
        name: "",
        image: null,
        images: [],
        description: "",
        address: "",
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Hotel data updated successfully!",
      });
      // Redirect to hotel details page or any other desired page
    } catch (error) {
      console.error("Error updating hotel data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update hotel data. Please try again later.",
      });
    }
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <h2>Edit restaurant</h2>
          <form className="edit-product-forms" onSubmit={handleSubmit}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  {hotelData.imageUrl && (
                    <img src={hotelData.imageUrl} alt="Hotel" />
                  )}
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
                  {hotelData.images.map((image, index) => (
                    <div className="gallery-box-view" key={index}>
                      <img src={image.url} alt="" />
                      <div
                        className="button"
                        onClick={() => handleImageDelete(index)}
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
                    onChange={handleImageChangeMultiple}
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
                  value={hotelData.category}
                  onChange={handleChange}
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
                  value={hotelData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Name..."
                />
              </div>

              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  value={hotelData.address}
                  onChange={handleChange}
                  type="text"
                  name="address"
                  placeholder="Address..."
                />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  value={hotelData.description}
                  onChange={handleChange}
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

export default EditRestaurant;
