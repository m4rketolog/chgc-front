import {Routes, Route} from "react-router-dom"
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import RegisterPage from '../pages/LoginPage/RegisterPage.jsx'
export default () => {
    return (
        <Routes>
            <Route path={"/"} element={<LoginPage/>} />
            <Route path={"/login"} element={<LoginPage/>} />
            <Route path={"/reg"} element={<RegisterPage/>} />
        </Routes>
    )
}