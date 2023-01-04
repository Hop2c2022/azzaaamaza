import '../style/header.css'
import Link from 'react-dom'
export const Header = () => {
    return(
        <div class = "d-flex flex-row justify-content-end mt-5 me-5">
            <div class="header1 me-3 mt-2" >Хэрхэн ажилдаг вэ?</div>
            <Link to="/nevtreh">
                <button class = "header2">НЭВТРЭХ</button>
            </Link>
        </div>
    )

}