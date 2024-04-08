import React, { useState } from "react";
import "./css/profile.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import Header from "../header/Header";
import Menu from "../header/Menu";

const Profile = () => {
  const [imagePreview, setImagePreview] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <section>
        <div className="ProfilePage_edit">
          {/* <div className="boxgoback">
            <Link to="/more" className="box_iconBack">
              <MdArrowBack id="iconBack" />
            </Link>
          </div> */}
          <div className="box_name">
            <div className="box_image_profile">
              <label htmlFor="profileImage">
                <img src={imagePreview} alt="Profile Preview" />
                <p>
                  <FaCamera id="icon_camera" />
                </p>
              </label>

              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <p>Name: Sompong</p>
          </div>
          <div className="box_user_profile">
            <p>User</p>
            <FaRegUserCircle id="iconUser" />
          </div>
          <form className="container_form_profileedit">
            <input 
                type="email" 
                placeholder="humascot@gmail.com" 
                required 
            />
            <input
              type="text"
              placeholder=" Nickname "
              required
            />
            <input
              type="password"
              placeholder=" Password "
              required
            />
            <input
              type="password"
              placeholder=" .... "
              required
            />

            <button type="submit">Confirmation</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
