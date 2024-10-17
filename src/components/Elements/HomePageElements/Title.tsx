import {FC} from 'react';
import {Separator} from "@radix-ui/react-separator";

interface TitleProps {
    title: string;
}

const Title: FC<TitleProps> = ({title}) => {
    return (
        <div className="mt-10 mb-10">
            <Separator orientation="horizontal" className="bg-zinc-900 h-0.5"/>
            <h1 className=" mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl opacity-85 mb-10 text-center">
                {title.toUpperCase()}
            </h1>
        </div>

    );
};

export default Title;