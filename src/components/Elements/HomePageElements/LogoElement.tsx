import {FC} from 'react';
import {Button} from "@/components/ui/button.tsx";
import './style.css';
import {useNavigate} from "react-router-dom";

const LogoElement: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-16 opacity-75">
                    UFA
                </h3>
                <div>
                    <div className="circle-effect-container">
                        <div className="circle-effect"></div>
                        <div className="crosshair"></div>
                        <div className="center-sphere"></div>
                    </div>
                    <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-9xl opacity-75 mb-2">
                        TARGET
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground">
                    AIRSOFT NATION
                </p>
                <Button variant="outline" className="mt-6 text-lg py-8 px-16" onClick={() => navigate('/register')}>РЕГИСТРАЦИЯ</Button>
            </div>
        </div>
    );
};

export default LogoElement;