import "../style/header1.css";
import Link from "react-dom";
export const Header1 = () => {
  return (
    <div class="d-flex flex-row justify-content-end mt-5 me-5">
      <Link to="/howwework">
        <div class="header1 me-3 mt-2">Хэрхэн ажилдаг вэ?</div>
      </Link>
    </div>
  );
};
