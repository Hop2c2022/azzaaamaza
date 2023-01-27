import { Header1 } from "../components/header1";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../style/nevtreh.css";

export const Nevtreh = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const data = async () => {
    const result = await axios.post(`http://localhost:8000/Login`, {
      email: email,
      password: password,
    });

    if (result.token) {
      localStorage.setItem("token", result.token);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div>
        <Header1 />
      </div>
      <div className="d-flex flex-column">
        <div className=" d-flex justify-content-center align-items-center">
          <img
            class="mt-5"
            style={{ height: "100px" }}
            src="logo-default.svg"
            alt=""
          />
        </div>
        <div class="nevtreh d-flex justify-content-center align-items-center">
          Нэвтрэх
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div
            class="mb-2 mt-2"
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
            class="email"
            type="email"
            placeholder="name@mail.domain"
            style={{ width: "350px" }}
          />
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="tsahimHayag mb-2 mt-2" style={{ marginRight: "260px" }}>
            Нууц үг
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            class="email"
            type="password"
            placeholder="••••••••••"
            style={{ width: "350px" }}
          />
        </div>
        <div
          class="d-flex flex-row justify-content-center align-items-center"
          style={{}}
        >
          <div
            class="d-flex flex-row justify-content-center mt-3"
            style={{ marginRight: "90px" }}
          >
            <label class="container">
              <input type="checkbox" />
              <span class="nmgSana ">Намайг сана</span>
            </label>
          </div>
          <Link to="/ForgotPass">
            <div class="nuutsUg mt-4">Нууц үгээ мартсан</div>
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button class="nevtreh2 mt-4" onClick={() => data()}>
            НЭВТРЭХ
          </button>
        </div>
        <Link to="/SignUp">
          <div class="shine mt-4 d-flex justify-content-center">
            Шинэ хэрэглэгч бол энд дарна уу?
          </div>
        </Link>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-center footerLogin">
        <div class="footerN1">Made with ♥️ by Pinecone Academy</div>
        <div class="footerN2">©boginoo.io 2022</div>
      </div>
    </div>
  );
};
