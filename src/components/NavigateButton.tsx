import {FC, ReactNode} from 'react';
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

interface NavigateButtonProps {
    children: ReactNode;
    isMenuButton: boolean;
    variant: string;
    navigateLink: string;
}

const NavigateButton: FC<NavigateButtonProps> = ({children, isMenuButton, variant, navigateLink}) => {
    const navigate = useNavigate();

    return (
        <Button className={`${isMenuButton && 'w-full flex justify-start'}`} variant={variant}
                onClick={() => navigate(`/${navigateLink}`)}>
            {children}
        </Button>
    );
};

export default NavigateButton;