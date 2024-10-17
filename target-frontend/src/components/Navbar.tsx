import {FC} from "react";
import {Button} from "./ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Separator} from "@radix-ui/react-separator";
import NavigateButton from "@/components/NavigateButton.tsx";

const Navbar: FC = () => {
    const navigate = useNavigate()
    
    return (
        <div className="fixed top-0 w-full z-40">
            <div className="h-14 flex items-center backdrop-blur-sm bg-zinc-950/70">
                <div className="container">
                    <div className="flex justify-between">
                        <div>
                            <Button variant="link" onClick={() => navigate('/')}>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    TARGET
                                </h4>
                            </Button>
                        </div>
                        <div className="hidden lg:flex space-x-4">
                            <ul className="flex">
                                <li><Button variant="link">Календарь игр</Button></li>
                                <li><Button variant="link">Команды</Button></li>
                                <li><Button variant="link">Прокат и корпоратив</Button></li>
                                <li><Button variant="link">Правила МГ</Button></li>
                                <li><Button variant="link">Контакты</Button></li>
                                <li><Button variant="link">BUG TRACKER</Button></li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex space-x-2">
                            <Button variant="outline" onClick={() => navigate('/login')} className="mr-1">Войти</Button>
                            <Button variant="outline" onClick={() => navigate('/register')}>Регистрация</Button>
                        </div>
                        <div className="lg:hidden flex">
                            <Sheet>
                                <SheetTrigger>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d={"M4 6h16M4 12h16M4 18h16"}></path>
                                    </svg>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>TARGET</SheetTitle>
                                    </SheetHeader>
                                    <div>
                                        <ul className="p-2 space-y-2">
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    Войти
                                                </NavigateButton>
                                            </li>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="register">
                                                    Регистрация
                                                </NavigateButton>
                                            </li>
                                            <Separator orientation="horizontal" className="bg-zinc-900 h-0.5"/>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    Календарь игр
                                                </NavigateButton>
                                            </li>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    Команды
                                                </NavigateButton>
                                            </li>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    Прокат и корпоратив
                                                </NavigateButton>
                                            </li>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    Правила МГ
                                                </NavigateButton>
                                            </li>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    Контакты
                                                </NavigateButton>
                                            </li>
                                            <li>
                                                <NavigateButton isMenuButton={true} variant="ghost"
                                                                navigateLink="login">
                                                    BUG TRACKER
                                                </NavigateButton>
                                            </li>
                                        </ul>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;