import {FC} from 'react';
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

const RegisterPage: FC = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                REGISTER PAGE
            </p>
            <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => navigate('/login')}>go to login page</Button>
                <Button variant="link" onClick={() => navigate('/')}>Back to home</Button>
            </div>
        </div>
    );
};

export default RegisterPage;