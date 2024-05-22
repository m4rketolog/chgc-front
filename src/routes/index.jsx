import {Routes, Route} from "react-router-dom"
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import RegisterPage from '../pages/LoginPage/RegisterPage.jsx'
import MainStorage from "../pages/MainStorage/MainStorage.jsx";
export default () => {
    return (
        <Routes>
            <Route path={"/"} element={<LoginPage/>} />
            <Route path={"/login"} element={<LoginPage/>} />
            <Route path={"/reg"} element={<RegisterPage/>} />
            <Route path={"/storage"} element={<MainStorage/>}/>

        </Routes>
    )
}