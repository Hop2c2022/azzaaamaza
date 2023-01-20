import { Header1 } from "../components/header1";
import { Link, useNavigate } from "react-router-dom";
import "../style/nevtreh.css";
import axios from "axios";
import { useState } from "react";

export const Burtguuleh = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();
  const Daragch = async () => {
    if (password === repeatPassword) {
      await axios.post("http://localhost:8000/SignUp", {
        password: password,
        email: email,
      });
      navigate("/login");
    } else {
      alert("2 password cin zuruud bnaa");
    }
  };

  // const postData = async () => {
  //   const POST = await axios.post(`http://localhost:8000/SignUp`, {
  //     email: email,
  //     password: password,
  //   });
  //   console.log(POST);
  //   if (email === "") {
  //     alert("its wokrgrengiousetukenihjlrtn");
  //   } else {
  //     console.log("nice");
  //   }
  //   if (password === "") {
  //     alert("no pass");
  //   } else {
  //     if (password !== repeatPassword) {
  //       alert("driuhgbr");
  //     } else {
  //       window.location.href = `http://localhost:3000`;
  //     }
  //   }
  // };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div>
        <Header1 />
      </div>
      <div className="d-flex flex-column">
        <div className=" d-flex justify-content-center align-items-center">
          <img
            className="mt-5"
            style={{ height: "100px" }}
            src="logo-default.svg"
            alt=""
          />
        </div>
        <div className="nevtreh d-flex justify-content-center align-items-center">
          Бүртгүүлэх
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            className="mb-2 mt-2"
            style={{
              marginRight: "50px",
              width: "300px",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "18px",
            }}
          >
            Цахим хаяг
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            type="email"
            placeholder="name@mail.domain"
            style={{ width: "350px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            className="tsahimHayag mb-2 mt-2"
            style={{ marginRight: "270px" }}
          >
            Нууц үг
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="email"
            type="password"
            placeholder="••••••••••"
            style={{ width: "350px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            className=" mb-2 mt-2"
            style={{
              marginRight: "55px",
              width: "300px",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "18px",
            }}
          >
            Нууц үгээ давтна уу?
          </div>
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="email"
            type="password"
            placeholder="••••••••••"
            style={{ width: "350px" }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={Daragch} className="nevtreh2 mt-4" id="dtouhn">
            Бүртгүүлэх
          </button>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-center footerLogin">
        <div className="footerN1">Made with ♥️ by Pinecone Academy</div>
        <div className="footerN2">©boginoo.io 2022</div>
      </div>
    </div>
  );
};
