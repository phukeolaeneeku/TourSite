import React from "react";
import "./accountAdmin.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";

function AccountAdmin() {
  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="box_addAdmin">
          <form>
            <div className="addAdminForm">
              <div className="boxhead_subminandtitle">
                <h2 className="titleaddmin">Admin Account</h2>
                <div className="btn_boxAcouunt">
                  <button type="submit" className="submit_delete">
                    Delete
                  </button>
                  <button type="submit" className="submit_add">
                    Edit
                  </button>
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">
                  First name:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="fname"
                    className="input"
                    placeholder="Fist name..."
                  />
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">
                  Nickname:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="nickname"
                    className="input"
                    placeholder="Nickname..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="email" className="titlelabel">
                  Email:
                </label>
                <div className="boxiconnandinput">
                  <MdOutlineEmail className="iconinput" />
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="Email address..."
                  />
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="pass" className="titlelabel">
                  Password:
                </label>
                <div className="boxiconnandinput">
                  <IoKeyOutline className="iconinput" />
                  <input
                    type="text"
                    id="pass"
                    className="input"
                    placeholder="Password..."
                  />
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="adminImage" className="titlelabel">
                  Profile image:
                </label>
                <div className="boxiconnandinput">
                  <CiImageOn className="iconinput" />
                  <input type="file" className="input" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AccountAdmin;
