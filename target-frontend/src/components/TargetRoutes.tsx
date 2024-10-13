import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import Navbar from "./Navbar.tsx";

const TargetRoutes: FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default TargetRoutes;