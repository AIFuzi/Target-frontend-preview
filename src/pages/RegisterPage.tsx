import {FC} from 'react';
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Separator} from "@/components/ui/separator.tsx";

const RegisterPage: FC = () => {
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
        <div className="relative w-full h-screen mb-52 mt-20 lg:mb-0 lg:mt-0">
            <div className="relative h-screen flex items-center justify-center mt-10 lg:justify-start lg:mt-0">
                <div
                    className="bg-[url('/assets/authImage.jpg')] w-1/2 h-screen bg-center bg-no-repeat bg-cover hidden lg:block">
                    <div className="bg-black w-full h-full bg-opacity-50 backdrop-blur-sm"/>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center pr-5 pl-5 lg:pr-20 lg:pl-20">
                    <h1 className="scroll-m-20 text-2xl font-extrabold text-center tracking-tight lg:text-4xl opacity-85 mt-40 mb-10">
                        Регистрация
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
                                            <FormLabel>Email: <span className="text-red-600">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder=""/>
                                            </FormControl>
                                            <div className="lg:flex lg:space-x-5">
                                                <div className="w-full">
                                                    <FormLabel>Пароль <span
                                                        className="text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="" type="password"/>
                                                    </FormControl>
                                                </div>
                                                <div className="w-full">
                                                    <FormLabel>Повтор пароля <span
                                                        className="text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="" type="password"/>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="lg:flex lg:space-x-5">
                                                <div className="w-full">
                                                    <FormLabel>Имя <span className="text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder=""/>
                                                    </FormControl>
                                                </div>
                                                <div className="w-full">
                                                    <FormLabel>Фамилия <span
                                                        className="text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder=""/>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <FormLabel>Отчество</FormLabel>
                                            <FormControl>
                                                <Input placeholder=""/>
                                            </FormControl>
                                            <div className="lg:flex lg:space-x-5">
                                                <div className="w-full">
                                                    <FormLabel>Стаж игры <span
                                                        className="text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="" type="number"/>
                                                    </FormControl>
                                                </div>
                                                <div className="w-full">
                                                    <FormLabel>Позывной <span
                                                        className="text-red-600">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder=""/>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center space-x-3">
                                    <Checkbox/>
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Согласен с <Button variant="link" className="p-0"><span
                                        className="text-orange-500">правилами МГ и использования TARGET</span></Button>
                                    </label>
                                </div>
                                <Button type="submit" className="w-full">Зарегистрироваться</Button>
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Уже зарегестрированы? <Button variant="link" className="p-0"
                                                                  onClick={() => navigate('/login')}><span
                                    className="text-orange-500">Войти</span></Button>
                                </label>
                                <div className="flex flex-col items-center space-y-3">
                                    <Separator/>
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Или зарегестрироваться через
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

export default RegisterPage;