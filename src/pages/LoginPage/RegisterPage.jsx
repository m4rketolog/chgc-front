import './LoginPage.css'
import {Link} from "react-router-dom";
const RegisterPage = () => {

    return (
        <div className={"login"}>
            <div className={"login-about"}>
                <p className={"login-about_title"}>CH_G_Company</p>
                <div className="about-img">
                    <img src={'./public/img/vortex.jpg'} alt='vortex-img'/>
                </div>
            </div>
            <div className={"login-form"}>
                <div className="form-container">
                    <p className={"login-form_title"}>Регестрация</p>
                    <form action="submit" className="login-form_form">
                        <input className={"form-holder"} type="text" placeholder={"Логин"}/>
                        <input className={"form-holder"} type="text" placeholder={"Почта"}/>
                        <input className={"form-holder"} type="password" placeholder={"Пароль"}/>
                        <button className={"btn-submit"}>Зарегестрироватся</button>
                        <p className={"login-switch"}>Уже есть аккаунт ? <Link className={"login-switch-link"} to={"/login"}>Войти</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;