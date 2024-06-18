import {Link} from "react-router-dom";
import {sendRequest} from "../../helpers/sendRequest.js";
import './LoginPage.css'
import {API} from "../../constants/const.js";
import {useState} from "react";

const LoginPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginForm = async (event) => {
        event.preventDefault();
        return await sendRequest(`${API}login`, "POST", {
            body: JSON.stringify({Username: login, Password: password})
        }, )
            .then((rep)=>console.log(rep.data, "\n", rep.message))
    }

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
                    <form action="submit" onSubmit={handleLoginForm} className="login-form_form">
                        <input className={"form-holder"} onChange={(e) => setLogin(e.target.value)} type="text" placeholder={"Логин"}/>
                        <input className={"form-holder"} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Пароль"}/>
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