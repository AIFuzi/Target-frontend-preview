import {FC} from 'react';
// import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import './styles/Auth.css'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Separator} from "@/components/ui/separator.tsx";

const LoginPage: FC = () => {
    const navigate = useNavigate()

    const form = useForm();

    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="relative w-full h-screen mb-32 lg:mb-0">
            <div className="relative h-screen flex items-center justify-center mt-10 lg:justify-start lg:mt-0">
                <div
                    className="bg-[url('/assets/authImage2.jpg')] w-1/2 h-screen bg-center bg-no-repeat bg-cover hidden lg:block">
                    <div className="bg-black w-full h-full bg-opacity-50 backdrop-blur-sm"/>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center pr-5 pl-5 lg:pr-20 lg:pl-20">
                    <h1 className="scroll-m-20 text-2xl font-extrabold text-center tracking-tight lg:text-4xl opacity-85 mt-10 mb-10">
                        Авторизация
                    </h1>
                    <div className="border-zinc-900 border-2 p-5 rounded-xl">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Логин <span className="text-red-600">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder=""/>
                                            </FormControl>
                                            <FormLabel>Пароль <span className="text-red-600">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="" type="password"/>
                                            </FormControl>
                                            <FormLabel>Повтор пароля <span className="text-red-600">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="" type="password"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full">Войти</Button>
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Еще нет аккаунта? <Button variant="link" className="p-0"
                                                              onClick={() => navigate('/register')}><span
                                    className="text-orange-500">Зарегистрироваться</span></Button>
                                </label>
                                <div className="flex flex-col items-center space-y-3">
                                    <Separator/>
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Или войти через
                                    </label>
                                    <Button><img alt="" src="VK.svg" width="100"/></Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;