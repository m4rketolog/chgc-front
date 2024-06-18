import './LoginPage.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {sendRequest} from "../../helpers/sendRequest.js";
import {API} from "../../constants/const.js";
const RegisterPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegisterForm = async (event) => {
        event.preventDefault();
        return await sendRequest(`${API}user/register`, "POST", {
            body: JSON.stringify({Username: login, Password: password, Email: email})
        }, )
            .then((rep)=>{
                if(rep) {
                    navigate("/storage")
                }})
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
                    <p className={"login-form_title"}>Регистрация</p>
                    <form onSubmit={handleRegisterForm} action="submit" className="login-form_form">
                        <input className={"form-holder"} onChange={(e) => setLogin(e.target.value)} type="text" placeholder={"Логин"}/>
                        <input className={"form-holder"} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={"Почта"}/>
                        <input className={"form-holder"} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Пароль"}/>
                        <button className={"btn-submit"}>Зарегистрироватся</button>
                        <p className={"login-switch"}>Уже есть аккаунт ? <Link className={"login-switch-link"} to={"/login"}>Войти</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;