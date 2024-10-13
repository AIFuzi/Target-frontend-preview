import {FC} from 'react';
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

const LoginPage: FC = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                LOGIN PAGE
            </p>
            <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => navigate('/register')}>go to register</Button>
                <Button variant="link" onClick={() => navigate('/')}>Back to home</Button>
            </div>
        </div>
    );
};

export default LoginPage;