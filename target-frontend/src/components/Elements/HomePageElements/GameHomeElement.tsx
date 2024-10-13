import {FC} from 'react';

const GameHomeElement: FC<GameTestInterface> = (props)=> {
    return (
        <div className="shadow-blue-50 flex flex-col border-zinc-800 border-2 w-72 rounded-2xl ">
            <div style={{backgroundImage: `url('${props.previewLink}')`}}
                 className='rounded-t-2xl bg-cover bg-no-repeat h-48 w-48"'></div>
            <div className="m-2 ">
                <h1 className=" mt-4 line-clamp-1 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl opacity-85 mb-2 text-center">
                    {props.gameName}
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    ДАТА: {props.gameDate}
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    ПОЛИГОН: {props.polygonName}
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    РЕГИСТРАЦИЯ С {props.registerTime}
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    ЦЕНА: {props.price}
                </p>
            </div>

        </div>
    );
};

export default GameHomeElement;