import { Header } from "../components/header";
import { Main } from "../components/dundHeseg";
import { Footer } from "../components/footer";
import { useContext } from "react";
import { useAuthContext } from "../themeContext";
export const Home = () => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    window.location = "/login";
  }

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
