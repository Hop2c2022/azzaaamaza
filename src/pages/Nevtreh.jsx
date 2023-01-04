import { Header1 } from "../components/header1"
import { Footer } from "../components/footer"
import { Header2 } from "../components/header2"
import '../style/nevtreh.css'
export const Nevtreh = () => {
    return(
        <div className="d-flex flex-column justify-content-center">
            <div><Header1/></div>
            <div className="d-flex flex-column">
                <div>
                    <img src="logo-default.svg" alt="" />
                </div>
                <div class = "nevtreh">Нэвтрэх</div>
                <div class = "d-flex flex-column">
                    <div class = "tsahimHayag">Цахим хаяг</div>
                    <input class="email" type="email" placeholder="name@mail.domain"/>
                </div>
                <div class = "d-flex flex-column">
                    <div class = "tsahimHayag">Нууц үг</div>
                    <input class="email" type="password" placeholder="••••••••••" />
                </div>
                <div class = "d-flex flex-row">
                    <div class = "d-flex flex-row">
                        <label class = "container">
                            <input type="checkbox" checked = "checked" />
                            <span class = "checkmark"></span>
                        </label>
                        <div class="nmgSana">Намайг сана</div>
                    </div>
                    <div class = "nuutsUg">Нууц үгээ мартсан</div>
                </div>
                <div>
                    <Header2/>
                </div>
                <div class = "shine">Шинэ хэрэглэгч бол энд дарна уу?</div>
            </div>
            <div><Footer/></div>
        </div>
    )
}