import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdminMenu from "../adminMenu/AdminMenu";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const EditTour = () => {
  const { id } = useParams();
  const [tourData, setTourData] = useState({
    // category: "one_day",
    name: "",
    image: null,
    images: [],
    description: "",
    price: 0,
    address: "",
  });

  console.log(tourData.images)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setTourData((prevData) => ({
      ...prevData,
      image: imageFile,
      imageUrl: imageUrl,
    }));
  };

  const handleImageChangeMultiple = (e) => {
    const newImages = Array.from(e.target.files).map((file) => ({
      file: file,
      url: URL.createObjectURL(file),
    }));
    setTourData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const handleImageDelete = (index) => {
    const newImages = [...tourData.images];
    newImages.splice(index, 1);
    setTourData((prevData) => ({
      ...prevData,
      images: newImages,
    }));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      import.meta.env.VITE_API + `/tourapi/tour/detail/${id}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTourData({
          // category: result.category,
          name: result.name,
          price: result.price,
          image: result.image,
          images: result.images,
          description: result.description,
          address: result.address,
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      // formdata.append("category", "one_day");
      formdata.append("name", tourData.name);
      formdata.append("image", tourData.image);
      tourData.images.forEach((image) => {
        formdata.append("images", image.file);
      });
      formdata.append("description", tourData.description);
      formdata.append("price", tourData.price);
      formdata.append("address", tourData.address);

      console.log("formdata...", formdata)

      const requestOptions = {
        method: "PATCH",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        import.meta.env.VITE_API + `/tourapi/tour/update/${id}/`,
        requestOptions
      )
        .then((response) => response.text())
        // .then((result) => console.log(result))
        .catch((error) => console.error(error));

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Hotel data updated successfully!",
      });
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
          <h2>Edit Hotel</h2>
          <form className="edit-product-forms" onSubmit={handleSubmit}>
            <div className="input-img">
              <div className="box_description">
                <h3>Image</h3>
                <div className="images">
                  {tourData.imageUrl && (
                    <img src={tourData.imageUrl} alt="Hotel" />
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
                  {tourData.images.map((image, index) => (
                    <div className="gallery-box-view" key={index}>
                      <img src={image} alt="" />
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
                  <input
                    type="file"
                    id="fileInputMultiple"
                    style={{ display: "none" }}
                    onChange={handleImageChangeMultiple}
                    multiple
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
                  value={tourData.name}
                  onChange={handleChange}
                  placeholder="Name..."
                />
              </div>

              <div className="input">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={tourData.price}
                  onChange={handleChange}
                  placeholder="Price..."
                />
              </div>
              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={tourData.address}
                  onChange={handleChange}
                  placeholder="Address..."
                />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  rows="10"
                  name="description"
                  value={tourData.description}
                  onChange={handleChange}
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

export default EditTour;