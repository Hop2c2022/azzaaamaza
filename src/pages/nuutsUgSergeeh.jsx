import { Header1 } from "../components/header1";
import { Footer } from "../components/footer";
import "../style/nuutsUg.css";
export const ForgotPass = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div>
        <Header1 />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center">
          <img
            class="mt-5"
            style={{ height: "100px" }}
            src="logo-default.svg"
            alt=""
          />
        </div>
        <div class="NuutsUg d-flex justify-content-center align-items-center">
          Нууц үг сэргээх
        </div>
        <div class="Text d-flex justify-content-center align-items-center">
          Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div
            class="mb-2 mt-4"
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
            class="email"
            type="email"
            placeholder="name@mail.domain"
            style={{ width: "350px" }}
          />
        </div>
        <div>
          <button class="ilgeeh mt-4">Илгээх</button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
