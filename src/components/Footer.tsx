import{FC} from 'react';
import {Separator} from "@radix-ui/react-separator";

const Footer: FC = () => {
    return (
        <footer className="h-[200px]">
            <Separator orientation="horizontal" className="bg-zinc-900 h-0.5"/>
            <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 w-1/2 lg:w-2/3 mt-5 ml-14">
                ©2024 “TARGET” by "SQUADRON" Все права на материалы, размещенные на сайте, защищены в соответствии с
                российским
                законодательством об авторском праве. При любом использовании материалов сайта гиперссылка на НАЗВАНИЕ
                САЙТА обязательна.
            </h3>
        </footer>
    );
};

export default Footer;