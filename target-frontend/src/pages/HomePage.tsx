import {FC, useState} from 'react';
import LogoElement from "@/components/Elements/HomePageElements/LogoElement.tsx";
import Title from "@/components/Elements/HomePageElements/Title.tsx";
import GameHomeElement from "@/components/Elements/HomePageElements/GameHomeElement.tsx";
import ImageInfo from "@/components/Elements/HomePageElements/ImageInfo.tsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";
import {Separator} from "@radix-ui/react-separator";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import SquadBoard from "@/components/Elements/HomePageElements/SquadBoard.tsx";

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
            gameName: 'Поедание сосики',
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

    const [carouselImageLinks] = useState<string[]>([
        'https://sun9-38.userapi.com/s/v1/ig2/d6Qx0Q-ZaCttoYiakV3zMxmRK1rS1d4R4hCkPzIELKUch-nPmaeOS3iAeEqdN4IscJJvbq-WkwiPzMwvutDPMFIn.jpg?quality=95&crop=0,0,1935,1152&as=32x19,48x29,72x43,108x64,160x95,240x143,360x214,480x286,540x321,640x381,720x429,1080x643,1280x762,1440x857,1935x1152&from=bu&cs=1280x762',
        'https://sun9-77.userapi.com/s/v1/ig2/c-3MEDcykoZZn8AwQBktSYlrK6s69L5dtX4NvtW3rjj7bMzcdLdxDWP4fdelFufheTVqye0yGArq1uYlnoEdr7bA.jpg?quality=95&crop=0,201,2560,1523&as=32x19,48x29,72x43,108x64,160x95,240x143,360x214,480x286,540x321,640x381,720x428,1080x643,1280x761,1440x857,2560x1523&from=bu&cs=2560x1523',
        'https://sun9-56.userapi.com/impg/_67KO4pZF9soe1xVin-aWdEgoTOZOiuVkqnqfg/ZiwHXU9vXR8.jpg?size=1080x720&quality=96&sign=ea03c7e4b7a149517ceca944f90d6721&type=album',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZsMufQQlhdkT210kVrSmg31SLTXrZKKkrw&s'
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
                        {games.map((game, index) => (
                            <GameHomeElement
                                key={index}
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
                    <span className="font-bold">
                        (Приказ Минспорта России от 31.10.2022 N 874 "Об утверждении федерального стандарта спортивной
                        подготовки по виду спорта "страйкбол")
                    </span>
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
            <div className="container mt-10">
                <Separator orientation="horizontal" className="bg-zinc-900 h-0.5"/>
                <div className="flex justify-center mt-10">
                    <Carousel className="w-4/5">
                        <CarouselContent>
                            {carouselImageLinks.map((imgLnk) => (
                              <CarouselItem key={imgLnk}><img alt="" src={imgLnk} width="1920" className="rounded-xl"/></CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </div>
            <div className="container">
                <Title title="Главный организаторский состав"/>
                <ScrollArea className="h-[250px]">
                    <div className="flex justify-between space-x-16 lg:mr-48 lg:ml-48">
                        <SquadBoard Name="Первый" ImageURL="1.jpg" Description="Первый чел" IsOrganizer={true}/>
                        <SquadBoard Name="Второй" ImageURL="10.jpg" Description="Второй чел" IsOrganizer={true}/>
                    </div>
                    <ScrollBar orientation="horizontal"/>
                </ScrollArea>
                <Title title="Команда Игротехов"/>
                <ScrollArea className="h-[300px]">
                    <div className="flex justify-between space-x-16">
                        <SquadBoard Name="Первый" ImageURL="2.jpg" Description="Первый чел"/>
                        <SquadBoard Name="Второй" ImageURL="3.jpg" Description="Второй чел"/>
                        <SquadBoard Name="Второй" ImageURL="4.jpg" Description="Второй чел"/>
                        <SquadBoard Name="Второй" ImageURL="5.jpg" Description="Второй чел"/>
                        <SquadBoard Name="Второй" ImageURL="6.jpg" Description="Второй чел"/>
                        <SquadBoard Name="Второй" ImageURL="7.jpg" Description="Второй чел"/>
                        <SquadBoard Name="Второй" ImageURL="8.jpg" Description="Второй чел"/>
                        <SquadBoard Name="Второй" ImageURL="9.jpg" Description="Второй чел"/>
                    </div>
                    <ScrollBar orientation="horizontal"/>
                </ScrollArea>
                <Title title="где мы"/>
            </div>
            <div className="flex justify-start space-x-3 lg:space-x-10">
                <div className="bg-[url(/assets/image6.jpg)] w-[250px] h-[250px] lg:w-[800px] lg:h-[800px] bg-no-repeat ">
                    <div className="bg-black w-[250px] h-[250px] lg:w-[800px] lg:h-[800px] absolute opacity-60"/>
                </div>
                <div className="flex flex-col space-y-3">
                    <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl">
                        Республика Башкортостан
                    </h3>
                    <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl">
                        г. Уфа
                    </h3>
                    <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl text-orange-500 underline">
                        orgsquadron@gmail.com
                    </h3>
                    <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl">
                        +7 (919)-143-18-34
                    </h3>
                    <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl">
                        +7 (905)-005-45-57
                    </h3>
                    <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl">
                        тут потом будут ссылки....
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


//rsc