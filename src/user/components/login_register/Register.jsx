import { useState, useEffect } from "react";
import "./css/register.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const userType = location.state;

  const [timer, setTimer] = useState({
    minute: 0,
    second: 0,
  });
  const { minute, second } = timer;
  const [data, setData] = useState({
    email: "",
    code: "",
    password: "",
    password2: "",
    nickname: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const signUp = (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/users/signup/",
      // url: 'http://127.0.0.1:8000/users/signup/',
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (second > 0) {
        setTimer({
          ...timer,
          second: second - 1,
        });
      }
      if (second === 0) {
        if (minute === 0) {
          clearInterval(countdown);
        } else {
          setTimer({
            minute: minute - 1,
            second: 59,
          });
        }
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [second, minute, timer]);

  return (
    <>
      <Header />
      <Menu />
      <section>
        <div className="box_forgot">
          <h2>User registration</h2>
          <div className="title">
            You are in the process of signing up as a user!
          </div>
          <form className="container_form_user" onSubmit={signUp}>
            <div className="box_title">Enter basic information</div>
            <div className="container_form_user2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={data.email}
                required
              />
              {minute > 0 || second > 0 ? (
                <div id="email_send_btn" className="verification">
                  {minute < 10 ? `0${minute}` : minute}:
                  {second < 10 ? `0${second}` : second}
                </div>
              ) : (
                <div
                  onClick={() => {
                    if (data.email.length > 0) {
                      setTimer({ minute: 3, second: 0 });
                      const config = {
                        method: "post",
                        maxBodyLength: Infinity,
                        url: `${import.meta.env.VITE_API}/users/send-email`,
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data: data,
                      };

                      axios
                        .request(config)
                        .then((response) => {
                          console.log(JSON.stringify(response.data));
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    } else {
                      setErrorText("Please enter your e-mail.");
                    }
                  }}
                  id="email_send_btn"
                  className="verification"
                >
                  Verify
                </div>
              )}
            </div>
            <input
              type="text"
              name="code"
              onChange={onChange}
              value={data.code}
              placeholder="Certication Number"
              required
            />
            <input
              type="text"
              name="nickname"
              onChange={onChange}
              value={data.nickname}
              placeholder="Nickname (maximum 10 characters)"
              required
            />
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={data.password}
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password2"
              onChange={onChange}
              value={data.password2}
              placeholder="Confirm password"
              required
            />
            <button type="submit">Register</button>
            <div className="googlebtn_btn">
              <p className="box_dont">
                Already have an acount?
                <Link to={"/login"} className="loginmoreLink">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
