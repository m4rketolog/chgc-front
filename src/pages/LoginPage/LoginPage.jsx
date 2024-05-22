import {Link} from "react-router-dom";
import './LoginPage.css'
const LoginPage = () => {

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
                    <p className={"login-form_title"}>Войти</p>
                    <form action="submit" className="login-form_form">
                        <input className={"form-holder"} type="text" placeholder={"Логин"}/>
                        <input className={"form-holder"} type="password" placeholder={"Пароль"}/>
                        <button className={"btn-submit"}>Войти</button>
                        <p className={"login-switch"}>Ещё нет аккаунта ? <Link className={"login-switch-link"} to={"/reg"}>Зарегестрироватся </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;