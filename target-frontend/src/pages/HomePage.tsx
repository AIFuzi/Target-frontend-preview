import {FC, useState} from 'react';
import LogoElement from "@/components/Elements/HomePageElements/LogoElement.tsx";
import Title from "@/components/Elements/HomePageElements/Title.tsx";
import GameHomeElement from "@/components/Elements/HomePageElements/GameHomeElement.tsx";
import ImageInfo from "@/components/Elements/HomePageElements/ImageInfo.tsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";

const HomePage: FC = () => {
    const [games] = useState<GameTestInterface[]>([
        {
            previewLink: 'https://cdn.pixabay.com/photo/2019/09/23/12/47/airsoft-4498480_1280.jpg',
            gameName: 'Поиск сосиски',
            gameDate: '12.13.2025',
            gameType: 'ВОСКРЕСКА',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
        {
            previewLink: 'https://gunfire.com/data/include/cms/BLOG-GUNFIRE/Co-to-ASG/gracz-na-dworze.webp',
            gameName: 'Поедание соски',
            gameDate: 'da',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 5550
        },
        {
            previewLink: 'https://i1.sndcdn.com/artworks-VmgonnnAzPa2OVNQ-Duc5tQ-t500x500.jpg',
            gameName: 'Неебически длинное название игры для теста переноса строки',
            gameDate: 'da',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
        {
            previewLink: 'https://i1.sndcdn.com/artworks-VmgonnnAzPa2OVNQ-Duc5tQ-t500x500.jpg',
            gameName: 'Неебически длинное название игры для теста переноса строки',
            gameDate: '17/04/3015',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
        {
            previewLink: 'https://i1.sndcdn.com/artworks-VmgonnnAzPa2OVNQ-Duc5tQ-t500x500.jpg',
            gameName: 'Неебически длинное название игры для теста переноса строки',
            gameDate: '17/04/3015',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
        {
            previewLink: 'https://i1.sndcdn.com/artworks-VmgonnnAzPa2OVNQ-Duc5tQ-t500x500.jpg',
            gameName: 'Неебически длинное название игры для теста переноса строки',
            gameDate: '17/04/3015',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
        {
            previewLink: 'https://i1.sndcdn.com/artworks-VmgonnnAzPa2OVNQ-Duc5tQ-t500x500.jpg',
            gameName: 'Неебически длинное название игры для теста переноса строки',
            gameDate: '17/04/3015',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
        {
            previewLink: 'https://i1.sndcdn.com/artworks-VmgonnnAzPa2OVNQ-Duc5tQ-t500x500.jpg',
            gameName: 'Неебически длинное название игры для теста переноса строки',
            gameDate: '17/04/3015',
            gameType: 'Pedulovo',
            polygonName: 'Forest',
            registerTime: '11:33',
            price: 550
        },
    ])

    return (
        <div>
            <div>
                <div
                    className="absolute top-0 left-0 w-full h-screen bg-[url('/assets/back.png')] bg-no-repeat bg-center bg-cover z-[-1]">
                </div>
                <LogoElement/>
            </div>
            <div className="container">
                <Title title="ПоСлЕдНиЕ игры"/>
                <ScrollArea className="h-[450px]">
                    <div className="flex justify-between overflow-auto space-x-16">
                        {games.map((game) => (
                            <GameHomeElement
                                previewLink={game.previewLink}
                                gameName={game.gameName}
                                gameType={game.gameType}
                                gameDate={game.gameDate}
                                polygonName={game.polygonName}
                                registerTime={game.registerTime}
                                price={game.price}
                            />
                        ))}

                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <div className="container mt-10"><Title title="краткая информация"/></div>
            <ImageInfo ImageURL="image1.jpg">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl opacity-85 mb-2">
                    Что такое Страйкбол
                </h1>
                <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 lg:text-2xl">
                    Страйкбол - популярная игра, в которую вовлечены многие страны. Это захватывающий спорт, который
                    требует внимания, умения строить стратегию и тактику, учит моментально принимать решения, думать и
                    быстро реагировать на изменения на поле боя.
                </h3>
                <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 lg:text-2xl">
                    Отличный вариант для весёлого времяпрепровождения в компании. Подходит для тех, кто любит активный
                    отдых, ценит оружие и всю военную тематику.
                </h3>
            </ImageInfo>
            <div className="container mt-10"><Title title=""/></div>
            <ImageInfo ImageURL="image2.png">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl opacity-85 mb-2">
                    Немного истории
                </h1>
                <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 lg:text-2xl">
                    Страйкбол пришёл к нам из Японии. Именно там находится его истинная родина. Впервые в России начали
                    говорить о страйкболе в 1996 году. Уже в 1997 он официально пришёл в страну. На тот момент игра
                    стала одним из видов игр с экипировкой мягкого класса пневматического вооружения. Постепенно
                    страйкбол начал получать всё большее распространение по стране. Начали открываться клубы, и
                    формироваться объединения. В октябре 2022 года Министерство Спорта Российской Федерации утвердил
                    федеральный стандарт спортивной подготовки по виду спорта "страйкбол"
                    (Приказ Минспорта России от 31.10.2022 N 874 "Об утверждении федерального стандарта спортивной
                    подготовки по виду спорта "страйкбол")
                </h3>
            </ImageInfo>
            <div className="container mt-10"><Title title=""/></div>
            <ImageInfo ImageURL="image3.png">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl opacity-85 mb-2">
                    Кто мы и какие цели преследуем?
                </h1>
                <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 lg:text-2xl">
                    Мы, Организаторская Группа SQUADRON, преследуем главную цель - развитие страйкбола в регионе,
                    создавая качественные игры с хорошим сервисом, интересным сюжетом и антуражем. Мы занимаемся
                    проведением как обычных воскресних игр, так и крупных проектов и соревнований в стиле экшен штурма.
                </h3>
                <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 lg:text-2xl">
                    Также проводим закрытые приватные игры и корпоративы.
                </h3>
                <h3 className="scroll-m-20 text-l tracking-tight mb-16 opacity-85 lg:text-2xl">
                    Будем рады видеть всех на наших проектах, друзья!
                </h3>
            </ImageInfo>
        </div>
    );
};

export default HomePage;


//rsc